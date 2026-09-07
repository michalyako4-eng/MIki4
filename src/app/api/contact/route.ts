import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(4000),
  // Honeypot. People leave it empty, bots fill it in.
  company: z.string().max(0).optional().or(z.literal("")),
});

/**
 * Small in memory throttle. Enough to stop a single source hammering the form.
 * Serverless instances are short lived, so this is a speed bump, not a wall.
 */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function rateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "That request could not be read. Please try again." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // A filled honeypot is a bot. Accept it silently so it does not retry.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "That is a few messages in a row. Please wait a minute, or call instead." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;

  if (!apiKey || !from || !to) {
    // Nothing is silently dropped. In development the enquiry lands in the
    // server log so it is still readable while email is being set up.
    console.warn(
      "[contact] RESEND_API_KEY, CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL is not set. Enquiry not emailed:",
      data,
    );
    return NextResponse.json(
      {
        error:
          "The contact form is not connected to email yet. Please call or email directly for now.",
      },
      { status: 503 },
    );
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.service ? `Interested in: ${data.service}` : null,
    "",
    data.message,
  ].filter(Boolean);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}`,
      text: lines.join("\n"),
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[contact] send failed", error);
    return NextResponse.json(
      {
        error:
          "Your message could not be sent just now. Please call or email directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

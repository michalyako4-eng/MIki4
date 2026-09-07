"use client";

import { useState } from "react";
import { services } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field =
  "w-full rounded-lg border border-line bg-surface px-3 py-2 text-base text-ink placeholder:text-muted/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-rose";
const label = "block text-sm font-semibold";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const found: Errors = {};
    if (!data.name?.trim()) found.name = "Please tell me what to call you.";
    if (!data.email?.trim()) found.email = "I need an email to reply to.";
    else if (!EMAIL_PATTERN.test(data.email.trim()))
      found.email = "That address looks incomplete. Please check it.";
    if (!data.message?.trim())
      found.message = "Tell me a little about what brings you in.";

    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setFailure("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Your message could not be sent.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFailure(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please call instead.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">
          Your message is with me
        </h3>
        <p className="mt-3 text-base text-muted">
          I read everything myself and usually reply within a day. If it is
          urgent, calling is faster than waiting on email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-line bg-surface px-3 py-2 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sand active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot. Hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${field} mt-2 ${errors.name ? "border-rose" : ""}`}
            placeholder="What should I call you?"
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-rose-deep">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${field} mt-2 ${errors.email ? "border-rose" : ""}`}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-rose-deep">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${field} mt-2`}
            placeholder="If you would rather I called"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={label}>
          What are you interested in?
        </label>
        <select id="service" name="service" className={`${field} mt-2`} defaultValue="">
          <option value="">I am not sure yet</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          What brings you in?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} mt-2 resize-y ${errors.message ? "border-rose" : ""}`}
          placeholder="As much or as little as you want to say. Sleep, pain, grief, or just curiosity are all fine answers."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-rose-deep">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-lg border border-line bg-rose-soft px-3 py-2 text-sm text-rose-deep"
        >
          {failure}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-rose px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-rose-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending your message" : "Send message"}
      </button>

      <p className="text-xs text-muted">
        What you write here comes to me only. I do not add anyone to a mailing
        list and I do not share it.
      </p>
    </form>
  );
}

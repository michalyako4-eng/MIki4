import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this website collects, why, and how to have it deleted.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy",
  },
  twitter: { title: "Privacy" },
};

/**
 * TODO:CONFIRM — this is a plain language starting point, not legal advice.
 * If Miki keeps any health notes about clients, have someone confirm what her
 * state requires of her before this goes live.
 */
export default function PrivacyPage() {
  return (
    <section className="px-6 pb-16 pt-28">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="hero-gradient-text text-5xl font-semibold tracking-tight">
          Privacy
        </h1>
        <p className="mt-8 text-lg text-muted">
          Short version: this website collects nothing about you unless you fill
          in the contact form, and what you write there comes to one inbox.
        </p>

        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              What the contact form collects
            </h2>
            <p className="mt-4 text-base text-muted">
              Your name, your email address, your phone number if you choose to
              give it, and whatever you write in the message. It is emailed
              directly to Miki and is not stored in a database on this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              What it is used for
            </h2>
            <p className="mt-4 text-base text-muted">
              Replying to you, and arranging a session. Nothing else. You are not
              added to a mailing list, and your details are never sold, traded or
              passed to anyone else.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Cookies</h2>
            <p className="mt-4 text-base text-muted">
              This website does not set advertising or tracking cookies, and it
              does not run an analytics tracker.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Session notes
            </h2>
            <p className="mt-4 text-base text-muted">
              Any notes taken about a session are kept privately and are never
              published or shared without your written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Having your details removed
            </h2>
            <p className="mt-4 text-base text-muted">
              Call {site.contact.phone} and ask, and everything held about you
              is deleted. No reason needed and no follow up questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

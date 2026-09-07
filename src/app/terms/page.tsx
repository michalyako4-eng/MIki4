import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Booking, cancellation and what Reiki is and is not, stated plainly.",
  alternates: { canonical: "/terms" },
};

/** TODO:CONFIRM — a plain language starting point, not legal advice. */
export default function TermsPage() {
  return (
    <section className="px-6 pb-24 pt-40 md:pt-48">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="hero-gradient-text text-5xl font-semibold tracking-tight">
          Terms
        </h1>
        <p className="mt-8 text-lg text-muted">
          The things worth being clear about before you book.
        </p>

        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Reiki is a complementary practice
            </h2>
            <p className="mt-4 text-base text-muted">
              Reiki does not diagnose, treat or cure any medical condition, and
              it is not a substitute for care from a licensed medical
              professional. Nothing said during a session is medical advice, and
              you will never be advised to stop or change a treatment your doctor
              has prescribed. Please keep your care team informed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Booking and payment
            </h2>
            <p className="mt-4 text-base text-muted">
              Sessions are paid for at the appointment unless agreed otherwise.
              Prices listed on this website are current, and any change is
              announced before your next booking, never applied retroactively.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Cancellation
            </h2>
            <p className="mt-4 text-base text-muted">
              Move or cancel any booking up to 24 hours beforehand at no cost.
              Inside 24 hours, half the session fee is due, though this is waived
              for illness and emergencies without questions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              First session guarantee
            </h2>
            <p className="mt-4 text-base text-muted">
              If you finish your first session and feel it was not for you, say
              so before you leave and there is no charge.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Consent during a session
            </h2>
            <p className="mt-4 text-base text-muted">
              You may ask for the session to pause or stop at any moment, and you
              never have to give a reason. You choose whether there is physical
              contact at all.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Minors and booking for others
            </h2>
            <p className="mt-4 text-base text-muted">
              Clients under 18 need a parent or guardian present. If you book on
              behalf of another adult, please make sure they have agreed to it
              first.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Questions</h2>
            <p className="mt-4 text-base text-muted">
              Email {site.contact.email} or call {site.contact.phone}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarBlank, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";

/**
 * Renders the embedded scheduler once `site.scheduler.embedUrl` is set.
 * Until then it shows a composed fallback rather than an empty panel, so the
 * page is never broken while the scheduling account is being set up.
 */
export function Scheduler() {
  if (!site.scheduler.embedUrl) {
    return (
      <div className="rounded-2xl border border-line bg-sand p-8">
        <CalendarBlank size={28} weight="light" className="text-rose" />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          Booking is by message or phone for now
        </h3>
        <p className="mt-3 max-w-md text-base text-muted">
          For a private session in Alamo, call me or send the form below with a
          few times that suit you. For a session at Forma Gym in Walnut Creek,
          book at their front desk. If you would rather talk it through first,
          call me. I do not mind questions.
        </p>
        <a
          href={site.contact.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-rose-deep active:scale-[0.98]"
        >
          <Phone size={18} weight="fill" />
          {site.contact.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <iframe
        src={site.scheduler.embedUrl}
        title={`Book a session with ${site.practitioner}`}
        className="h-[760px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}

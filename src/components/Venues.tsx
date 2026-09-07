import { Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { venues } from "@/content/site";

export function Venues() {
  return (
    <ul className="grid gap-8 md:grid-cols-2">
      {venues.map((venue, index) => (
        <Reveal
          as="li"
          key={venue.name}
          delay={index * 80}
          className="flex flex-col rounded-2xl border border-line bg-surface p-8"
        >
          <h3 className="text-xl font-semibold tracking-tight">{venue.name}</h3>

          <p className="mt-3 flex items-start gap-3 text-sm text-muted">
            <MapPin size={18} weight="light" className="mt-0.5 shrink-0 text-rose" />
            {venue.address}
          </p>

          {venue.hours ? (
            <div className="mt-2 flex items-start gap-3 text-sm text-muted">
              <Clock size={18} weight="light" className="mt-0.5 shrink-0 text-rose" />
              <span>
                {venue.hours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ) : null}

          <p className="mt-6 text-base text-muted">{venue.detail}</p>

          <div className="mt-auto pt-8">
            <a
              href={venue.bookingHref}
              className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-3 py-2 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sand active:scale-[0.98]"
            >
              {venue.bookingLabel}
            </a>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

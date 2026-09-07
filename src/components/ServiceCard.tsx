import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import type { Service } from "@/content/site";

export function ServiceCard({
  service,
  delay = 0,
  headingLevel: Heading = "h3",
  children,
}: {
  service: Service;
  delay?: number;
  headingLevel?: "h2" | "h3";
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <Photo
        src={service.photo.src}
        alt={service.photo.alt}
        ratio="aspect-[16/10]"
        className="rounded-none border-0"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <div className="flex flex-1 flex-col p-8">
        <Heading className="text-2xl font-semibold tracking-tight">
          {service.name}
        </Heading>

        <ul className="mt-4 flex flex-wrap gap-2">
          {service.pricing.map((tier) => (
            <li
              key={tier.duration}
              className="rounded-full border border-line bg-sand px-3 py-2 text-sm"
            >
              <span className="font-semibold text-rose">{tier.price}</span>
              <span className="text-muted"> · {tier.duration}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base text-muted">{service.summary}</p>

        <ul className="mt-6 space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted">
              <span aria-hidden="true" className="text-rose">
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>

        {children ? <div className="mt-auto pt-8">{children}</div> : null}
      </div>
    </Reveal>
  );
}

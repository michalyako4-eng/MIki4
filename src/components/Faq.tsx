import { Plus } from "@phosphor-icons/react/dist/ssr";
import { faqs } from "@/content/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {faqs.map((faq, index) => (
        <Reveal as="li" key={faq.q} delay={Math.min(index, 5) * 60}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold tracking-tight transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-rose-deep [&::-webkit-details-marker]:hidden">
              {faq.q}
              <Plus
                size={20}
                weight="light"
                className="mt-1 shrink-0 text-rose transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45"
              />
            </summary>
            <p className="max-w-2xl pb-6 text-base text-muted">{faq.a}</p>
          </details>
        </Reveal>
      ))}
    </ul>
  );
}

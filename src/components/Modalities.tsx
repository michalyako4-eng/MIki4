import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { modalities } from "@/content/site";

export function Modalities() {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {modalities.map((item, index) => (
        <Reveal
          as="li"
          key={item.name}
          delay={Math.min(index, 4) * 70}
          className="overflow-hidden rounded-2xl border border-line bg-surface"
        >
          <Photo
            src={item.photo.src}
            alt={item.photo.alt}
            ratio="aspect-[4/3]"
            className="rounded-none border-0"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

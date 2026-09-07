import Image from "next/image";

/** A photograph in a rounded, bordered frame, cropped to a given ratio. */
export function Photo({
  src,
  alt,
  ratio = "aspect-[3/4]",
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 45vw, 100vw",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-sand ${ratio} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

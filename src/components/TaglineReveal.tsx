"use client";

import { useEffect, useRef } from "react";

/**
 * Large type moment. Each word lifts from a muted tone to full ink one at a
 * time, in reading order, as the block crosses the viewport. One observer per
 * word, so nothing runs on scroll.
 */
export function TaglineReveal({ lines }: { lines: readonly string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const words = Array.from(
      node.querySelectorAll<HTMLElement>("[data-word]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const index = Number(el.dataset.index ?? 0);
          window.setTimeout(() => {
            el.dataset.lit = "true";
          }, index * 55);
          observer.unobserve(el);
        }
      },
      { threshold: 1, rootMargin: "0px 0px -25% 0px" },
    );

    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  let index = 0;

  return (
    <p
      ref={ref}
      className="max-w-[680px] text-4xl font-medium tracking-tight"
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word) => (
            <span
              key={`${lineIndex}-${index}`}
              data-word
              data-index={index++}
              className="tagline-word inline-block"
            >
              {word}
              {" "}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}

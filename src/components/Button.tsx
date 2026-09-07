import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

const variants = {
  primary: "bg-rose text-white hover:bg-rose-deep",
  secondary: "border border-line bg-surface text-ink hover:bg-sand",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export const buttonStyles = { base, variants };

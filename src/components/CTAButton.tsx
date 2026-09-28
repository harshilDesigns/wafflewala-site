import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "hero";
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-block rounded-xl px-6 py-3 font-medium text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";

  const styles = {
    primary: `${base} bg-honey text-choco hover:bg-honey/90`,
    secondary: `${base} border-2 border-caramel text-caramel hover:bg-caramel hover:text-cream`,
    hero: `${base} border-2 border-cream text-cream hover:bg-cream hover:text-choco`,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}

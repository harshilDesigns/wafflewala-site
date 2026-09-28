"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/business";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-caramel/20">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-2xl font-bold text-caramel tracking-tight">
          {business.name}
        </Link>

        <button
          className="flex md:hidden flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-choco transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-choco transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-choco transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-caramel ${
                isActive(link.href) ? "text-caramel" : "text-choco/70"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-caramel rounded-full" />
              )}
            </Link>
          ))}
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="ml-2 rounded-xl bg-honey px-4 py-2 text-sm font-medium text-choco transition-all duration-200 hover:bg-honey/80 hover:-translate-y-0.5 hover:shadow-md"
            >
              Call Now
            </a>
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-caramel/20 px-4 py-4 flex flex-col gap-2 bg-cream">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-cream-alt ${
                isActive(link.href) ? "text-caramel bg-cream-alt" : "text-choco/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="mt-2 rounded-xl bg-honey px-4 py-2 text-center font-medium text-choco transition-all duration-200 hover:bg-honey/80"
            >
              Call Now
            </a>
          )}
        </div>
      )}
    </nav>
  );
}

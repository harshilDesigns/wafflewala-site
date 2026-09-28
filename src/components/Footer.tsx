import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-choco text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-caramel">
              {business.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">{business.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold tracking-tight text-caramel">
              Contact
            </h4>
            <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-cream/60">
              <p>{business.address}</p>
              <p>{business.hours}</p>
              {business.phone && (
                <a href={`tel:${business.phone}`} className="block transition-colors hover:text-caramel">
                  {business.phone}
                </a>
              )}
              {business.whatsapp && (
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-caramel"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold tracking-tight text-caramel">
              Follow
            </h4>
            <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-cream/60">
              <p>{business.instagram}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/30">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

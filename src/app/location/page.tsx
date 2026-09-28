import FadeIn from "@/components/FadeIn";
import CTAButton from "@/components/CTAButton";
import { business } from "@/data/business";

export default function LocationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-28 lg:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-choco sm:text-5xl lg:text-6xl">
        Location &amp; Contact
      </h1>

      <FadeIn>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-caramel">
              Address
            </h2>
            <p className="mt-3 leading-relaxed text-choco/70">{business.address}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-caramel">
              Hours
            </h2>
            <p className="mt-3 leading-relaxed text-choco/70">{business.hours}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-caramel">
              Contact
            </h2>
            <div className="mt-3 space-y-2 leading-relaxed text-choco/70">
              {business.phone ? (
                <a
                  href={`tel:${business.phone}`}
                  className="block transition-colors hover:text-caramel"
                >
                  {business.phone}
                </a>
              ) : (
                <p className="italic text-choco/40">Phone number coming soon</p>
              )}
              {business.whatsapp ? (
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-caramel"
                >
                  WhatsApp
                </a>
              ) : (
                <p className="italic text-choco/40">WhatsApp coming soon</p>
              )}
              <p>{business.instagram}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton
                href={`https://www.google.com/maps/dir/?api=1&destination=${business.googleMapsQuery}`}
                external
              >
                Get Directions
              </CTAButton>
              {business.phone && (
                <CTAButton href={`tel:${business.phone}`} variant="secondary">
                  Call Now
                </CTAButton>
              )}
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-xl border border-caramel/10 shadow-sm lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src={`https://maps.google.com/maps?q=${business.googleMapsQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wafflewala location on Google Maps"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

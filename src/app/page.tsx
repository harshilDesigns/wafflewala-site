import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FadeIn from "@/components/FadeIn";
import HeroWrapper from "@/components/HeroWrapper";
import { business } from "@/data/business";
import { menuCategories } from "@/data/menu";

const highlights = [
  {
    item: menuCategories[0].items[0],
    photo: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80",
    alt: "Belgian waffle with maple syrup",
  },
  {
    item: menuCategories[0].items[1],
    photo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    alt: "Nutella waffle",
  },
  {
    item: menuCategories[0].items[2],
    photo: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80",
    alt: "Honey butter waffle",
  },
  {
    item: menuCategories[1].items[0],
    photo: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=400&q=80",
    alt: "Chocolate overload waffle",
  },
];

function WaveTop() {
  return (
    <div className="relative -mt-1 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-12">
        <path d="M0 48h1440V20c-120 12-240 20-360 20s-240-8-360-20-240-20-360-20-240 8-360 20v28z" fill="currentColor" />
      </svg>
    </div>
  );
}

function WaveBottom() {
  return (
    <div className="relative -mt-1 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-12">
        <path d="M0 0h1440v28c-120-12-240-20-360-20s-240 8-360 20-240 20-360 20-240-8-360-20V0z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroWrapper />

      <FadeIn>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-28 lg:py-32">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-choco sm:text-4xl lg:text-5xl">
              Menu Highlights
            </h2>
            <p className="mt-3 text-choco/50 max-w-md mx-auto">
              A taste of what we serve
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.item.name}
                className="group rounded-xl border border-caramel/10 bg-cream-alt/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={h.photo}
                    alt={h.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-choco tracking-tight">
                  {h.item.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-choco/60">
                  {h.item.description}
                </p>
                <span className="mt-3 block font-medium text-terracotta">
                  &#8377;{h.item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/menu">Full Menu</CTAButton>
          </div>
        </section>
      </FadeIn>

      <div className="text-cream-alt">
        <WaveTop />
      </div>

      <FadeIn delay={1}>
        <section className="bg-cream-alt py-16 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-choco sm:text-4xl lg:text-5xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-choco/70">
                  <p>
                    Wafflewala started with one griddle and a simple idea — waffles made
                    fresh, right in front of you, loaded the way you like them.
                  </p>
                  <p>
                    Every waffle here is cooked to order, never pre-made, never sitting
                    around. Come by, watch it sizzle, and grab a bite that&apos;s
                    actually warm when it hits your plate.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 font-medium text-caramel transition-all duration-200 hover:text-terracotta hover:gap-2"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-caramel/10 shadow-md lg:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80"
                  alt="Inside Wafflewala — food being prepared"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <div className="text-cream">
        <WaveBottom />
      </div>

      <FadeIn delay={2}>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-28 lg:py-32">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-choco sm:text-4xl lg:text-5xl">
              Visit Us
            </h2>
            <p className="mt-3 text-choco/60">{business.address}</p>
            <p className="mt-1 text-choco/60">{business.hours}</p>
          </div>
          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-caramel/10 shadow-sm">
            <iframe
              src={`https://maps.google.com/maps?q=${business.googleMapsQuery}&output=embed`}
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wafflewala location on Google Maps"
            />
          </div>
          <div className="mt-8 text-center">
            <CTAButton
              href={`https://www.google.com/maps/dir/?api=1&destination=${business.googleMapsQuery}`}
              external
            >
              Get Directions
            </CTAButton>
          </div>
        </section>
      </FadeIn>
    </>
  );
}

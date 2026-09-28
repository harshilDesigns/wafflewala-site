import FadeIn from "@/components/FadeIn";
import { business } from "@/data/business";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-28 lg:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-choco sm:text-5xl lg:text-6xl">
        About {business.name}
      </h1>

      <FadeIn>
        <div className="mt-12 space-y-7 text-lg leading-relaxed text-choco/75">
          <p>
            Wafflewala started with one griddle and a simple idea — waffles made
            fresh, right in front of you, loaded the way you like them.
          </p>
          <p>
            Every waffle here is cooked to order. Nothing is pre-made, nothing
            sits under a heat lamp. You order, we pour the batter on the griddle,
            and you watch it turn golden. That&apos;s the only way we know how to
            do it.
          </p>
          <p>
            We&apos;re in Mehsana — a city that knows good food — and we
            &apos;re here to prove that a waffle doesn&apos;t need to be a
            fancy dessert. It can be your evening snack, your post-dinner treat,
            or the reason you smile halfway through your day.
          </p>
          <p>
            Come by, watch it sizzle, and grab a bite that&apos;s actually warm
            when it hits your plate.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1}>
        <div className="mt-16 rounded-xl border border-caramel/10 bg-cream-alt/80 p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-choco">
            Visit Us
          </h2>
          <div className="mt-4 space-y-1.5 leading-relaxed text-choco/70">
            <p>{business.address}</p>
            <p>{business.hours}</p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

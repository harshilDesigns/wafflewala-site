import FadeIn from "@/components/FadeIn";
import MenuCard from "@/components/MenuCard";
import { menuCategories } from "@/data/menu";

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-28 lg:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-choco sm:text-5xl lg:text-6xl">
        Our Menu
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-choco/50 max-w-lg">
        Fresh, made-to-order waffles — every item cooked when you order it.
      </p>

      <div className="mt-16 space-y-16">
        {menuCategories.map((category, i) => (
          <FadeIn key={category.category} delay={(i % 3) as 0 | 1 | 2}>
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-caramel border-b border-caramel/20 pb-3 sm:text-3xl">
                {category.category}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {category.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

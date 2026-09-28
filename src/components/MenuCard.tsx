import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="rounded-xl border border-caramel/10 bg-cream-alt/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-choco tracking-tight">
          {item.name}
        </h3>
        <span className="shrink-0 font-medium text-terracotta">
          &#8377;{item.price}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-choco/60">
        {item.description}
      </p>
    </div>
  );
}

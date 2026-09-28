import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
  "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=600&q=80",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  "https://images.unsplash.com/photo-1534531173927-aeb928d54385?w=600&q=80",
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <div
          key={src}
          className="group relative aspect-square overflow-hidden rounded-xl border border-caramel/10 shadow-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
        >
          <Image
            src={src}
            alt={`Wafflewala gallery photo ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

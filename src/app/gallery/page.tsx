import FadeIn from "@/components/FadeIn";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-28 lg:py-32">
      <h1 className="font-display text-4xl font-bold tracking-tight text-choco sm:text-5xl lg:text-6xl">
        Gallery
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-choco/50 max-w-lg">
        A look inside Wafflewala — our food, our space, our vibe.
      </p>
      <FadeIn>
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </FadeIn>
    </div>
  );
}

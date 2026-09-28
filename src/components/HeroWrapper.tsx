"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { business } from "@/data/business";

type Phase = "init" | "cover" | "peel" | "done";

function BlobLayer({
  src,
  z,
  covering,
  side,
}: {
  src: string;
  z: number;
  covering: boolean;
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  const closedPose = {
    x: isLeft ? "-24vw" : "24vw",
    rotate: 0,
    scale: 1,
    opacity: 1,
  };

  const openPose = {
    x: isLeft ? "-80vw" : "80vw",
    y: isLeft ? "-10vh" : "10vh",
    rotate: isLeft ? -14 : 14,
    scale: 1.4,
    opacity: 0,
  };

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ zIndex: z }}
    >
      <motion.img
        src={src}
        alt=""
        className="h-[220vmax] w-[220vmax] max-w-none max-h-none"
        initial={closedPose}
        animate={covering ? closedPose : openPose}
        transition={
          covering
            ? {
                x: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }
            : {
                duration: isLeft ? 1.25 : 1.0,
                ease: "easeInOut",
                delay: isLeft ? 0.1 : 0,
              }
        }
      />
    </motion.div>
  );
}

export default function HeroWrapper() {
  const [phase, setPhase] = useState<Phase>("init");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const skip =
      mq.matches || sessionStorage.getItem("seenIntro") === "true";

    if (skip) {
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }

    sessionStorage.setItem("seenIntro", "true");

    const timers = [
      setTimeout(() => setPhase("cover"), 0),
      setTimeout(() => setPhase("peel"), 1200),
      setTimeout(() => setPhase("done"), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const blobsVisible = phase === "init" || phase === "cover" || phase === "peel";
  const covering = phase === "init" || phase === "cover";
  const logoVisible = phase === "cover" || phase === "peel";

  return (
    <section className="relative flex min-h-[calc(100dvh-61px)] items-center overflow-hidden bg-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-0">
        <div className="relative z-10">
          <h1 className="font-display text-5xl font-bold tracking-tight text-choco sm:text-6xl lg:text-7xl xl:text-8xl">
            {business.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-choco/80 sm:text-xl">
            {business.tagline}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-choco/60 sm:text-base">
            {business.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/menu">View Menu</CTAButton>
            <CTAButton href="/location" variant="secondary">
              Get Directions
            </CTAButton>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full lg:absolute lg:right-[-25.5vw] lg:top-[-17.66vw] lg:w-[63.33vw] lg:max-w-none lg:rotate-[-39.14deg]">
          <Image
            src="/images/hero/waffle%20cartoon%20cutout.png"
            alt="Wafflewala waffle cartoon cutout"
            width={800}
            height={800}
            className="h-auto w-full object-contain"
            style={{
              filter: "drop-shadow(-14px 9px 10px rgba(0, 0, 0, 0.25))",
            }}
            priority
            sizes="(max-width: 1024px) 100vw, 63vw"
          />
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-cream-alt/40 to-transparent lg:block" />

      {blobsVisible && (
        <>
          <BlobLayer
            src="/images/blob-cream.svg"
            z={99}
            covering={covering}
            side="left"
          />
          <BlobLayer
            src="/images/blob-caramel.svg"
            z={100}
            covering={covering}
            side="right"
          />
        </>
      )}

      {logoVisible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[110] flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        >
          <motion.span
            className="font-display text-5xl font-bold tracking-tight text-cream sm:text-7xl lg:text-8xl"
            animate={phase === "peel" ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {business.name}
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}

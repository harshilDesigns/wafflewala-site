"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 0 ? "animate-fade-in-up" : delay === 1 ? "animate-fade-in-up-delay-1" : "animate-fade-in-up-delay-2";

  return (
    <div ref={ref} className={`${visible ? delayClass : "opacity-0"} ${className}`}>
      {children}
    </div>
  );
}

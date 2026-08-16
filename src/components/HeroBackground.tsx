"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroCarouselSlides } from "@/data/site";

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroCarouselSlides.length) % heroCarouselSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  return (
    <div className="hero-background" aria-hidden="true">
      {heroCarouselSlides.map((item, i) => (
        <div key={item.image} className={`hero-background-slide ${i === index ? "active" : ""}`}>
          <Image src={item.image} alt="" fill priority={i === 0} sizes="100vw" className="hero-background-image" />
        </div>
      ))}
    </div>
  );
}

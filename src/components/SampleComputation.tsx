"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { sampleComputationContent } from "@/data/site";

export default function SampleComputation() {
  const { label, title, intro, items } = sampleComputationContent;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="sample-computation section" id="sample-computation">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{intro}</p>
        </Reveal>

        <div className="sample-computation-grid">
          {items.map((item, index) => (
            <Reveal key={item.title}>
              <button
                type="button"
                className="sample-computation-card"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <div className="sample-computation-thumb">
                  <Image
                    src={item.image}
                    alt={`${item.title} sample computation`}
                    width={600}
                    height={800}
                    className="sample-computation-image"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <span className="sample-computation-zoom">Tap to zoom</span>
                </div>
                <p className="sample-computation-caption">{item.title}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="sample-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            className="sample-lightbox-backdrop"
            aria-label="Close full screen view"
            onClick={() => setActiveIndex(null)}
          />
          <div className="sample-lightbox-content">
            <div className="sample-lightbox-header">
              <p className="sample-lightbox-title">{activeItem.title}</p>
              <button
                type="button"
                className="btn btn-primary sample-lightbox-close"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
            </div>
            <Image
              src={activeItem.image}
              alt={`${activeItem.title} sample computation full view`}
              width={1200}
              height={1600}
              className="sample-lightbox-image"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

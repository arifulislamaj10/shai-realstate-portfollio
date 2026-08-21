"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials, testimonialsContent } from "@/data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="testimonials section" id="stories">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{testimonialsContent.label}</span>
          <h2 className="section-title">{testimonialsContent.title}</h2>
          <p className="section-desc">{testimonialsContent.description}</p>
        </Reveal>

        <Reveal className="client-stories-carousel">
          <div className="client-stories-viewport">
            <div
              className="client-stories-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article key={item.id} className="client-story">
                  <div className="client-story-photo">
                    <div className="client-story-frame">
                      <Image
                        src={item.image}
                        alt={`${item.unit} client story`}
                        width={640}
                        height={480}
                        className="client-story-image"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  </div>

                  <div className="client-story-content">
                    <div className="client-story-header">
                      <strong>{item.unit}</strong>
                    </div>
                    <p className="client-story-quote">{item.quote}</p>
                    <div className="client-story-meta">
                      <span className="client-story-location">{item.location}</span>
                      <span className="client-story-price">{item.price}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="client-stories-dots">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`client-stories-dot ${index === i ? "active" : ""}`}
                aria-label={`Go to story ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

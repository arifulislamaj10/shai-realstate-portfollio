"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

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
    <section className="testimonials section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Turnover Photos</h2>
          <p className="section-desc">From buyers I have worked with</p>
        </Reveal>

        <Reveal className="client-stories-carousel">
          <div className="client-stories-viewport">
            <div
              className="client-stories-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article key={item.unit} className="client-story">
                  <div className="client-story-photo">
                    <div className="client-story-frame">
                      <div className="client-story-frame-inner">
                        <Image
                          src={item.image}
                          alt={`${item.clientName}, ${item.unit}`}
                          width={900}
                          height={600}
                          className="client-story-image"
                          sizes="(max-width: 768px) 260px, 320px"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="client-story-content">
                    <p className="client-story-quote">{item.quote}</p>
                    <div className="client-story-meta">
                      <strong className="client-story-name">{item.clientName}</strong>
                      <span className="client-story-unit">
                        {item.unit}, {item.location}
                      </span>
                      <span className="client-story-price">
                        Home price: <em>{item.price}</em>
                      </span>
                      <span className="client-story-rating">Satisfied client</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="client-stories-dots">
            {testimonials.map((item, i) => (
              <button
                key={item.unit}
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

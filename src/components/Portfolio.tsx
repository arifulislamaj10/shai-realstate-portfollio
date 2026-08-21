"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { portfolioContent, portfolioFilters, portfolioItems, siteConfig } from "@/data/site";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{portfolioContent.label}</span>
          <h2 className="section-title">{portfolioContent.title}</h2>
          <p className="section-desc">{portfolioContent.description}</p>
        </Reveal>

        <Reveal className="portfolio-filters">
          {portfolioFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`filter-btn ${filter === item.id ? "active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="portfolio-grid">
          {filtered.map((item) => (
            <Reveal key={item.id}>
              <article className="portfolio-item">
                <div className="portfolio-image">
                  <Image
                    src={item.image}
                    alt={`Hamana Homes ${item.name}`}
                    width={680}
                    height={510}
                    className="portfolio-photo"
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-tag">{item.tag}</span>
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="portfolio-cta">
          <p>{portfolioContent.cta}</p>
          <Link href="#contact" className="btn btn-primary">
            Contact {siteConfig.name}
          </Link>
          <p className="section-cta-note">
            Official reference:{" "}
            <Link
              href={siteConfig.hamanaUnits}
              target="_blank"
              rel="noopener noreferrer"
            >
              HamanaHomes.com.ph
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { faqItems, siteConfig } from "@/data/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-desc">Quick answers — message {siteConfig.name} if you need more detail</p>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question}>
                <article className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? <div className="faq-answer">{item.answer}</div> : null}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="faq-footer">
          <p>Still have questions?</p>
          <Link href="#contact" className="btn btn-secondary">
            Contact {siteConfig.name}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import { buildContactMessage, getWhatsAppUrl, siteConfig } from "@/data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      interest: String(data.get("interest") || ""),
      message: String(data.get("message") || "").trim(),
    };

    const text = buildContactMessage(fields);

    if (whatsappUrl) {
      const useWhatsApp = confirm(
        "Your message is ready!\n\nClick OK to open WhatsApp.\nClick Cancel to open Facebook instead."
      );

      if (useWhatsApp) {
        window.open(getWhatsAppUrl(text) || whatsappUrl, "_blank");
      } else {
        navigator.clipboard.writeText(text).then(() => {
          alert("Message copied! Paste it when you message Shan on Facebook.");
          window.open(siteConfig.facebook, "_blank");
        });
      }
    } else {
      const useFacebook = confirm(
        "Your message is ready!\n\nClick OK to open Facebook and message Shan Shai.\n\nClick Cancel to copy your message details."
      );

      if (useFacebook) {
        window.open(siteConfig.facebook, "_blank");
      } else {
        navigator.clipboard.writeText(text).then(() => {
          alert("Message copied! Paste it when you message Shan on Facebook.");
          window.open(siteConfig.facebook, "_blank");
        });
      }
    }

    form.reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-info">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Send a Message</h2>
            <p className="contact-desc">
              May question about Hamana Homes? Message me on Facebook or WhatsApp.
            </p>

            <div className="contact-channels">
              {whatsappUrl ? (
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-btn contact-channel-btn--whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Link>
              ) : null}
              <Link
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-btn contact-channel-btn--facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Link>
            </div>

            <div className="contact-details">
              {whatsappUrl && siteConfig.phone ? (
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-link-icon contact-link-icon--whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>{siteConfig.phone}</span>
                  </div>
                </Link>
              ) : null}
              <Link
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon contact-link-icon--facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
                <div>
                  <strong>Facebook</strong>
                  <span>{siteConfig.facebookHandle}</span>
                </div>
              </Link>
              <div className="contact-link">
                <span className="contact-link-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <strong>Location</strong>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
              <div className="contact-link">
                <span className="contact-link-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                </span>
                <div>
                  <strong>Company</strong>
                  <span>Hamana Homes, Pacifica Homes</span>
                </div>
              </div>
              <p className="contact-official-note">
                Official site (reference):{" "}
                <Link
                  href={siteConfig.hamanaWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hamanahomes.com.ph
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone / Messenger</label>
                <input id="phone" name="phone" type="tel" placeholder="+63 XXX XXX XXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="interest">I&apos;m interested in</label>
                <select id="interest" name="interest" defaultValue="buying">
                  <option value="buying">Buy a unit</option>
                  <option value="site-trip">Site visit</option>
                  <option value="financing">Loan / financing</option>
                  <option value="reservation">Reservation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What do you want to ask?"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {submitted ? "Opening..." : "Send Message"}
              </button>
              <p className="form-note">
                Or message me on{" "}
                <Link href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

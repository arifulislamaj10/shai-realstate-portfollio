import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { aboutPhdcContent } from "@/data/site";

export default function AboutPhdcContent() {
  const { pageTitle, pageSubtitle, sections, vision, mission } = aboutPhdcContent;

  return (
    <>
      <header className="about-phdc-hero">
        <div className="container">
          <Reveal>
            <Link href="/" className="about-phdc-back">
              ← Back to home
            </Link>
            <p className="about-phdc-subtitle">{pageSubtitle}</p>
            <h1 className="about-phdc-title">{pageTitle}</h1>
          </Reveal>
        </div>
      </header>

      {sections.map((section) => (
        <article key={section.id} className="about-phdc-section" id={section.id}>
          {section.image ? (
            <figure className="about-phdc-figure">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={1920}
                height={1080}
                className="about-phdc-image"
                sizes="100vw"
                priority={section.id === "about-phdc"}
              />
            </figure>
          ) : null}

          <div className="container about-phdc-body">
            <Reveal>
              <h2 className="about-phdc-heading">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="about-phdc-text">
                  {paragraph}
                </p>
              ))}

              {section.images?.length ? (
                <div className="about-phdc-gallery">
                  {section.images.map((image) => (
                    <figure key={image.src} className="about-phdc-gallery-item">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={960}
                        height={1200}
                        className="about-phdc-gallery-image"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </figure>
                  ))}
                </div>
              ) : null}
            </Reveal>
          </div>
        </article>
      ))}

      <div className="container about-phdc-values">
        <Reveal>
          <h2 className="about-phdc-heading">Our Vision</h2>
          <p className="about-phdc-text">{vision}</p>
        </Reveal>

        <Reveal>
          <h2 className="about-phdc-heading">Our Mission</h2>
          <ul className="about-phdc-list">
            {mission.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="about-phdc-cta">
          <p className="about-phdc-text">
            Interested in Hamana Homes? Message Rish for available units or a site visit.
          </p>
          <Link href="/#contact" className="btn btn-primary">
            Contact Rish
          </Link>
        </Reveal>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { aboutContent, siteConfig, stats } from "@/data/site";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-wrap">
              <Image
                src={siteConfig.profilePhoto}
                alt={`${siteConfig.name}, ${siteConfig.title}`}
                width={1086}
                height={1448}
                className="about-photo"
                sizes="(max-width: 968px) 400px, 480px"
                priority
              />
              <div className="about-badge">
                <Image
                  src={siteConfig.hamanaLogo}
                  alt="Hamana Homes"
                  width={80}
                  height={30}
                  className="badge-logo"
                />
                <span>{siteConfig.company}</span>
              </div>
            </div>
          </div>

          <Reveal className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">{aboutContent.sectionTitle}</h2>
            <p className="about-text">{aboutContent.intro}</p>
            <p className="about-text">{aboutContent.trackRecord}</p>

            <h3 className="about-subheading">{aboutContent.timelineTitle}</h3>
            <ul className="about-highlights">
              {aboutContent.timeline.map((item) => (
                <li key={item}>
                  <span className="highlight-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="about-subheading">{aboutContent.paymentTitle}</h3>
            <p className="about-text">{aboutContent.payment}</p>

            <h3 className="about-subheading">{aboutContent.ofwTitle}</h3>
            <p className="about-text">{aboutContent.virtualTripping}</p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-number">{stat.number}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              href={siteConfig.facebookPages[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Connect on Facebook
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

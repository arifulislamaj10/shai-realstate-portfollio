import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { highlights, siteConfig, stats } from "@/data/site";

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
                width={480}
                height={600}
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
            <h2 className="section-title">Shan Shai · Hamana Homes Agent</h2>
            <p className="about-text">
              Hi, I&apos;m <strong>Shan Shai</strong>. I&apos;m a licensed real estate agent for{" "}
              <strong>Hamana Homes</strong> in <strong>Magalang, Pampanga</strong>, near Clark.
            </p>
            <p className="about-text">
              So far I&apos;ve closed <strong>4 deals</strong>. I help buyers with site visits,
              reservations, Pag-IBIG or bank loans, and turnover. Message me if you want to check
              available units or schedule a visit.
            </p>
            <ul className="about-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="highlight-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-number">{stat.number}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              href={siteConfig.facebook}
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

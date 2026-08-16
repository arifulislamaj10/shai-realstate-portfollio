import Link from "next/link";
import HeroBackground from "./HeroBackground";
import { heroContent, stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />
      <div className="hero-overlay" />

      <div className="container hero-layout">
        <div className="hero-intro">
          <p className="hero-eyebrow">{heroContent.eyebrow}</p>
          <h1 className="hero-title">{heroContent.headline}</h1>
          <p className="hero-subtitle">{heroContent.description}</p>

          <div className="hero-actions">
            <Link href={heroContent.primaryCta.href} className="btn btn-primary">
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className="btn btn-outline">
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat-number">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

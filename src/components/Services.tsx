import Image from "next/image";
import Reveal from "./Reveal";
import { services } from "@/data/site";

function ServiceIcon({ type }: { type: string }) {
  if (type === "money") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    );
  }
  if (type === "map") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    );
  }
  if (type === "key") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">How I Can Help</h2>
          <p className="section-desc">
            Hamana Homes in Magalang — developed by Pacifica Homes
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map((service) => (
            <Reveal key={service.title}>
              <article className="service-card">
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={220}
                    className="service-photo"
                  />
                </div>
                <div className="service-card-body">
                  <div className="service-card-heading">
                    <div className="service-icon">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

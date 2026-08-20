import Image from "next/image";
import Reveal from "./Reveal";
import { parentCompanyContent, siteConfig } from "@/data/site";

export default function ParentCompany() {
  const { label, title, intro, backing, image, stats, foodBrands, diningBrands } =
    parentCompanyContent;

  return (
    <section className="parent-company section" id="parent-company">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
        </Reveal>

        <div className="parent-company-grid">
          <Reveal className="parent-company-image">
            <div className="parent-company-image-wrap">
              <Image
                src={image.src}
                alt={image.alt}
                width={960}
                height={640}
                className="parent-company-photo"
                sizes="(max-width: 968px) 100vw, 480px"
              />
              <div className="parent-company-badge">
                <Image
                  src={siteConfig.hamanaLogo}
                  alt="Hamana Homes"
                  width={100}
                  height={36}
                  className="parent-company-logo"
                />
                <span>Pacifica Homes</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="parent-company-content">
            <p className="parent-company-text">{intro}</p>
            <p className="parent-company-text">{backing}</p>

            <div className="parent-company-stats">
              {stats.map((item) => (
                <div key={item.label} className="parent-company-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="parent-company-brands">
              <div className="parent-company-brand-group">
                <h3>Food brands</h3>
                <p>{foodBrands.join(", ")}</p>
              </div>
              <div className="parent-company-brand-group">
                <h3>Restaurant brands</h3>
                <p>{diningBrands.join(", ")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

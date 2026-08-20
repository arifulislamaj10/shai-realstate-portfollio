import Reveal from "./Reveal";
import { parentCompanyContent } from "@/data/site";

export default function ParentCompany() {
  const { label, title, intro, backing, stats, foodBrands, diningBrands } = parentCompanyContent;

  return (
    <section className="parent-company section" id="parent-company">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
        </Reveal>

        <Reveal className="parent-company-body">
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
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { availableUnits, siteConfig } from "@/data/site";

export default function AvailableUnits() {
  return (
    <section className="available-units section" id="units">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Unit Models</span>
          <h2 className="section-title">Available at Hamana Homes</h2>
          <p className="section-desc">
            Nanea, Meana, Onea, and Kanea. Message {siteConfig.name} for price and availability.
          </p>
        </Reveal>

        <div className="units-grid">
          {availableUnits.map((unit) => (
            <Reveal key={unit.id}>
              <article className="unit-card">
                <div className="unit-card-image">
                  <Image
                    src={unit.image}
                    alt={`Hamana Homes ${unit.name}`}
                    width={480}
                    height={320}
                    className="unit-photo"
                  />
                  <span className="unit-type-tag">{unit.type}</span>
                </div>
                <div className="unit-card-body">
                  <h3>{unit.name}</h3>
                  <p className="unit-beds">{unit.beds}</p>
                  <p className="unit-price">{unit.priceNote}</p>
                  <Link href={`/?unit=${unit.id}#contact`} className="btn btn-primary btn-full unit-cta">
                    Message {siteConfig.name} about {unit.name}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

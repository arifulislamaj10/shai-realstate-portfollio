import Image from "next/image";
import Reveal from "./Reveal";
import { amenitiesContent } from "@/data/site";

export default function Amenities() {
  const { label, title, intro, items } = amenitiesContent;

  return (
    <section className="amenities section" id="amenities">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{intro}</p>
        </Reveal>

        <div className="amenities-grid">
          {items.map((item) => (
            <Reveal key={item.name}>
              <article className="amenity-card">
                <div className="amenity-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={640}
                    height={360}
                    className="amenity-photo"
                  />
                </div>
                <div className="amenity-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

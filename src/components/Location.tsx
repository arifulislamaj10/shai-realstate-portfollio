import Image from "next/image";
import Reveal from "./Reveal";
import { locationContent } from "@/data/site";

export default function Location() {
  const { label, title, intro, banner, map, items } = locationContent;

  return (
    <section className="location section showcase--alt" id="location">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{intro}</p>
        </Reveal>

        <Reveal className="location-banner">
          <Image
            src={banner.src}
            alt={banner.alt}
            width={1600}
            height={700}
            className="location-banner-image"
            sizes="(max-width: 968px) 100vw, 960px"
          />
        </Reveal>

        <Reveal className="location-map">
          <Image
            src={map.src}
            alt={map.alt}
            width={1400}
            height={900}
            className="location-map-image"
            sizes="(max-width: 968px) 100vw, 960px"
          />
        </Reveal>

        <div className="amenities-grid location-grid">
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

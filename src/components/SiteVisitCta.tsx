import Link from "next/link";
import Reveal from "./Reveal";
import { siteConfig } from "@/data/site";

export default function SiteVisitCta() {
  return (
    <section className="site-visit-cta">
      <div className="container">
        <Reveal className="site-visit-cta-inner">
          <div className="site-visit-cta-text">
            <h2>Free site visit at Hamana Homes</h2>
            <p>See the units and community in Magalang, near Clark — or book a virtual tripping session. Message {siteConfig.name} to schedule.</p>
          </div>
          <Link href="#contact" className="btn btn-primary site-visit-cta-btn">
            Book a Site Visit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

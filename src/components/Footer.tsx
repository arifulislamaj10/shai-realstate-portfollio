import Image from "next/image";
import Link from "next/link";
import { locationContent, navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const { address, googleMapsUrl } = locationContent;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            src={siteConfig.hamanaLogo}
            alt="Hamana Homes"
            width={120}
            height={45}
            className="footer-hamana-logo"
          />
          <div>
            <strong>{siteConfig.name}</strong>
            <span>
              {siteConfig.title}, {siteConfig.company}
            </span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          <Link
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="footer-location">
        <div className="container footer-location-inner">
          <p className="footer-address">{address}</p>
          <Link
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary footer-maps-btn"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 {siteConfig.name}. Hamana Homes agent, Magalang, Pampanga.{" "}
          <Link href={siteConfig.hamanaWebsite} target="_blank" rel="noopener noreferrer">
            hamanahomes.com.ph
          </Link>
        </p>
      </div>
    </footer>
  );
}

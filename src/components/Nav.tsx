"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = section.id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="nav-container">
        <Link href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">
            <Image
              src={siteConfig.profilePhoto}
              alt={siteConfig.name}
              width={40}
              height={40}
              className="logo-photo"
              priority
            />
          </span>
          <span className="logo-text">{siteConfig.name}</span>
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={active === link.href.slice(1) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

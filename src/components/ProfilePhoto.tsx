"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";

type ProfilePhotoProps = {
  variant: "hero" | "about";
};

export default function ProfilePhoto({ variant }: ProfilePhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (variant === "hero") {
    return (
      <div className="hero-profile">
        {!failed && (
          <Image
            src={siteConfig.profilePhoto}
            alt={`${siteConfig.name}, ${siteConfig.title}`}
            width={140}
            height={140}
            className={`hero-profile-photo ${loaded ? "loaded" : ""}`}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            priority
          />
        )}
        {(!loaded || failed) && <div className="hero-profile-fallback">SS</div>}
      </div>
    );
  }

  return (
    <div className="about-image-frame">
      {!failed ? (
        <Image
          src={siteConfig.profilePhoto}
          alt={`${siteConfig.name}, ${siteConfig.title}`}
          fill
          className="about-photo"
          onError={() => setFailed(true)}
          sizes="(max-width: 968px) 400px, 480px"
        />
      ) : (
        <div className="about-image-placeholder">
          <span className="initials">SS</span>
        </div>
      )}
    </div>
  );
}

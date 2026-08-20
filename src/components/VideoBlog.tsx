import Link from "next/link";
import Reveal from "./Reveal";
import { siteConfig, videoBlogPosts } from "@/data/site";

function getVideoEmbedUrl(youtubeId: string, startAt?: number) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });
  if (startAt) params.set("start", String(startAt));
  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}

export default function VideoBlog() {
  return (
    <section className="video-blog section" id="videos">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Video Blog</span>
          <h2 className="section-title">Site Videos</h2>
          <p className="section-desc">
            Hamana Homes videos. Site tour, units, and community.
          </p>
        </Reveal>

        <div className="video-blog-grid">
          {videoBlogPosts.map((post) => (
            <Reveal key={post.id}>
              <article className="video-blog-card">
                <div className="video-blog-media">
                  <iframe
                    src={getVideoEmbedUrl(post.youtubeId, post.startAt)}
                    title={post.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="video-blog-body">
                  <span className="video-blog-tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="video-blog-cta">
          <p>Have questions after watching? Send me a message.</p>
          <Link href="#contact" className="btn btn-primary">
            Contact {siteConfig.name}
          </Link>
          <p className="section-cta-note">
            Official reference:{" "}
            <Link
              href={siteConfig.hamanaWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              HamanaHomes.com.ph
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

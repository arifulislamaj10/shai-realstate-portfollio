import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a2e",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Rish | Hamana Homes Agent, Magalang, Pampanga",
  description:
    "Rish, in-house agent for Hamana Homes near Clark. 5 deals in 3 months. Site visits, reservations, bank loans, and turnover.",
  keywords: [
    "Rish",
    "Hamana Homes",
    "real estate",
    "Pampanga",
    "Magalang",
    "Clark",
  ],
  openGraph: {
    title: "Rish | Hamana Homes Agent",
    description: "In-house agent for Hamana Homes in Magalang, Pampanga, near Clark.",
    type: "website",
    images: [{ url: siteConfig.profilePhoto, alt: `${siteConfig.name}, ${siteConfig.title}` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

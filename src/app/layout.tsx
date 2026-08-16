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
  title: "Shan Shai | Hamana Homes Agent · Magalang, Pampanga",
  description:
    "Shan Shai — licensed agent for Hamana Homes near Clark. Site visits, reservations, Pag-IBIG and bank loan help.",
  keywords: [
    "Shan Shai",
    "Hamana Homes",
    "real estate",
    "Pampanga",
    "Magalang",
    "Clark",
  ],
  openGraph: {
    title: "Shan Shai | Hamana Homes Agent",
    description: "Agent for Hamana Homes in Magalang, Pampanga — near Clark.",
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

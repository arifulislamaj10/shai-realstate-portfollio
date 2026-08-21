import type { Metadata } from "next";
import AboutPhdcContent from "@/components/AboutPhdcContent";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Hamana Homes | Rish | Magalang, Pampanga",
  description:
    "Hamana Homes is the flagship residential project of PHDC under Century Pacific Group. Built by a trusted legacy, designed for the future.",
};

export default function AboutPhdcPage() {
  return (
    <>
      <Nav />
      <main className="about-phdc-page">
        <AboutPhdcContent />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

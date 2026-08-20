import About from "@/components/About";
import Amenities from "@/components/Amenities";
import AvailableUnits from "@/components/AvailableUnits";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToBuy from "@/components/HowToBuy";
import Location from "@/components/Location";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import SampleComputation from "@/components/SampleComputation";
import Services from "@/components/Services";
import SiteVisitCta from "@/components/SiteVisitCta";
import Testimonials from "@/components/Testimonials";
import VideoBlog from "@/components/VideoBlog";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <AvailableUnits />
        <SampleComputation />
        <HowToBuy />
        <Location />
        <Amenities />
        <Portfolio />
        <Testimonials />
        <VideoBlog />
        <FAQ />
        <SiteVisitCta />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

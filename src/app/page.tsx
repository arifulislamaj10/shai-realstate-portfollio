import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
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
        <Portfolio />
        <VideoBlog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

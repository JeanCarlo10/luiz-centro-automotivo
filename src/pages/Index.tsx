import About from "../components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

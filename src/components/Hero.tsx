import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.webp";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Banner de anúncios"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in mt-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Cuidamos do seu
            <span className="block text-primary">veículo com</span>
            <span className="block text-white">excelência</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Manutenção preventiva e corretiva com equipamentos de última geração
            e profissionais especializados.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-red text-lg"
          >
            Agendar Atendimento
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

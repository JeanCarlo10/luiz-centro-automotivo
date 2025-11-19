import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-24">
          <img
            src={logoImage}
            alt="Logo - Luiz Centro Automotivo"
            style={{ width: "110px", height: "auto" }}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-16">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`${
                isScrolled
                  ? "text-secondary-foreground"
                  : "text-secondary-foreground"
              } hover:text-primary transition-colors`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`${
                isScrolled
                  ? "text-secondary-foreground"
                  : "text-secondary-foreground"
              } hover:text-primary transition-colors`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`${
                isScrolled
                  ? "text-secondary-foreground"
                  : "text-secondary-foreground"
              } hover:text-primary transition-colors`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`${
                isScrolled
                  ? "text-secondary-foreground"
                  : "text-secondary-foreground"
              } hover:text-primary transition-colors`}
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-secondary-foreground" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className={`${
                  isScrolled
                    ? "text-secondary-foreground"
                    : "text-secondary-foreground"
                } hover:text-primary transition-colors text-left`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className={`${
                  isScrolled
                    ? "text-secondary-foreground"
                    : "text-secondary-foreground"
                } hover:text-primary transition-colors text-left`}
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className={`${
                  isScrolled
                    ? "text-secondary-foreground"
                    : "text-secondary-foreground"
                } hover:text-primary transition-colors text-left`}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className={`${
                  isScrolled
                    ? "text-secondary-foreground"
                    : "text-secondary-foreground"
                } hover:text-primary transition-colors text-left`}
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
              >
                Agendar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

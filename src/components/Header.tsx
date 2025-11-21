import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/logo.webp";

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Listener otimizado
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 90);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu mobile ao mudar para desktop
  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`h-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <img
            src={logoImage}
            alt="Logo - Luiz Centro Automotivo"
            width="110"
            height="70"
            className="w-[110px] h-auto"
            fetchPriority="high"
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav
              className="flex items-center gap-16"
              aria-label="Menu principal"
            >
              <a
                href="#inicio"
                className="text-secondary-foreground hover:text-(--primary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("inicio");
                }}
              >
                Início
              </a>

              <a
                href="#servicos"
                className="text-secondary-foreground hover:text-(--primary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("servicos");
                }}
              >
                Serviços
              </a>

              <a
                href="#sobre"
                className="text-secondary-foreground hover:text-(--primary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sobre");
                }}
              >
                Sobre
              </a>

              <a
                href="#contato"
                className="text-secondary-foreground hover:text-(--primary) transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contato");
                }}
              >
                Contato
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              aria-label={
                isMobileMenuOpen
                  ? "Fechar menu de navegação"
                  : "Abrir menu de navegação"
              }
              className={`${
                isScrolled ? "text-secondary-foreground" : "text-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMobileMenuOpen && (
          <nav
            aria-label="Menu móvel"
            className="py-4 transition-opacity duration-200 opacity-100"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("inicio");
                }}
                className="text-secondary-foreground hover:text-(--primary) transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                Início
              </a>

              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("servicos");
                }}
                className="text-secondary-foreground hover:text-(--primary) transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                Serviços
              </a>

              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sobre");
                }}
                className="text-secondary-foreground hover:text-(--primary) transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                Sobre
              </a>

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contato");
                }}
                className="text-secondary-foreground hover:text-(--primary) transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                Contato
              </a>

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

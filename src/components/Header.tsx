import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/logo_teste.webp";
import { motion } from "framer-motion";

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

  // Função para scroll nas seções
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  // Função para desabilitar o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`h-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-(--secondary)" : "bg-transparent"
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
                href="#home" 
                className="relative group text-xl text-(--secondary-foreground)"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Início
                <span className="absolute left-0 bottom-0 block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out transform group-hover:scale-x-100"></span>
              </a>

              <a
                href="#service"
                className="relative group text-xl text-(--secondary-foreground)"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("service");
                }}
              >
                Serviços
                <span className="absolute left-0 bottom-0 block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out transform group-hover:scale-x-100"></span>
              </a>

              <a
                href="#about"
                className="relative group text-xl text-(--secondary-foreground)"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                Sobre
                <span className="absolute left-0 bottom-0 block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out transform group-hover:scale-x-100"></span>
              </a>

              <a
                href="#contact"
                className="relative group text-xl text-(--secondary-foreground)"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contato
                <span className="absolute left-0 bottom-0 block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out transform group-hover:scale-x-100"></span>
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
                isScrolled
                  ? "text-(--secondary-foreground)"
                  : "text-(--foreground)"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Animação para o menu de hambúrguer transformando em "X" */}
              <motion.div
                className="w-6 h-1 bg-white mb-1"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-1 bg-white mb-1"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-1 bg-white"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMobileMenuOpen && (
          <motion.nav
            aria-label="Menu móvel"
            className="fixed inset-y-0 right-0 h-full w-[75%] bg-(--secondary) py-8 px-8 z-50 flex flex-col gap-4 overflow-y-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Fechar menu de navegação"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-10">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="text-white text-3xl hover:text-(--primary) transition-colors text-left focus-visible:outline-primary"
              >
                Início
              </a>

              <a
                href="#service"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("service");
                }}
                className="text-white text-3xl hover:text-(--primary) transition-colors text-left focus-visible:outline-primary"
              >
                Serviços
              </a>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="text-white text-3xl hover:text-(--primary) transition-colors text-left focus-visible:outline-primary"
              >
                Sobre
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white text-3xl hover:text-(--primary) transition-colors text-left focus-visible:outline-primary"
              >
                Contato
              </a>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-primary text-white cursor-pointer hover:opacity-90 transition-opacity w-full"
              >
                Agendar
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;

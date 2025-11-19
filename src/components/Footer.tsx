import { Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src={logoImage}
                alt="Logo - Luiz Centro Automotivo"
                style={{ width: "150px", height: "auto" }}
              />
            </div>

            <p className="text-white/80">
              Cuidando do seu veículo com excelência e dedicação desde de 2001.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white md:flex justify-center">
              Links Rápidos
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#inicio"
                className="text-white/80 hover:text-primary transition-colors md:flex justify-center"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-white/80 hover:text-primary transition-colors md:flex justify-center"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-white/80 hover:text-primary transition-colors md:flex justify-center"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-white/80 hover:text-primary transition-colors md:flex justify-center"
              >
                Contato
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white md:text-center">
              Horário de atendimento
            </h3>
            <div className="flex flex-col gap-2">
              <span className="text-white/80 md:text-center">
                Segunda - Sexta: 8:00h às 18:00h
              </span>
              <span className="text-white/80 md:text-center">
                Sábado: 8:00h às 12:00h
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white md:flex justify-end">
              Redes Sociais
            </h3>
            <div className="flex gap-4 flex-column md:justify-end">
              <a
                href="https://www.facebook.com/luizcentroautomotivo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/luizcentroautomotivo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-white/70 ">
          <p>
            &copy; {new Date().getFullYear()} Luiz Centro Automotivo. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

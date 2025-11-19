import { CheckCircle } from 'lucide-react';
import mechanicImage from '@/assets/mechanic-working.webp';

const features = [
  'Mais de 15 anos de experiência',
  'Equipe técnica especializada',
  'Equipamentos de última geração',
  'Peças originais e de qualidade',
  'Garantia em todos os serviços',
  'Atendimento personalizado',
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sobre <span className="text-primary">Nossa Oficina</span>
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Somos uma oficina mecânica completa, focada em oferecer serviços de
              alta qualidade com profissionais qualificados e equipamentos modernos.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Nossa missão é garantir a segurança e o bom funcionamento do seu
              veículo, com transparência, honestidade e preços justos. Cada serviço
              é realizado com dedicação e atenção aos detalhes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-gradient-primary p-1 rounded-lg shadow-elegant">
              <img
                src={mechanicImage}
                alt="Mecânico profissional trabalhando em um veículo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

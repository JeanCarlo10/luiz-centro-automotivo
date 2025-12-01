import { Wrench, Settings, Gauge, Zap, Shield, Droplets } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Troca de óleo, filtros e revisões periódicas para manter seu veículo em dia.",
  },
  {
    icon: Settings,
    title: "Reparos Mecânicos",
    description:
      "Diagnóstico e conserto de motor, câmbio, suspensão e outros sistemas.",
  },
  {
    icon: Gauge,
    title: "Injeção Eletrônica",
    description:
      "Análise computadorizada e regulagem do sistema de injeção eletrônica.",
  },
  {
    icon: Zap,
    title: "Sistema Elétrico",
    description:
      "Reparos em bateria, alternador, motor de arranque e iluminação.",
  },
  {
    icon: Shield,
    title: "Freios e Suspensão",
    description: "Troca de pastilhas, discos, amortecedores e alinhamento.",
  },
  {
    icon: Droplets,
    title: "Ar Condicionado",
    description: "Manutenção, limpeza e recarga do sistema de ar condicionado.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-(--background)">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-(--primary)">Serviços</span>
          </h2>
          <p className="text-xl text-(--muted-foreground) max-w-2xl mx-auto">
            Soluções completas para manter seu veículo funcionando perfeitamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                }}
              >
                <Card className="h-full bg-(--card) border-(--border) border-2 hover:border-(--primary) transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 transition-transform">
                      <Icon className="w-8 h-8 text-(--primary-foreground)" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

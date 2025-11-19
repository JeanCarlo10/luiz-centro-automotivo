import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "João Silva",
    rating: 5,
    comment:
      "Excelente atendimento! Profissionais muito competentes e preço justo. Recomendo!",
    date: "Há 2 semanas",
  },
  {
    name: "Maria Santos",
    rating: 5,
    comment:
      "Sempre levo meu carro aqui. Serviço de qualidade e muita transparência no diagnóstico.",
    date: "Há 1 mês",
  },
  {
    name: "Pedro Oliveira",
    rating: 5,
    comment:
      "Melhor oficina da região! Resolveram um problema que outros mecânicos não conseguiram.",
    date: "Há 3 semanas",
  },
  {
    name: "Ana Costa",
    rating: 5,
    comment:
      "Atendimento impecável e muito profissional. Meu carro ficou perfeito!",
    date: "Há 1 semana",
  },
];

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="animate-fade-in hover:shadow-elegant transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4">{review.comment}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

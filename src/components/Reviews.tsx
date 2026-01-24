import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  time?: number;
};

const PLACE_ID = "ChIJz0VV0AyQ9pQRchsim8DeHPg";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating); // arredonda para ficar bonito (ex: 4.6 => 5)
  return (
    <div className="flex mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < full
              ? "fill-primary text-(--primary)"
              : "text-(--muted-foreground)"
          }`}
        />
      ))}
    </div>
  );
}

const Reviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [ratingAvg, setRatingAvg] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const hasGoogle = useMemo(
    () => typeof window !== "undefined" && (window as any).google,
    []
  );

  useEffect(() => {
    const tryLoad = () => {
      const g = (window as any).google;
      if (!g?.maps?.places) return false;

      const service = new g.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ["rating", "user_ratings_total", "reviews"],
        },
        (place: any, status: any) => {
          setLoading(false);

          if (status !== g.maps.places.PlacesServiceStatus.OK || !place) {
            // Se falhar, deixa vazio e evita quebrar o layout
            setReviews([]);
            return;
          }

          setRatingAvg(typeof place.rating === "number" ? place.rating : null);
          setTotalRatings(
            typeof place.user_ratings_total === "number"
              ? place.user_ratings_total
              : null
          );

          // Reviews podem vir vazias dependendo do Google.
          const list: GoogleReview[] = Array.isArray(place.reviews)
            ? place.reviews
            : [];

          // Ordena por mais recentes (quando houver "time")
          list.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));

          setReviews(list);
        }
      );

      return true;
    };

    // Tenta agora; se o script ainda não carregou, tenta de novo algumas vezes
    let attempts = 0;
    const maxAttempts = 30; // ~6s (30 * 200ms)
    const interval = setInterval(() => {
      attempts += 1;
      const ok = tryLoad();
      if (ok || attempts >= maxAttempts) {
        if (!ok) setLoading(false);
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [hasGoogle]);

  return (
    <section id="avaliacoes" className="py-20 bg-(--background)">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            O Que Nossos{" "}
            <span className="text-(--primary)">Clientes Dizem</span>
          </motion.h2>

          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-lg text-(--muted-foreground) max-w-2xl mx-auto"
          >
            Avaliações reais de clientes satisfeitos com nossos serviços
          </motion.p>

          {/* Nota média */}
          {!loading && ratingAvg !== null && (
            <div className="mt-5 flex items-center justify-center gap-2 text-(--foreground)">
              <span className="font-semibold">⭐ {ratingAvg.toFixed(1)}</span>
              {totalRatings !== null && (
                <span className="text-(--muted-foreground)">
                  ({totalRatings} avaliações)
                </span>
              )}
            </div>
          )}
        </div>

        {/* Estado de carregamento */}
        {loading && (
          <div className="text-center text-(--muted-foreground)">
            Carregando avaliações...
          </div>
        )}

        {/* Lista */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.slice(0, 4).map((review, index) => (
              <Card
                key={index}
                className="bg-(--card) border-(--border) hover-shadow-custom transition-shadow"
              >
                <CardContent className="p-6">
                  <Stars rating={review.rating ?? 0} />

                  <p className="text-(--foreground) mb-4">
                    {review.text?.trim()
                      ? review.text
                      : "Avaliação enviada no Google."}
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-(--foreground)">
                      {review.author_name || "Cliente"}
                    </p>
                    <p className="text-sm text-(--muted-foreground)">
                      {review.relative_time_description || ""}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Fallback se vier vazio */}
            {reviews.length === 0 && (
              <div className="col-span-full text-center text-(--muted-foreground)">
                Não foi possível carregar as avaliações agora. Tente novamente
                em instantes.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;

// const reviews = [
//   {
//     name: "João Silva",
//     rating: 5,
//     comment:
//       "Excelente atendimento! Profissionais muito competentes e preço justo. Recomendo!",
//     date: "Há 2 semanas",
//   },
//   {
//     name: "Maria Santos",
//     rating: 5,
//     comment:
//       "Sempre levo meu carro aqui. Serviço de qualidade e muita transparência no diagnóstico.",
//     date: "Há 1 mês",
//   },
//   {
//     name: "Pedro Oliveira",
//     rating: 5,
//     comment:
//       "Melhor oficina da região! Resolveram um problema que outros mecânicos não conseguiram.",
//     date: "Há 3 semanas",
//   },
//   {
//     name: "Ana Costa",
//     rating: 5,
//     comment:
//       "Atendimento impecável e muito profissional. Meu carro ficou perfeito!",
//     date: "Há 1 semana",
//   },
// ];

// const Reviews = () => {
//   return (
//     <section id="avaliacoes" className="py-20 bg-(--background)">
//       <div className="container mx-auto px-6 md:px-8">
//         <div className="text-center mb-12">
//           <motion.h2
//             variants={SlideUp(0.2)}
//             initial="initial"
//             whileInView={"animate"}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             O Que Nossos{" "}
//             <span className="text-(--primary)">Clientes Dizem</span>
//           </motion.h2>
//           <motion.p
//             variants={SlideUp(0.4)}
//             initial="initial"
//             whileInView={"animate"}
//             className="text-lg text-(--muted-foreground) max-w-2xl mx-auto"
//           >
//             Avaliações reais de clientes satisfeitos com nossos serviços
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reviews.map((review, index) => (
//             <Card
//               key={index}
//               className="bg-(--card) border-(--border) hover-shadow-custom transition-shadow"
//             >
//               <CardContent className="p-6">
//                 <div className="flex mb-3">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-primary text-(--primary)"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-(--foreground) mb-4">{review.comment}</p>
//                 <div className="border-t border-border pt-4">
//                   <p className="font-semibold text-(--foreground)">
//                     {review.name}
//                   </p>
//                   <p className="text-sm text-(--muted-foreground)">
//                     {review.date}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

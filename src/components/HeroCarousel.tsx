import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";
// import { SlideUp } from "@/animations";

import Hero01 from "@/assets/HERO_01_TEST.webp";
import Hero02 from "@/assets/luiz injeçao eletronica versao final s texto.jpg";
import Hero03 from "@/assets/card mecanica geral sem texto.jpg";
import Hero04 from "@/assets/card alinhamento final sem texto.jpg";
import Hero05 from "@/assets/30 anos versao final sem texto.jpg";
import Hero06 from "@/assets/HERO_06_TEST.webp";

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  positionMobile?: string;
  positionDesktop?: string;
  ctaVariant?: "yellow" | "red";
};

const slides: Slide[] = [
  {
    src: Hero01,
    alt: "Hero 01",
    title: "POTÊNCIA E\nPERFORMANCE",
    subtitle:
      "Performance de verdade começa com manutenção precisa, garantindo força, estabilidade e eficiência em cada trajeto.",
    positionMobile: "20% 40%",
    positionDesktop: "50% 50%",
    ctaVariant: "yellow",
  },
  {
    src: Hero02,
    alt: "Hero 02",
    title: "AQUI VOCÊ PODE\nCONFIAR",
    subtitle:
      "Experiência, confiança e tecnologia para cuidar do seu veículo com a qualidade que você merece.",
    positionMobile: "25% 35%",
    positionDesktop: "50% 50%",
    ctaVariant: "red",
  },
  {
    src: Hero03,
    alt: "Hero 03",
    title: "MÊCANICA\nEM GERAL",
    subtitle:
      "Diagnóstico preciso e atendimento de confiança. Cuidamos do seu veículo com tecnologia, experiência e atenção a cada detalhe.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
    ctaVariant: "red",
  },
  {
    src: Hero04,
    alt: "Hero 04",
    title: "ALINHAMENTO E\nBALANCEAMENTO",
    subtitle:
      "Feitos com precisão para garantir segurança, conforto e desempenho.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
    ctaVariant: "red",
  },
  {
    src: Hero05,
    alt: "Hero 05",
    title: "+30 ANOS DE\nHISTÓRIA",
    subtitle:
      "Construímos uma trajetória sólida no cuidado automotivo, com experiência que evolui a cada geração e compromisso com a qualidade.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
    ctaVariant: "red",
  },
  {
    src: Hero06,
    alt: "Hero 06",
    title: "INJEÇÃO\nELETRÔNICA",
    subtitle:
      "Diagnóstico avançado e precisão para garantir desempenho e eficiência da injeção eletrônica.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
    ctaVariant: "red",
  },
];

const HeroCarousel = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          slidesPerView={1}
          effect="fade"
          loop
          navigation
          observer={false}
          observeParents={false}
          watchSlidesProgress={false}
          resizeObserver
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((item, i) => {
            const ctaClass =
              item.ctaVariant === "yellow"
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-(--primary-medium) text-white hover:bg-(--primary)";

            return (
              <SwiperSlide key={i} className="w-full h-full">
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="
                      w-full h-full object-cover
                      object-(--position-mobile)
                      sm:object-(--position-desktop)
                    "
                    style={
                      {
                        ["--position-mobile" as any]:
                          item.positionMobile ?? "50% 50%",
                        ["--position-desktop" as any]:
                          item.positionDesktop ?? "50% 50%",
                      } as React.CSSProperties
                    }
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority="high"
                  />

                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="max-w-xl text-white text-center md:text-left">
                        {/* TITLE */}
                        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl whitespace-pre-line">
                          {item.title}
                        </h1>

                        {/* SUBTITLE */}
                        <p className="mt-8 text-sm sm:text-base lg:text-lg text-white font-semibold">
                          {item.subtitle}
                        </p>

                        {/* CTA */}
                        <button
                          onClick={() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={`mt-8 inline-flex items-center cursor-pointer rounded-lg transition px-6 py-3 font-semibold hover:scale-105 ${ctaClass}`}
                        >
                          Agendar Atendimento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

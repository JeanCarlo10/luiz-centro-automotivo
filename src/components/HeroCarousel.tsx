import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";
// import { SlideUp } from "@/animations";

import Hero01 from "@/assets/Hero_01.webp";
import Hero02 from "@/assets/Hero_02.webp";
import Hero03 from "@/assets/Hero_03.webp";
import Hero04 from "@/assets/Hero_04.webp";
import Hero05 from "@/assets/Hero_05.webp";
import Hero06 from "@/assets/Hero_06.webp";

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  positionMobile?: string;
  positionDesktop?: string;
};

const slides: Slide[] = [
  {
    src: Hero04,
    alt: "Hero 04",
    title: "ALINHAMENTO E\nBALANCEAMENTO",
    subtitle:
      "Feitos com precisão para garantir segurança, conforto e desempenho.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
  },
  {
    src: Hero02,
    alt: "Hero 02",
    title: "AQUI VOCÊ PODE\nCONFIAR",
    subtitle:
      "Experiência, confiança e tecnologia para cuidar do seu veículo com a qualidade que você merece.",
    positionMobile: "55% 35%",
    positionDesktop: "50% 50%",
  },
  {
    src: Hero01,
    alt: "Hero 01",
    title: "POTÊNCIA E\nPERFORMANCE",
    subtitle:
      "Performance de verdade começa com manutenção precisa, garantindo força, estabilidade e eficiência em cada trajeto.",
    positionMobile: "50% 40%",
    positionDesktop: "50% 50%",
  },
  {
    src: Hero03,
    alt: "Hero 03",
    title: "MÊCANICA\nEM GERAL",
    subtitle:
      "Diagnóstico preciso e atendimento de confiança. Cuidamos do seu veículo com tecnologia, experiência e atenção a cada detalhe.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
  },
  {
    src: Hero05,
    alt: "Hero 05",
    title: "+30 ANOS DE\nHISTÓRIA",
    subtitle:
      "Construímos uma trajetória sólida no cuidado automotivo, com experiência que evolui a cada geração e compromisso com a qualidade.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
  },
  {
    src: Hero06,
    alt: "Hero 06",
    title: "INJEÇÃO\nELETRÔNICA",
    subtitle:
      "Diagnóstico avançado e precisão para garantir desempenho e eficiência da injeção eletrônica.",
    positionMobile: "50% 35%",
    positionDesktop: "50% 50%",
  },
];

function SlideContent({ item }: { item: Slide }) {
  const style = useMemo(
    () =>
      ({
        ["--position-mobile" as any]: item.positionMobile ?? "50% 50%",
        ["--position-desktop" as any]: item.positionDesktop ?? "50% 50%",
      } as React.CSSProperties),
    [item.positionMobile, item.positionDesktop]
  );

  return (
    <div className="relative w-full h-full">
      <img
        src={item.src}
        alt={item.alt}
        className="
          w-full h-full object-cover
          [object-position:var(--position-mobile)]
          sm:[object-position:var(--position-desktop)]
        "
        style={style}
        decoding="async"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-xl text-white text-center md:text-left">
            <h1 className="whitespace-pre-line font-extrabold text-3xl sm:text-4xl lg:text-6xl">
              {item.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90">
              {item.subtitle}
            </p>

            <button
              className="
                mt-6 inline-flex items-center cursor-pointer
                rounded-lg px-6 py-3 font-semibold text-white
                transition-transform duration-200 hover:scale-105
                bg-[var(--primary-medium)] hover:bg-[var(--primary-medium)]
              "
            >
              Agendar Atendimento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const HeroCarousel = () => {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const w = window as any;

    // Monta o Swiper quando o browser estiver ocioso (melhora LCP)
    if ("requestIdleCallback" in window) {
      const id = w.requestIdleCallback(() => setEnhanced(true), {
        timeout: 2000,
      });
      return () => w.cancelIdleCallback?.(id);
    }

    const t = setTimeout(() => setEnhanced(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  const first = slides[0];

  return (
    <section className="w-full">
      <div className="relative w-full h-screen">
        {!enhanced ? (
          // ✅ 1º paint: estático e rápido (LCP melhora muito)
          <div className="w-full h-full">
            <img
              src={first.src}
              alt={first.alt}
              className="
                w-full h-full object-cover
                [object-position:var(--position-mobile)]
                sm:[object-position:var(--position-desktop)]
              "
              style={
                {
                  ["--position-mobile" as any]:
                    first.positionMobile ?? "50% 50%",
                  ["--position-desktop" as any]:
                    first.positionDesktop ?? "50% 50%",
                } as React.CSSProperties
              }
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            {/* conteúdo do slide 0 */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-xl text-white text-center md:text-left">
                  <h1 className="whitespace-pre-line font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                    {first.title}
                  </h1>
                  <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90">
                    {first.subtitle}
                  </p>
                  <button
                    className="
                      mt-6 inline-flex items-center cursor-pointer
                      rounded-lg px-6 py-3 font-semibold text-white
                      transition-transform duration-200 hover:scale-105
                      bg-[var(--primary-medium)] hover:bg-[var(--primary-medium)]
                    "
                  >
                    Agendar Atendimento
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // ✅ Depois: Swiper completo
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            effect="fade"
            loop
            grabCursor
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i} className="w-full h-full">
                <SlideContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;

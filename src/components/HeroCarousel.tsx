import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

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

const HeroCarousel = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          effect={"fade"}
          loop
          grabCursor
          observer={false}
          observeParents={false}
          watchSlidesProgress={false}
          resizeObserver={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((item, i) => (
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

                      <motion.h1
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView={"animate"}
                        className="font-extrabold text-3xl sm:text-4xl lg:text-6xl"
                      >
                        {item.title}
                      </motion.h1>

                      {/* SUBTITLE */}
                      <motion.p
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        className="mt-4 text-sm sm:text-base lg:text-lg text-white/90"
                      >
                        {item.subtitle}
                      </motion.p>

                      {/* CTA */}
                      <motion.button
                        variants={SlideUp(0.6)}
                        initial="initial"
                        whileInView={"animate"}
                        className="mt-6 inline-flex text-white items-center cursor-pointer rounded-lg bg-(--primary-medium) px-6 py-3 font-semibold hover:bg-(--primary-medium) transition"
                      >
                        Agendar Atendimento
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

// import HeroCarousel from "./HeroCarousel";

// const Hero = () => {
//   // const scrollToContact = () => {
//   //   const element = document.getElementById("contact");
//   //   if (element) {
//   //     element.scrollIntoView({ behavior: "smooth" });
//   //   }
//   // };

//   return (
//     <section
//       id="home"
//       className="relative h-screen"
//     >
//       <HeroCarousel/>
//       {/* <img
//         src={heroImage}
//         alt="Oficina mecânica Luiz Centro Automotivo"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="eager"
//         decoding="async"
//         fetchPriority="high"
//       /> */}

//       {/* Content */}
//       {/* <div className="container mx-auto px-6 md:px-8 relative z-10">
//         <div className="max-w-3xl animate-fade-in mt-24">
//           <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
//             Cuidamos do seu
//             <span className="block text-white">veículo com</span>
//             <span className="block text-white">excelência</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white/85 mb-8 max-w-2xl">
//             Manutenção preventiva e corretiva com equipamentos de última geração
//             e profissionais especializados.
//           </p>
//           <Button
//             size="lg"
//             onClick={scrollToContact}
//             className="bg-(--yellow) font-semibold hover:opacity-90 transition-opacity shadow-red text-lg"
//           >
//             Agendar Atendimento
//             <ArrowRight className="ml-2" />
//           </Button>
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;

import React, { Suspense, useEffect, useState } from "react";
import HeroStatic from "./HeroStatic";

const HeroSwiper = React.lazy(() => import("./HeroCarousel"));

export default function Hero() {
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const w = window as any;

    if ("requestIdleCallback" in window) {
      const id = w.requestIdleCallback(() => setEnhanced(true), { timeout: 2000 });
      return () => w.cancelIdleCallback?.(id);
    }

    const t = setTimeout(() => setEnhanced(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  // ✅ 1º paint: sem Swiper no bundle
  if (!enhanced) return <HeroStatic />;

  // ✅ Depois: Swiper é baixado e montado
  return (
    <Suspense fallback={<HeroStatic />}>
      <HeroSwiper />
    </Suspense>
  );
}


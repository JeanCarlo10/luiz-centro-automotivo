// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/bg-red.jpg";
// import carImage from "@/assets/ferrari.png";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const scrollToContact = () => {
//     const element = document.getElementById("contact");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <img
//         src={heroImage}
//         alt="Oficina mecânica Luiz Centro Automotivo"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="eager"
//         decoding="async"
//         fetchPriority="high"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 from-secondary/95 via-secondary/80 to-transparent" />

//       {/* Content */}
//       <div className="container mx-auto px-6 md:px-8 relative z-10">
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

//         <div>
//           <img
//             src={carImage}
//             alt="Carro Ferrari"
//             className="absolute inset-0 h-full object-contain w-150"
//             loading="eager"
//             decoding="async"
//             // width=200px}
//             fetchPriority="high"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bg-red.jpg";
import carImage from "@/assets/ferrari.webp";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Oficina mecânica Luiz Centro Automotivo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 from-secondary/95 via-secondary/80 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mt-24"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Cuidamos do seu
            <span className="block text-white">veículo com</span>
            <span className="block text-white">excelência</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-8 max-w-2xl">
            Manutenção preventiva e corretiva com equipamentos de última geração
            e profissionais especializados.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-transparent border-(--yellow) text-(--yellow) font-semibold hover:opacity-90 transition-opacity text-lg hover:bg-(--yellow) hover:text-white"
            variant="outline"
          >
            Agendar Atendimento
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        <motion.div
          className="absolute inset-0 h-full"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <img
            src={carImage}
            alt="Carro Ferrari"
            // className="absolute inset-y-0 right-0 w-[110px]md:w-1/2 lg:w-2/3 h-auto object-contain"
            className="absolute inset-y-0 right-0 bottom-0 sm:w-3/4 md:w-1/2 lg:w-2/4 h-auto object-cover"
            // fetchPriority="high"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import heroImage from "@/assets/Hero_01.webp";

const Hero = () => {
  // const scrollToContact = () => {
  //   const element = document.getElementById("contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section
      id="home"
      className="relative h-screen"
    >
      <img
        src={heroImage}
        alt="Oficina mecânica Luiz Centro Automotivo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Content */}
      {/* <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in mt-24">
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
            className="bg-(--yellow) font-semibold hover:opacity-90 transition-opacity shadow-red text-lg"
          >
            Agendar Atendimento
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import carImage from "@/assets/ferrari.webp";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center justify-center bg-red-600 px-6 md:px-8"
//     >
//       <motion.div
//         className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="text-center lg:text-left space-y-6 w-full lg:w-1/2">
//           <motion.h1
//             className="text-3xl md:text-5xl font-bold text-white"
//             initial={{ y: 30, scale: 0.9, opacity: 0 }}
//             animate={{ y: 0, scale: 1, opacity: 1 }}
//             transition={{
//               delay: 0.3,
//               type: "spring",
//               stiffness: 100,
//               damping: 25,
//             }}
//           >
//             Cuidamos do seu veículo com excelência
//           </motion.h1>

//           <motion.p
//             className="text-lg text-white/90"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               delay: 0.5,
//               type: "spring",
//               stiffness: 100,
//               damping: 25,
//             }}
//           >
//             Manutenção preventiva e corretiva com equipamentos de última geração
//             e profissionais especializados.
//           </motion.p>

//           <motion.button
//             className="bg-(--yellow) text-white py-2 px-4 rounded-lg hover:border-2 border-(--yellow) hover:bg-transparent hover:transition-all transition-opacity cursor-pointer"
//             onClick={() => console.log("Agendar Atendimento")}
//             initial={{ y: 30, scale: 0.9, opacity: 0 }}
//             animate={{ y: 0, scale: 1, opacity: 1 }}
//             transition={{
//               delay: 0.7,
//               type: "spring",
//               stiffness: 100,
//               damping: 25,
//             }}
//           >
//             Agendar Atendimento
//           </motion.button>
//         </div>

//         <motion.div
//           className="w-full lg:w-1/2 flex justify-end"
//           // initial={{ x: 120, scale: 0.9, opacity: 0 }}
//           // animate={{ x: 0, scale: 1, opacity: 1 }}
//           // transition={{
//           //   type: "spring",
//           //   stiffness: 150,
//           // }}
//           initial={{ x: 120, scale: 0.9, opacity: 0 }}
//           animate={{ x: 0, scale: 1, opacity: 1 }}
//           transition={{
//             type: "spring",
//             stiffness: 150,
//             damping: 25,
//             delay: 0.3,
//           }}
//         >
//           <img
//             src={carImage}
//             alt="Carro Ferrari"
//             className="hidden md:block w-full h-auto object-contain"
//             // className="w-full h-auto object-contain lg:right-0 block md:hidden "
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

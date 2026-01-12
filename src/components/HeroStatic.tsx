import Hero04 from "@/assets/Hero_04.webp";

export default function HeroStatic() {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen">
        <img
          src={Hero04}
          alt="Alinhamento e Balanceamento"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-xl text-white text-center md:text-left">
              <h1 className="whitespace-pre-line font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                {"ALINHAMENTO E\nBALANCEAMENTO"}
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90">
                Feitos com precisão para garantir segurança, conforto e desempenho.
              </p>
              <button
                className="mt-6 inline-flex items-center cursor-pointer rounded-lg px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-105 bg-[var(--primary-medium)]"
              >
                Agendar Atendimento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

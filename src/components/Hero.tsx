import HeroCarousel from "./HeroCarousel";

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
      <HeroCarousel/>
    </section>
  );
};

export default Hero;

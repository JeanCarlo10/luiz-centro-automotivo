import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import mechanicImage from "@/assets/mechanic-working.webp";
import heroImage from "@/assets/hero-workshop.webp";
import perImage from "@/assets/performance.webp";
import redImagem from "@/assets/bg-red.jpg";

const data = [
  { backgroundImage: mechanicImage },
  { backgroundImage: heroImage },
  { backgroundImage: perImage },
  { backgroundImage: redImagem },
];

const Carousel = () => {
  return (
    <div className="flex items-center justify-center transform skew-x-[-8deg]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000 }}

        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1, spaceBetween: 15 },
          1024: { slidesPerView: 1, spaceBetween: 20 },
        }}
        className="max-w-[90%] lg:max-w-[80%] "
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-[350px] rounded-lg overflow-hidden" 
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
                
              }}
            >
              {/* <div className="absolute inset-0 bg-black opacity-10" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

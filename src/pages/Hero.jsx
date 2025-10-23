import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section className="hero-slider mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/nNQqd0jB/indoor-plants-studio-2.jpg"
              alt="Hero Slide 1"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Fresh Indoor Plants
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md">
                Bring nature closer to your home
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/Y4Tz1Fbb/beautiful-natural-landscape.jpg"
              alt="Hero Slide 2"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Decorate with Greenery
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md">
                Transform your space with elegant plants
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/rGFBJxy6/grove-summer.jpg"
              alt="Hero Slide 3"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Grow Happiness
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md">
                Because a little green makes everything better
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

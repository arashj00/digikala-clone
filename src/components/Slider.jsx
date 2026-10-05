import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Slider() {
  const swiperRef = useRef(null);
  return (
    <div className="group/slideB relative">
      <button
        onClick={() => {
          swiperRef.current.slideNext();
        }}
        className="absolute right-23 bottom-6 z-2 rounded-full bg-white/60 p-1 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/slideB:opacity-100"
      >
        <ChevronLeftIcon className="size-8 text-black/70" />
      </button>

      <button
        onClick={() => {
          swiperRef.current.slidePrev();
        }}
        className="absolute right-10 bottom-6 z-2 rounded-full bg-white/60 p-1 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/slideB:opacity-100"
      >
        <ChevronRightIcon className="size-8 text-black/70" />
      </button>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/1.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/9.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/3.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/4.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/5.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/7.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/8.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/imgs/autoSlides/10.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

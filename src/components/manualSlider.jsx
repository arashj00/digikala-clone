import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ManualSlider() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Navigation]}
        loop={true}
        navigation={{
          disabledClass: "swiper-button-disabled",
        }}
      >
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/1.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/2.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/3.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/4.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/5.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/6.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/8.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/9.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/10.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/11.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/12.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/13.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/16.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/17.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/18.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/19.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/20.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/21.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/22.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/23.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto!">
          <img
            src="/imgs/brands/24.webp"
            alt=""
            className="size-28 border-r border-black/10"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideItem from "./SlideItem";

function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(10)].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SlideItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Banner;

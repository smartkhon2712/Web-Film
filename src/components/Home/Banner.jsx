import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideItem from "./SlideItem";
import axios from "axios";
import { useState, useEffect } from "react";

function Banner() {
  const [data, setData] = useState(null);
  async function getMV() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1ecd0c597d6657dac834c7e912efeddf&language=vi-VN&page=1"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMV();
  }, []);
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={3}>
        {data?.results &&
          data.results.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SlideItem dataItem={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Banner;

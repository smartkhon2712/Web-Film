import { Link } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Topfilm() {
  const [data, setData] = useState(null);
  async function getMV() {
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1ecd0c597d6657dac834c7e912efeddf&language=vi-VN&page=${page}`
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
      <h2 className="text-white text-[20px] mb-[30px]">Trending</h2>
      {data?.results &&
        data.results.slice(0, 9).map((item) => {
          const { id, title, backdrop_path, poster_path } = item;
          return (
            <Link
              to={`/detail/${id}`}
              className="flex gap-[10px] mb-[15px]"
              key={id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${
                  backdrop_path ? backdrop_path : poster_path
                }`}
                alt="TrendingImg"
                className="w-[50%] h-[180px] object-cover rounded-[12px]"
              />
              <div className="w-[50%] text-white">
                <h3 className="mb-[10px] text-[15px] hover:text-blue cursor-pointer">
                  {title}
                </h3>
                <div className=" text-grey">
                  View: {Math.floor(Math.random() * 10000) + 1000}
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Topfilm;

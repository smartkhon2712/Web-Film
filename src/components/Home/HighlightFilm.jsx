import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HighlightFilm() {
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
    <div className="mt-[20px]">
      <h2 className="text-[22px] text-white pl-[20px]">Phim Nổi Bật</h2>
      <div className="flex gap-2 items-center justify-between m-[10px]">
        {data?.results &&
          data.results.slice(0, 4).map((item) => {
            const { id, title, backdrop_path, poster_path } = item;
            return (
              <Link to={`/detail/${id}`} key={id} className="w-[calc(25%-6px)]">
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${
                    backdrop_path ? backdrop_path : poster_path
                  }`}
                  alt="TrendingImg"
                  className="w-full h-[300px] object-cover"
                />
                <h3 className="text-white pl-[5px] mt-[5px] min-h-[48px] hover:text-blue cursor-pointer">
                  {title.length > 50 ? title.substring(0, 50) + "..." : title}
                </h3>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default HighlightFilm;

import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

function Content() {
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
  let { slug } = useParams();
  return (
    <div className="bg-dark p-[20px]">
      {
        <h1 className="text-center text-white text-[20px] mb-[20px]">
          Phim Mới
        </h1>
      }
      <div className="flex flex-wrap gap-x-[10px] gap-y-[30px] items-center">
        {data?.results &&
          data.results.map((item) => {
            const { id, title, backdrop_path, poster_path } = item;
            return (
              <Link to={`/detail/${id}`} className="w-[calc(20%-8px)]" key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${
                    backdrop_path ? backdrop_path : poster_path
                  }`}
                  alt="TrendingImg"
                  className="w-full h-[240px] object-cover"
                />
                <h3 className="text-white pl-[5px] mt-[5px] min-h-[48px] hover:text-blue cursor-pointer">
                  {title.length > 30 ? title.substring(0, 30) + "..." : title}
                </h3>
              </Link>
            );
          })}
      </div>
      <Pagination />
    </div>
  );
}

export default Content;

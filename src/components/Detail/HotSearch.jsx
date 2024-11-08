import axios from "axios";
import { useEffect, useState } from "react";

function HotSearch() {
  const [data, setData] = useState(null);
  async function getGenre() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=1ecd0c597d6657dac834c7e912efeddf&language=vi-VN`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getGenre();
  }, []);
  return (
    <div className="bg-dark p-[20px] my-[20px]">
      <h2 className="text-white text-[20px] mb-[20px]">Tìm Kiếm Nhiều Nhất</h2>
      <div className="flex flex-wrap gap-[10px]">
        {data?.genres &&
          data.genres.map((item) => {
            const { id, name } = item;
            return (
              <div
                className="px-[10px] text-grey bg-silver rounded-[8px] hover:bg-blue hover:text-white cursor-pointer"
                key={id}
              >
                {name}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HotSearch;

import { useParams } from "react-router-dom";
import Info from "./Info";
import Random from "./Random";
import Summary from "./Summary";
import Video from "./Video";
import { useEffect, useState } from "react";
import axios from "axios";

function Content() {
  let { id } = useParams();
  const [data, setData] = useState(undefined);
  async function getMV() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1ecd0c597d6657dac834c7e912efeddf&language=vi-VN`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMV();
  }, [id]);
  const { title } = data || {};
  return (
    <>
      <div className="bg-dark p-[20px] mb-[20px]">
        <h1 className="text-white text-[20px] mb-[20px]">{title}</h1>
        <Video />
        <Summary data={data} />
        <Info data={data} />
      </div>
      <div className="bg-dark p-[20px]">
        <Random />
      </div>
    </>
  );
}

export default Content;

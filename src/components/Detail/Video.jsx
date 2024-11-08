import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Video() {
  let { id } = useParams();
  const [data, setData] = useState(undefined);
  async function getVideo() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1ecd0c597d6657dac834c7e912efeddf`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getVideo();
  }, [id]);
  return (
    <iframe
      className="w-full"
      height="500"
      src={`https://www.youtube.com/embed/${
        data?.results && data?.results.length > 0 ? data.results[0].key : ""
      }`}
    ></iframe>
  );
}

export default Video;

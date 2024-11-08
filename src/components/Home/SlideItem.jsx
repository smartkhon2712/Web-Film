import { Link } from "react-router-dom";

function SlideItem({ dataItem }) {
  const { id, title, backdrop_path, poster_path } = dataItem;
  return (
    <div>
      <Link to={`/detail/${id}`} className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${
            backdrop_path ? backdrop_path : poster_path
          }`}
          alt="TrendingImg"
          className="w-full h-[220px] object-cover rounded-[12px]"
        />
        <h3 className="absolute bottom-2 left-0 w-[100%] pl-[10px] text-[15px] text-white bg-dark bg-opacity-50 hover:text-blue cursor-pointer">
          {title}
        </h3>
      </Link>
    </div>
  );
}

export default SlideItem;

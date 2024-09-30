import { Link } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";

function HighlightFilm() {
  return (
    <div className="mt-[40px]">
      <h2 className="text-[22px] text-white pl-[20px]">Phim moi noi bat</h2>
      <div className="flex gap-2 items-center justify-between m-[10px]">
        {[...Array(4)].map((item, index) => {
          return (
            <Link to="/detail/123456" key={index}>
              <img src={TrendingImg} alt="TrendingImg" />
              <h3 className="text-white pl-[5px] mt-[5px] hover:text-blue cursor-pointer">
                aaa bbb ccc ddd eee
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HighlightFilm;

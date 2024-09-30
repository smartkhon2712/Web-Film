import { Link } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";

function Random() {
  return (
    <div>
      <h2 className="text-white text-[20px] mb-[20px]">Phim ngau nhien</h2>
      <div className="flex flex-wrap gap-x-[12px] gap-y-[30px]">
        {[...Array(8)].map((item, index) => {
          return (
            <Link to="/detail/123456" className="w-[calc(25%-9px)]" key={index}>
              <img
                src={TrendingImg}
                alt="TrendingImg"
                className="w-full rounded-[10px]"
              />
              <h3 className="text-white text-[15px] hover:text-blue cursor-pointer">
                con con con con con con con con con con
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Random;

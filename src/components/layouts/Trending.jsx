import { Link } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";

function Trending() {
  return (
    <div>
      <h2 className="text-white text-[20px] my-[30px]">Trending</h2>
      {[...Array(10)].map((item, index) => {
        return (
          <Link
            to="/detail/123456"
            className="flex gap-[10px] mb-[15px]"
            key={index}
          >
            <img
              src={TrendingImg}
              alt="TrendingImg"
              className="w-[50%] rounded-[12px]"
            />
            <div className="w-[50%] text-white">
              <h3 className="mb-[10px] text-[15px] hover:text-blue cursor-pointer">
                Con cho ngoc nghech
              </h3>
              <div className=" text-grey">View:</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Trending;

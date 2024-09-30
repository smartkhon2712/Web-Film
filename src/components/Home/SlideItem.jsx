import { Link } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";

function SlideItem() {
  return (
    <div>
      <Link to="/detail/123456" className="relative">
        <img
          src={TrendingImg}
          alt="TrendingImg"
          className="w-full rounded-[12px]"
        />
        <h3 className="absolute bottom-2 left-0 w-[100%] pl-[10px] text-[15px] text-white bg-dark bg-opacity-50 hover:text-blue cursor-pointer">
          Hom nay troi khong mua
        </h3>
      </Link>
    </div>
  );
}

export default SlideItem;

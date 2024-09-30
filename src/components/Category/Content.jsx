import { Link, useParams } from "react-router-dom";
import TrendingImg from "../../assets/images/trendingImg.jpg";
import Pagination from "./Pagination";

function Content() {
  let { slug } = useParams();
  return (
    <div className="bg-dark p-[20px]">
      {<h1 className="text-center text-white text-[20px] mb-[20px]">{slug}</h1>}
      <div className="flex flex-wrap gap-x-[10px] gap-y-[30px] items-center">
        {[...Array(20)].map((item, index) => {
          return (
            <Link to="/detail/123456" className="w-[calc(20%-8px)]" key={index}>
              <img src={TrendingImg} alt="TrendingImg" />
              <h3 className="text-white pl-[5px] mt-[5px] hover:text-blue cursor-pointer">
                aaa bbb ccc ddd eee aaa bbb ccc ddd eee
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

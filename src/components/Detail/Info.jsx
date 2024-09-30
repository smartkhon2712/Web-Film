import { Link } from "react-router-dom";
import Tags from "./Tags";

function Info() {
  return (
    <div className="mt-[20px]">
      <div className="flex flex-col gap-[20px]">
        <Link to="#">
          <span className="bg-silver text-white p-[5px] rounded-[5px] hover:bg-blue">
            Ten dien vien
          </span>
        </Link>
        <Link to="#">
          <span className="bg-silver text-white p-[5px] rounded-[5px] hover:bg-blue">
            The loai
          </span>
        </Link>
      </div>
      <div className="flex gap-[5px] items-center text-white mt-[20px]">
        Tu khoa:
        <Tags />
      </div>
    </div>
  );
}

export default Info;

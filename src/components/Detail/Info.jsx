import { Link } from "react-router-dom";
import Tags from "./Tags";

function Info({ data }) {
  const { genres } = data || {};
  return (
    <div className="mt-[20px]">
      <div className="flex flex-col gap-[20px]">
        <Link to="#">
          <span className="bg-silver text-white p-[5px] rounded-[5px] hover:bg-blue">
            Tên Diễn Viên
          </span>
        </Link>
        <div className="flex gap-[5px]">
          {genres &&
            genres.map((genre) => {
              return (
                <Link to="#" key={genre.id}>
                  <span className="bg-silver text-white p-[5px] rounded-[5px] hover:bg-blue">
                    {genre.name}
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="flex gap-[5px] items-center text-white mt-[20px]">
        Từ khóa:
        <Tags />
      </div>
    </div>
  );
}

export default Info;

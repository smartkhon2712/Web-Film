import Trending from "../layouts/Trending";
import Tags from "./Tags";

function Sidebar() {
  return (
    <div className="bg-dark p-[20px]">
      <Tags />
      <Trending />
    </div>
  );
}

export default Sidebar;

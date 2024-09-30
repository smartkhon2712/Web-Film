import Trending from "../layouts/Trending";
import Select from "./Select";

function Sidebar() {
  return (
    <div className="bg-dark p-[20px]">
      <Select />
      <Trending />
    </div>
  );
}

export default Sidebar;

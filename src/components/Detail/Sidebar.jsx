import Topfilm from "./Topfilm";
import Keyword from "./Keyword";

function Sidebar() {
  return (
    <div>
      <div className="bg-dark p-[20px] mb-[20px]">
        <Topfilm />
      </div>
      <div className="bg-dark p-[20px]">
        <Keyword />
      </div>
    </div>
  );
}

export default Sidebar;

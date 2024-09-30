import Content from "./Content";
import HotSearch from "./HotSearch";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main>
      <div className="flex gap-[20px] justify-between">
        <div className="w-[980px]">
          <Content />
        </div>
        <div className="w-[360px]">
          <Sidebar />
        </div>
      </div>
      <HotSearch />
    </main>
  );
}

export default Main;

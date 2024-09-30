import Content from "./Content";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="flex gap-[20px] justify-between">
      <div className="w-[1060px]">
        <Content />
      </div>
      <div className="w-[300px]">
        <Sidebar />
      </div>
    </main>
  );
}

export default Main;

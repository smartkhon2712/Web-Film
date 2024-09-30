import Content from "./Content";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="flex gap-[20px] justify-between">
      <div className="w-[980px]">
        <Content />
      </div>
      <div className="w-[360px]">
        <Sidebar />
      </div>
    </main>
  );
}

export default Main;

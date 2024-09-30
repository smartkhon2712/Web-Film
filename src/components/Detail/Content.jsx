import Info from "./Info";
import Random from "./Random";
import Summary from "./Summary";
import Video from "./Video";

function Content() {
  return (
    <>
      <div className="bg-dark p-[20px] mb-[20px]">
        <h1 className="text-white text-[20px] mb-[20px]">Tieu de cua video</h1>
        <Video />
        <Summary />
        <Info />
      </div>
      <div className="bg-dark p-[20px]">
        <Random />
      </div>
    </>
  );
}

export default Content;

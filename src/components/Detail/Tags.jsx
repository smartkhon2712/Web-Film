import { Link } from "react-router-dom";

function Tags() {
  return (
    <ul className="flex gap-[5px] items-center">
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">abc</Link>
      </li>
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">xyz</Link>
      </li>
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">123</Link>
      </li>
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">567</Link>
      </li>
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">qwe</Link>
      </li>
      <li className="bg-silver px-[6px] py-[2px] rounded-[5px] hover:bg-blue">
        <Link to="#">iop</Link>
      </li>
    </ul>
  );
}

export default Tags;

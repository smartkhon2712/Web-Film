import Logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between p-[20px] bg-[black]">
      <div className="flex items-center gap-[40px]">
        <Link className="flex gap-3 items-center" to="/">
          <img src={Logo} alt="logo" className="w-[40px]" />
          <h1 className="uppercase text-[30px] cursor-pointer">
            <span className="text-white">Porn</span>
            <span className="text-blue">Hub</span>
          </h1>
        </Link>
        <div>
          <nav>
            <ul className="flex gap-[30px] text-[20px] text-grey cursor-pointer">
              <Link className="min-w-[70px]" to="/category/phimmoi">
                Phim Mới
              </Link>
              <Link className="min-w-[70px]" to="/category/phimle">
                Phim Lẻ
              </Link>
              <Link className="min-w-[70px]" to="/category/phimbo">
                Phim Bộ
              </Link>
              <Link className="min-w-[70px]" to="/category/theloai">
                Thể Loại
              </Link>
              <Link className="min-w-[70px]" to="/category/quocgia">
                Quốc Gia
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center rounded-[5px] bg-dark">
          <input
            className="w-[300px] h-[40px] focus:outline-none placeholder-grey rounded-[5px] indent-2.5 text-white bg-dark"
            placeholder="Sreach..."
          />
          <BiSearch className="text-grey pr-[5px] cursor-pointer" size={30} />
        </div>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <BiUserCircle className="text-grey" size={30} />
          <HiOutlineLogout className="text-grey" size={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;

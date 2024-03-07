import menu from "/src/assets/menu.png";
import { HashLink as Link } from "react-router-hash-link";

export function NavBar({
  isMobile,
  handleSideBar,
  showSideBar,
}: {
  isMobile: boolean;
  handleSideBar: any;
  showSideBar: boolean;
}) {
  return (
    <div
      className={`${
        showSideBar ? "hidden" : "absolute"
      } h-[80px] w-full flex justify-end lg:justify-center items-center px-[23px] z-50`}
    >
      {isMobile ? (
        <button onClick={handleSideBar}>
          <img
            src={menu}
            alt=""
            className={`w-[30px] h-[30px] hover:rotate-180 transition-transform duration-300 ease-in-out`}
          />
        </button>
      ) : (
        <div className="text-[30px] text-[#C8C8C8] flex space-x-[55px]">
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <Link smooth to="#home">
              Home
            </Link>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <Link smooth to="#about">
              About
            </Link>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <Link smooth to="#projects">
              Projects
            </Link>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <Link smooth to="#contact">
              Contact
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

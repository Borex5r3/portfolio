import React from "react";
import menu from "/src/assets/menu.png";


export function NavBar({
  isMobile,
  handleSideBar,
}) {
  return <div className="absolute h-[80px] w-full flex justify-end lg:justify-center items-center px-[23px]">
        {isMobile ? <button onClick={handleSideBar}>
            <img src={menu} alt="" className="w-[30px] h-[30px]" />
          </button> : <div className="text-[30px] text-[#C8C8C8] flex space-x-[55px]">
            <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
              Home
            </button>
            <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
              About
            </button>
            <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
              Projects
            </button>
            <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
              Contact
            </button>
          </div>}
      </div>;
}
  
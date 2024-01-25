import React from "react";
import menu from "/src/assets/menu.png";

export function NavBar({ isMobile, handleSideBar, showSideBar }) {
  console.log(showSideBar);

  return (
    <div className={`${showSideBar ? "hidden" : "fixed"} h-[80px] w-full flex justify-end lg:justify-center items-center px-[23px] z-50`}>
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
            <a href="#home">Home</a>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <a href="#about">About</a>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <a href="#projects">Projects</a>
          </button>
          <button className="hover:border-b-2 hover:text-[#FFF] border-[#7AFBB9]">
            <a href="#contact">Contact</a>
          </button>
        </div>
      )}
    </div>
  );
}

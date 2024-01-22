import React from "react";
export function SideBar({ handleSideBar }) {
  return (
    <div className="fixed min-w-[280px] w-full h-screen bg-[#262626]">
      <div className="absolute w-full h-[80px] flex justify-end items-center px-[23px]">
        <button onClick={handleSideBar}>
          <img
            src="/src/assets/plus.png"
            alt=""
            className="w-[30px] h-[30px] origin-center hover:rotate-45 duration-200"
          />
        </button>
      </div>
      <div className="text-[31px] text-[#C8C8C8] h-full flex flex-col items-center justify-center space-y-[20px]">
        <button className="hover:text-[#7AFBB9]">Home</button>
        <button className="hover:text-[#7AFBB9]">About</button>
        <button className="hover:text-[#7AFBB9]">Projects</button>
        <button className="hover:text-[#7AFBB9]">Contact</button>
      </div>
    </div>
  );
}

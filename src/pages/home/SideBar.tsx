import React from "react";
export function SideBar({
  handleSideBar
}) {
  return <div className="absolute min-w-[280px] w-full h-screen bg-[#262626]">
        <div className="absolute w-full h-[80px] flex justify-end items-center px-[23px]">
          <button onClick={handleSideBar}>
            <img src="/src/assets/plus.png" alt="" className="w-[30px] h-[30px]" />
          </button>
        </div>
        <div className="text-[31px] text-[#7AFBB9] h-full flex flex-col items-center justify-center space-y-[20px]">
          <button>Home</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </div>;
}
  
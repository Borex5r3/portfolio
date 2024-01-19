import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import React, { useState } from "react";
import menu from "/src/assets/menu.png";
import home_pc from "/src/assets/home-pc.jpeg";
import ImageContainer from "./ImageContainer.tsx";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  return (
    <div
      className={`relative h-[780px] w-screen bg-gray-600 bg-[url('/src/assets/home-pc.jpeg')] bg-cover bg-center min-w-[280px] border border-blue-500`}
    >
      <NavBar isMobile={isMobile} handleSideBar={handleSideBar} />
      <div className="absolute flex flex-col  items-center lg:px-[15vw] top-[100px] lg:top-[25%] w-full space-y-[20px] lg:space-y-[69px] text-[#C8C8C8]">
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-[20px] lg:space-y-0 lg:space-x-reverse lg:space-x-20">
          <img
            src="/src/assets/me.jpeg"
            alt="me"
            className="rounded-full border-[2px] border-[#7AFBB9] w-[235px] h-[235px]"
          />
          <div className="flex flex-col space-y-[15px] px-[23px] text-[0.938rem] lg:text-[25px] lg:font-light items-center lg:items-start">
            <div className="">
              <div className="flex space-x-2 lg:space-x-[16px] items-end text-[1.563rem] font-semibold lg:text-[50px] w-min sm:w-auto">
                <p className="">
                  Front-end <span className="text-[#7AFBB9]">Developer </span>
                </p>
                <img
                  src="/src/assets/smile.png"
                  alt=""
                  className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px]"
                />
              </div>
            </div>
            <p>
              Hi, I'm <span className="text-[#FFF]">Abdellah</span>{" "}
              <span className="text-[#7AFBB9]">Dbaich</span>. A passionate
              Front-end Developer based in Morocco. 📍
            </p>
            <div className="flex justify-between self-start w-max space-x-[10px]">
              <img
                src="/src/assets/linkedin.png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <img
                src="/src/assets/cat.png"
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-full">
          <div className="flex flex-col lg:flex-row items-center space-y-[30px] lg:space-y-0 w-full lg:w-auto lg:space-x-10">
            <div className="lg:border-r-2 lg:border-[#7AFBB9] lg:px-[28px]">
              <p className="text-[1.188rem] lg:text-[25px] font-light border-b-2 lg:border-0 border-[#7AFBB9]">
                Tech Stack
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-flow-col gap-[40px] px-[23px]">
              <ImageContainer
                img1={"/src/assets/html-icon.png"}
                img2={"/src/assets/css-icon.png"}
              />
              <ImageContainer
                img1={"/src/assets/js-icon.png"}
                img2={"/src/assets/ts-icon.png"}
              />
              <ImageContainer
                img1={"/src/assets/react-icon.png"}
                img2={"/src/assets/tailwind-icon.png"}
              />
            </div>
          </div>
        </div>
      </div>
      {isMobile && showSideBar && <SideBar handleSideBar={handleSideBar} />}
      <div
        className={`h-[780px] w-screen bg-black bg-opacity-60 min-w-[280px]`}
      ></div>
    </div>
  );
};

export default Home;

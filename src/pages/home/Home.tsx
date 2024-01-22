import { TechStack } from "./TechStack";
import { Content } from "./Content";
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
      className={`relative h-screen lg:h-screen w-full bg-[url('/src/assets/home-pc.jpeg')] bg-cover bg-center min-w-[280px]`}
    >
      <NavBar isMobile={isMobile} handleSideBar={handleSideBar} />
      <div className="absolute flex flex-col  items-center lg:px-[15vw] top-[100px] lg:top-[25%] w-full space-y-[20px] lg:space-y-[49px] text-[#C8C8C8]">
        <Content />
        <TechStack />
      </div>
      {isMobile && showSideBar && <SideBar handleSideBar={handleSideBar} />}
      <div
        className={`h-screen lg:h-screen w-full bg-black bg-opacity-60 min-w-[280px]`}
      ></div>
    </div>
  );
};

export default Home;

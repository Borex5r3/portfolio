import { TechStack } from "./TechStack";
import { Content } from "./Content";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { useState } from "react";
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
      className={`relative lg:min-h-[1200px] h-[800px] w-full bg-[url('/src/assets/home-bg-green.jpg')] bg-cover bg-center min-w-[280px]`}
    id="home">
      <NavBar isMobile={isMobile} handleSideBar={handleSideBar} showSideBar={showSideBar}/>
      {isMobile && <SideBar handleSideBar={handleSideBar} showSideBar={showSideBar} />}
      <div className="absolute flex flex-col  items-center lg:px-[15vw] top-[100px] lg:top-[25%] w-full space-y-[20px] lg:space-y-[200px] text-[#C8C8C8]">
        <Content />
        <TechStack />
      </div>
      <div
        className={`h-[800px] lg:min-h-[1200px] w-full bg-black bg-opacity-30 min-w-[280px]`}
      ></div>
    </div>
  );
};

export default Home;

import { Content } from "./Content";
import { Intro } from "./Intro";
import React from "react";

function Projects() {
  return (
    <>
      <div className="relative flex h-[2616px] lg:h-[4000px] xl:h-[3500px] 2xl:h-[3100px] bg-[url('assets/pc-projects.jpeg')] bg-cover bg-center w-full min-w-[280px]">
        <div className="absolute pt-[86px] pb-[46px] flex flex-col text-[#C8C8C8] text-[15px] lg:text-[20px] items-center lg:items-start text-center lg:text-start w-full h-full px-[23px] lg:px-[15vw]">
          <Intro />
          <Content />
        </div>
        <div
          className={`h-[2616px] lg:h-[4000px] xl:h-[3500px] 2xl:h-[3100px] w-full bg-black bg-opacity-60 min-w-[280px]`}
        ></div>
      </div>
    </>
  );
}

export default Projects;

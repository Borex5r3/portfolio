import React from "react";
import ImageContainer from "./ImageContainer.tsx";

export function TechStack({}) {
  return (
    <div className="lg:w-full">
      <div className="flex flex-col lg:flex-row items-center space-y-[30px] lg:space-y-0 w-full lg:w-auto lg:space-x-10">
        <div className="lg:border-r-2 lg:border-[#7AFBB9] lg:px-[28px]">
          <p className="text-[1.188rem] lg:text-[25px] 2xl:text-[30px] font-light border-b-2 lg:border-0 border-[#7AFBB9]">
            Tech Stack
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-flow-col lg:gap-[40px] px-[23px]">
          <ImageContainer
            img1={"/src/assets/html.svg"}
            img2={"/src/assets/css.svg"}
          />
          <ImageContainer
            img1={"/src/assets/js.svg"}
            img2={"/src/assets/ts.svg"}
          />
          <ImageContainer
            img1={"/src/assets/react.svg"}
            img2={"/src/assets/tailwind.svg"}
          />
        </div>
      </div>
    </div>
  );
}

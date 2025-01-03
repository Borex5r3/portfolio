
import ImageContainer from "./ImageContainer.tsx";
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import ts from '../../assets/ts.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';
import python from '../../assets/python-logo-only.svg';
import power_bi from '../../assets/New_Power_BI_Logo.svg';
import docker from '../../assets/docker-mark-blue.svg';
import nestjs from '../../assets/NestJS.svg';


export function TechStack() {
  return (
    <div className="lg:w-full">
      <div className="flex flex-col lg:flex-row items-center space-y-[30px] lg:space-y-0 w-full lg:w-auto lg:space-x-10">
        <div className="lg:border-r-2 lg:border-[#7AFBB9] lg:px-[28px]">
          <p className="text-[1.188rem] lg:text-[25px] 2xl:text-[30px] font-light border-b-2 lg:border-0 border-[#7AFBB9]">
            Tech Stack
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-flow-col lg:gap-[40px] px-[23px] gap-[10px]">
          <ImageContainer
            img1={html}
            img2={css}
          />
          <ImageContainer
            img1={js}
            img2={ts}
          />
          <ImageContainer
            img1={react}
            img2={tailwind}
          />
          <ImageContainer
            img1={docker}
            img2={nestjs}
          />
          <ImageContainer
            img1={python}
            img2={power_bi}
          />
        </div>
      </div>
    </div>
  );
}

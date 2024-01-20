import React from "react";
export function Content({}) {
  return (
    <div className="flex flex-col 2xl:w-full 2xl:justify-between lg:flex-row-reverse items-center space-y-[20px] lg:space-y-0 lg:space-x-reverse lg:space-x-20">
      <img
        src="/src/assets/me1.png"
        alt="me"
        className="w-[235px] h-[305px] 2xl:w-[400px] 2xl:h-[500px]"
      />
      <div className="flex flex-col space-y-[15px] 2xl:space-y-[30px] px-[23px] text-[0.938rem] lg:text-[25px] 2xl:text-[28px] lg:font-light items-center lg:items-start">
        <div className="flex space-x-2 lg:space-x-[16px] items-end text-[1.563rem] font-semibold lg:text-[50px] 2xl:text-[80px] w-min sm:w-auto 2xl:items-center">
          <p className="">
            Front-end <span className="text-[#7AFBB9]">Developer </span>
          </p>
          <img
            src="/src/assets/smile.png"
            alt=""
            className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px]"
          />
        </div>
        <p>
          Hi, I'm <span className="text-[#FFF]">Abdellah</span>{" "}
          <span className="text-[#7AFBB9]">Dbaich</span>. A passionate Front-end
          Developer based in Morocco. 📍
        </p>
        <div className="flex justify-between self-start w-max space-x-[10px] 2xl:space-x-[30px]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abdellah-dbaich-3850171b9/"
          >
            <img
              src="/src/assets/linkedin.png"
              alt=""
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] hover:rotate-12 duration-200"
            />
          </a>
          <a target="_blank" href="https://github.com/Borex5r3">
            <img
              src="/src/assets/cat.png"
              alt=""
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] hover:rotate-12 duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

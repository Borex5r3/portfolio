import React from "react";
import LinkAndGit from "/src/components/LinkAndGit.tsx";

function Footer() {
  return (
    <div className="relative h-[100px] sm:h-[150px] lg:h-[200px] xl:h-[240px] 2xl:h-[400px] min-w-[280px] bg-[url('assets/footer-bg-green.jpg')] bg-cover bg-center w-full flex justify-center items-end">
      <div className="absolute flex w-full px-[23px] lg:px-[15vw] lg:justify-between justify-around items-center py-[10px]">
        <p className="text-white text-[9px] lg:text-[20px]">
          Made with Passion 💫 by <span className="text-[#7AFBB9]">Borex</span>
        </p>
        <LinkAndGit mobileIconWidth={"30px"} deskIconWidth={"50px"}/>
      </div>
      <div
        className={`h-[100px] sm:h-[150px] lg:h-[200px] xl:h-[240px] 2xl:h-[400px] w-full bg-black bg-opacity-20 min-w-[280px]`}
      ></div>
    </div>
  );
}

export default Footer;

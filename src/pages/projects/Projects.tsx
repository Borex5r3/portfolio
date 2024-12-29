import { Content } from "./Content";
import { Intro } from "./Intro";

function Projects() {
  return (
    <>
      <div className="relative flex h-[3156px] lg:h-[5930px] xl:h-[4600px] 2xl:h-[4300px] bg-[url('assets/projects-bg-green-and-black.jpg')] bg-cover bg-center w-full min-w-[280px]" id="projects">
        <div className="absolute pt-[86px] pb-[46px] flex flex-col text-[#C8C8C8] text-[15px] lg:text-[20px] items-center lg:items-start text-center lg:text-start w-full h-full px-[23px] lg:px-[15vw]">
          <Intro />
          <Content />
        </div>
        <div
          className={`h-[3156px] lg:h-[5930px] xl:h-[4600px] 2xl:h-[4300px] w-full bg-black bg-opacity-50 min-w-[280px]`}
        ></div>
      </div>
    </>
  );
}

export default Projects;

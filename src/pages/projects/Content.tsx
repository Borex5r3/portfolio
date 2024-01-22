import React from "react";
import ProjectContainer from "./ProjectContainer.tsx";
import { useMediaQuery } from "react-responsive";

export function Content({}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const mediumDesktop = useMediaQuery({
    query: "(min-width: 1023px) and (max-width: 1280px)",
  });
  const largeDesktop = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1536px)",
  });
  return (
    <div className="flex flex-col space-y-[55px] lg:space-y-[100px] mt-[70px] lg:mt-[130px]">
      {/* netflix */}
      <ProjectContainer
        img={"/src/assets/netflix.png"}
        imgW={
          isMobile
            ? "400"
            : mediumDesktop
            ? "500"
            : largeDesktop
            ? "600"
            : "733"
        }
        title={"Netflix Clone"}
        content={
          "I aimed to showcase my proficiency in front-end development by recreating the user interface of the world-renowned streaming platform, Netflix."
        }
        demoLink={"https://borex-netflix-clone.vercel.app/"}
        codeLink={"https://github.com/Borex5r3/netflix-clone"}
      />
      {/* ft_transcendence */}
      <ProjectContainer
        img={"/src/assets/ft_transcendence.png"}
        imgW={
          isMobile
            ? "400"
            : mediumDesktop
            ? "420"
            : largeDesktop
            ? "580"
            : "728"
        }
        title={"ft_transcendence"}
        content={
          "Dive into the world of web development with my most exhilarating project yet – an Online Ping Pong Game. This venture served as the playground where I harnessed the power of HTML, CSS, JavaScript, TypeScript, and the efficiency of Tailwind CSS."
        }
        codeLink={"https://github.com/oussamalakhdar/Transcendence"}
        reverseContent={isMobile ? false : true}
      />
      {/* Web Server */}
      <ProjectContainer
        img={"/src/assets/web-server.png"}
        imgW={
          isMobile
            ? "400"
            : mediumDesktop
            ? "500"
            : largeDesktop
            ? "600"
            : "733"
        }
        title={"Web Server"}
        content={
          "Implemented a robust web server using C++ and applied Object-Oriented Programming (OOP) concepts for a seamless and efficient structure. Responsible for handling GET, POST, and DELETE requests, ensuring smooth communication between the server and clients."
        }
        codeLink={"https://github.com/ayoubessabiry/webserv"}
      />
      {/* inception */}
      <ProjectContainer
        img={"/src/assets/inception.png"}
        imgW={
          isMobile
            ? "400"
            : mediumDesktop
            ? "500"
            : largeDesktop
            ? "600"
            : "728"
        }
        title={"Inception"}
        content={
          "This undertaking was a hands-on exploration into the realm of Docker, Docker Compose, and the intricate art of working with containers."
        }
        codeLink={"https://github.com/Borex5r3/inception"}
        reverseContent={isMobile ? false : true}
      />
    </div>
  );
}

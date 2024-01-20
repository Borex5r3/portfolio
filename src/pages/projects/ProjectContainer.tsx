import React from "react";

function ProjectContainer({ img, title, content, demoLink, codeLink, imgW, reverseContent }) {
        
  return (
    <div className={`flex flex-col items-center w-full space-y-[35px] lg:space-y-0 text-[15px] lg:text-[26px] ${reverseContent ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${reverseContent ? 'lg:space-x-10' : 'lg:space-x-reverse lg:space-x-10'}`}>
      <img
        src={img}
        alt={img}
        className={`border border-[#7AFBB9] rounded-[10px]`}
        width={imgW}
      />
      <div className="w-full space-y-[20px] flex flex-col lg:space-y-[30px] font-light">
        <p className="text-[20px] lg:text-[36px] text-[#7AFBB9] font-semibold">
          {title}
        </p>
        <p>{content}</p>
        <div className="flex justify-center lg:justify-start space-x-[17px] lg:space-x-[25px] text-[#C8C8C8] text-center lg:text-[20px] font-light">
          {demoLink ? (
            <div className="flex rounded-[10px] border-2 border-[#C8C8C8] items-center px-[15px] py-[13px]">
              <a href={demoLink} target="_blank">Demo Link</a>
            </div>
          ) : (
            ""
          )}
          <div className="flex rounded-[10px] border-2 border-[#C8C8C8] items-center px-[10px] py-[10px]">
            <a href={codeLink} target="_blank">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;

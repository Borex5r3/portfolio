function ProjectContainer({
  img,
  title,
  content,
  demoLink,
  codeLink,
  imgW,
  reverseContent,
} : {
  img: string;
  title: string;
  content: string;
  demoLink?: string;
  codeLink: string;
  imgW: number;
  reverseContent?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center w-full space-y-[35px] lg:space-y-0 text-[15px] lg:text-[26px] ${
        reverseContent ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${
        reverseContent ? "lg:space-x-10" : "lg:space-x-reverse lg:space-x-10"
      }`}
    >
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
            <div className="flex rounded-[10px] border-2 border-[#C8C8C8] items-center px-[15px] py-[13px] hover:text-[#7AFBB9] transition-all ease-in-out duration-300 relative z-10 group hover:border-[#7AFBB9] ">
              <a
                href={demoLink}
                target="_blank"
                className="relative group-hover:text-black group-hover:font-normal"
              >
                Demo Link
              </a>
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#7AFBB9] -z-10 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300 rounded-[6px] origin-left"></div>
            </div>
          ) : (
            ""
          )}
          <div className="flex rounded-[10px] border-2 border-[#C8C8C8] items-center px-[10px] py-[10px] hover:border-[#7AFBB9]  hover:text-[#7AFBB9] transition-colors duration-300 ease-in-out relative z-10 group">
            <a
              href={codeLink}
              target="_blank"
              className="relative group-hover:text-black group-hover:font-normal"
            >
              Source Code
            </a>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#7AFBB9] -z-10 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300 rounded-[6px] origin-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;

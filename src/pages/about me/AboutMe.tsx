import cat_pc from '../../assets/cat-pc.jpeg';

function AboutMe() {
  return (
    <div className="h-[637px] min-w-[280px] bg-black flex flex-col lg:flex-row lg:space-y-0 lg:px-[15vw] items-center pt-[86px] pb-[46px] space-y-[59px] lg:space-x-[67px] px-[23px]" id="about">
      <img
        src={cat_pc}
        alt=""
        className="w-[235px] h-[154px] lg:w-[400px] 2xl:w-[600px] 2xl:h-[375px] lg:h-[250px]"
      />
      <div className="flex flex-col text-[#C8C8C8] text-[15px] lg:text-[20px] items-center lg:items-start text-center lg:text-start space-y-[17px]">
        <p className="text-[20px] lg:text-[30px] text-[#7AFBB9] font-medium">
          About me
        </p>
        <div className="space-y-[10px] font-light">
          <p>
            Hello, I'm Abdellah, a passionate software developer with experience in building dynamic, scalable applications using technologies like React.js, Next.js, Nest.js, TypeScript, Python, and Tailwind CSS.
          </p>
          <p>
            I specialize in creating clean, efficient, and user-centric solutions, whether it's front-end interfaces or back-end systems. My focus is always on delivering high-quality code, seamless performance, and exceptional user experiences.
          </p>
          <p>Let's build something incredible together!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

import React from "react";

function LinkAndGit({mobileIconWidth, deskIconWidth}) {
  console.log(mobileIconWidth);

  return (
    <div className="flex justify-between self-start w-max space-x-[10px] 2xl:space-x-[30px]">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/abdellah-dbaich-3850171b9/"
      >
        <img
          src="/src/assets/linkedin.png"
          alt=""
          className={`lg:w-[${deskIconWidth}] hover:rotate-12 duration-200`}
          width={mobileIconWidth}
        />
      </a>
      <a target="_blank" href="https://github.com/Borex5r3">
        <img
          src="/src/assets/cat.png"
          alt=""
          className={`lg:w-[${deskIconWidth}] hover:rotate-12 duration-200`}
          width={mobileIconWidth}
        />
      </a>
    </div>
  );
}

export default LinkAndGit;

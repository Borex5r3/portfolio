import linkedin from '../assets/linkedin.png';
import cat from '../assets/cat.png';

function LinkAndGit({ mobileIconWidth, deskIconWidth } : { mobileIconWidth:string ; deskIconWidth:string }) {
  return (
    <div className="flex justify-between self-start w-max space-x-[10px] 2xl:space-x-[30px]">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/abdellah-dbaich-3850171b9/"
      >
        <img
          src={linkedin}
          alt=""
          className={`lg:w-[${deskIconWidth}] hover:rotate-12 duration-200`}
          width={mobileIconWidth}
        />
      </a>
      <a target="_blank" href="https://github.com/Borex5r3">
        <img
          src={cat}
          alt=""
          className={`lg:w-[${deskIconWidth}] hover:rotate-12 duration-200`}
          width={mobileIconWidth}
        />
      </a>
    </div>
  );
}

export default LinkAndGit;

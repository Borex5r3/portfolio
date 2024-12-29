function ImageContainer({ img1, img2 }: { img1: string; img2: string }) {
  return (
    <div className="flex space-x-[7px] hover:scale-75 2xl:hover:scale-75 duration-200">
      <img
        src={img1}
        alt=""
        className="w-[20px] sm:w-[42px] sm:h-[40px] lg:w-[62px] lg:h-[60px] 2xl:w-[82px] 2xl:h-[80px]"
      />
      <img
        src={img2}
        alt=""
        className="w-[20px] sm:w-[42px] sm:h-[40px] lg:w-[62px] lg:h-[60px] 2xl:w-[82px] 2xl:h-[80px]"
      />
    </div>
  );
}

export default ImageContainer;

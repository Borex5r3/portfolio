import React from 'react'

function ImageContainer({img1, img2}) {
  return (
    <div className="flex space-x-[7px]">
      <img src={img1} alt="" className="w-[42px] h-[40px] lg:w-[62px] lg:h-[60px]" />
      <img src={img2} alt="" className="w-[42px] h-[40px] lg:w-[62px] lg:h-[60px]" />
    </div >
  )
}

export default ImageContainer

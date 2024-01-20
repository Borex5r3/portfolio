import React from "react";

const Test = ({ imgW, imgH }) => {
  console.log(imgW, imgH);

  return (
    <div className="w-full flex space-x-10">
      <div className="w-10 h-10 bg-green-400"></div>
      <div className="w-10 h-10 bg-red-400"></div>
    </div>
  );
};

export default Test;

import React from "react";
export function Intro({}) {
  return (
    <div className="flex flex-col w-full space-y-[17px] text-[15px] lg:text-[26px]">
      <p className="text-[20px] lg:text-[30px] text-[#7AFBB9] font-medium">
        Projects
      </p>
      <div className="space-y-[10px] font-light">
        <p>
          Welcome to my coding playground! Here, I've cooked up a mix of tech
          adventures.
        </p>
        <p>
          Picture this: Docker sorcery, web servers like building blocks, an
          online ping pong showdown, and a Netflix twin.
        </p>
        <p>Let's dive into the magic of my projects!</p>
      </div>
    </div>
  );
}

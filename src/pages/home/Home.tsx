import React from 'react'
import menu from '/src/assets/menu.png'
import home_pc from '/src/assets/home-pc.jpeg'


const Home = () => {
  return (
    <div className={`relative h-screen w-screen bg-gray-600 bg-[url('/src/assets/home-pc.jpeg')] bg-cover bg-center min-w-[280px]`}>
      <div className="absolute h-[80px] w-full border border-[red] flex justify-end items-center px-[23px]">
        <img src={menu} alt="" className="w-[30px] h-[30px]"/>
      </div>
      <div className="absolute top-[100px] w-full px-[23px] space-y-[20px] text-[#C8C8C8]">
        <img src="/src/assets/me.jpeg" alt="me" className=" rounded-full border-[2px] border-[#7AFBB9]"/>
        <div className="flex flex-col space-y-[15px] text-[0.938rem]">
          <p className="text-[1.563rem]"><span className="text-[#7AFBB9]">Front-end</span> Developer</p>
          <p>Hi, I'm <span className="text-[#FFF]">Abdellah</span> <span className="text-[#7AFBB9]">Dbaich</span>. A passionate Front-end Developer based in Morocco. 📍</p>
          <div className="flex justify-between w-max space-x-[10px]">
            <img src="/src/assets/linkedin.png" alt="" className="w-[30px] h-[30px]"/>
            <img src="/src/assets/cat.png" alt="" className="w-[30px] h-[30px]"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <p className="text-[1.188rem] font-light">Tech Stack</p>
            <div className="h-[2px] bg-[#7AFBB9]"></div>
          </div>
          <div className="">
            <div className="">

            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={`h-screen w-screen bg-black bg-opacity-60 min-w-[280px]`}></div>
    </div>
  )
}

export default Home

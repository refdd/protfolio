import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Bulid Something Togetther
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Refat</span>
          </h1>
          <h1 className=" py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Creative Front-End Developer offering 3+ years of experience
            providing high-impact web solutions for diverse industry
            organizations. Skilled in designing, developing and testing multiple
            web-based applications incorporating a range of technologies.
            Aspiring to combine broad background with strong technical skills to
            excel as a Front-End Developer.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                           <FaLinkedinIn/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                           <FaGithub/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                           <AiOutlineMail/>
                           </div>
                           <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                           <BsFillPersonLinesFill/>
                           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

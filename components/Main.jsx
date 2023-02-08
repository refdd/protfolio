import Link from "next/link";
import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

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
          <div className="flex items-center gap-2 justify-between max-w-[330px] m-auto py-4">
            <Link href={"https://www.linkedin.com/in/mohamed-refat-ab874523a/"}>
              <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                <a>
                  <FaLinkedinIn />
                </a>
              </div>
            </Link>
            <Link href={"https://github.com/refdd"}>
              <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                <a>
                  <FaGithub />
                </a>
              </div>
            </Link>

            <Link href={"mailto:titorefat76@gmail.com"}>
              <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                <a>
                  <AiOutlineMail />
                </a>
              </div>
            </Link>

            <Link href="tel:+201027561605">
              <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                <a>
                  <BsFillPersonLinesFill />
                </a>
              </div>
            </Link>
            <Link href="https://www.codewars.com/users/refdd">
              <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in">
                <a>
                  <SiCodewars />
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

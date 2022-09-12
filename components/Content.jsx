import React from "react";
import Image from "next/image";
import contentImage from "../public/assets/contact1.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

function Content() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 w-[895] h-[95%] ease-in duration-300"
                  src={contentImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Mohamed Refat</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Content With Me </p>
                <div className="flex items-center justify-between py-4 ">
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
}

export default Content;

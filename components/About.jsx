import Image from "next/image";
import React from "react";
import aboutImage from "../public/assets/projects/person1.jpg";
import PdfButtom from "./PdfButtom";

function About() {
  return (
    <div id="about" className=" w-full p-2 flex items-center py-16 ">
      <div className="max-w[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>{" "}
          <h2 className="py-2">Who I Am </h2>
          <p className="py-2 text-xl leading-8 text-gray-600 ">
            I am Not Your Normal Developre
          </p>
          <p className="py-2 text-xl leading-8 text-gray-600 ">
            Over the past three years, I have dedicated myself to refining my
            skills as a web developer, and I'm thrilled to share with you my
            recent experiences. Initially, my journey began with making minor
            adjustments to a small business website using HTML and CSS. However,
            what initially started as a few modifications quickly blossomed into
            a deep passion for programming.
          </p>
          <p className="py-2 text-xl leading-8 text-gray-600 ">
            During the past three years, I have actively worked as a web
            developer, acquiring valuable experience in front-end development.
            Throughout this time, I have successfully contributed to a diverse
            range of projects, spanning from small and straightforward websites
            to large and intricate ones. My skill set encompasses HTML, CSS,
            JavaScript, React.js, Next.js, React Native, and WordPress. I am an
            enthusiastic and diligent individual who consistently seeks out new
            challenges. The prospect of continual learning and growth as a
            developer excites me, and I am confident in my ability to make a
            valuable impact.
          </p>
          <div className=" md:pb-16 pb-4  cursor-pointer">
            <PdfButtom />
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex  items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className=" rounded-xl"
            src={aboutImage}
            layout="intrinsic"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

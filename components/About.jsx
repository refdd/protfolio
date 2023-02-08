import Image from "next/image";
import React from "react";
import aboutImage from "../public/assets/projects/meto.png";
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
            I've spent the last years working as a lifeguard. I've always had a
            talent Technology and working with computers. In 2019 I started
            working Use HTML and CSS to make some minor tweaks to a small
            business The website I was running. What I thought were just a few
            little things Modifications turned into a love of programming.
          </p>
          <p className="py-2 text-xl leading-8 text-gray-600 ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing
          </p>
          <p className="py-2 text-xl leading-8 text-gray-600 ">
            I have been working as a web developer for the past two years. In
            that time, I have gained experience in front-end development. I have
            also worked on a wide range of projects, from small, simple websites
            to large, complex ones. My skills include HTML, CSS, JavaScript,
            React.js, Next.js , React native , Wordpress I am a motivated and
            hard-working individual who is always looking for new challenges. I
            am excited to learn and grow as a developer, and I am confident that
            I can be a valuable.
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

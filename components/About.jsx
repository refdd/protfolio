import Image from "next/image";
import React from "react";
import aboutImage from '../public/assets/me.jpg'

function About() {
  return (
    <div id="about"  className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>{" "}
          <h2 className="py-2">Who I Am </h2>
          <p className="py-2 text-gray-600 ">
           I am Not Your Normal Developre
          </p>
          <p className="py-2 text-gray-600 ">
            I've spent the last years working as a lifeguard. I've always had a
            talent Technology and working with computers. In 2019 I started
            working Use HTML and CSS to make some minor tweaks to a small
            business The website I was running. What I thought were just a few
            little things Modifications turned into a love of programming.
          </p>
          <p className="py-2 text-gray-600 ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce . I am now spending my time building
            projects with React JS, Firebase, and learning new technologies.
          </p>
          <p className="py-2 text-gray-600 ">
            Coding on ReactJS and dreaming on ReactJs and NextJS . Help
            companies to bulid complex web applications serving 1,000,000 users
            with React and modern technologies.Experience building functional
            and effective platforms,Fluency in Javascript, HTML, and CSS
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex  items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image className=" rounded-xl" src={aboutImage}  layout="intrinsic"  alt="/"/>

        </div>
      </div>
    </div>
  );
}

export default About;

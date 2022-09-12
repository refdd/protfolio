import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">HTML</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">CSS</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">javascript</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">react</h3>
              </div>
            </div>
          </div>
          
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/hook.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">hooks</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">nextjs</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/node.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">node</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">tailwind</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/firebase.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">firebase</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/github1.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" uppercase">github</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3  className="uppercase">Typescript</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/sass.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3  className="uppercase">sass</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/jest.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3  className="uppercase">jest</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/bootstrap.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3  className="uppercase">bootstrap</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/seo.jpg"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">seo</h3>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src="/../public/assets/skills/api.png"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">api</h3>
              </div>
            </div>
          </div>
          {/* skill */}
        
        </div>
      </div>
    </div>
  );
}

export default Skills;

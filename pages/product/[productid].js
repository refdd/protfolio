import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { allProject } from "../../data/dataProject";
import { useRouter } from "next/router";

function ProdictId() {
  const [singilProject, setSingilProject] = useState([]);
  const router = useRouter();
  const nameProject = router.query.productid;
  useEffect(() => {
    setSingilProject(
      allProject.filter((project) => project.type === nameProject)
    );
  }, [nameProject]);
  if (singilProject.length === 0) return <p>reat</p>;
  console.log(singilProject[0].image);

  return (
    <div className=" overflow-x-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={singilProject[0].image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> </h2>
          <h3>
            {singilProject[0].consestOf.map((items, i) => (
              <span key={i}> / {items} </span>
            ))}
          </h3>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            {singilProject[0].title}
            <h2>Overview</h2>
            <p>{singilProject[0].overview}</p>
            <a href={singilProject[0].code} target="_blank" rel="noreferrer">
              <button
                className="px-8 py-2 mt-4 mr-8 disabled:opacity-50"
                disabled={singilProject[0].code === "" ? true : false}
              >
                Code
              </button>
            </a>
            <a href={singilProject[0].demo} target="_blank" rel="noreferrer">
              <button
                className="px-8 py-2 mt-4 mr-8 disabled:opacity-50"
                disabled={singilProject[0].demo === "" ? true : false}
              >
                Demo
              </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {singilProject[0].technologies.map((item, i) => (
                  <p key={i} className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#project">
            <p className="underline cursor-pointer px-8 py-2 mt-4 mr-8 text-xl bg-slate-500  rounded-3xl text-center">
              Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProdictId;

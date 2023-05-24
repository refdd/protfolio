import React from "react";
import ProjectItem from "./ProjectItem";
import setFristproject from "../public/assets/projects/osoule.png";
import set2project from "../public/assets/projects/netflix.jpg";
import coinShooping from "../public/assets/projects/coinShooping.png";
import shooping from "../public/assets/projects/shooping.png";
import RealEstate from "../public/assets/projects/Real-Estate.png";
import searchGoogle from "../public/assets/projects/searchGoogle.png";
import Dashboard from "../public/assets/projects/Dashboard.png";
import spotify from "../public/assets/projects/spotify.png";
import fitclub from "../public/assets/projects/fitclub.png";
import gym from "../public/assets/projects/gym.png";
import Dino from "../public/assets/projects/Dino.png";
import Snake from "../public/assets/projects/Snake.png";
import SpecialDesing from "../public/assets/projects/Special-Desing.png";
import color from "../public/assets/projects/color.png";
import memphis from "../public/assets/projects/memphis.png";
import nilelCrouse from "../public/assets/projects/nilelCrouse.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
const projectData = {
  projects: [
    {
      id: "137",
      title: "nile cruisez",
      projectUrl: "/product/nile_cruisez",
      backgroundImg: nilelCrouse,
      buildBy: "Next.js",
    },
    {
      id: "17",
      title: "memphis tours",
      projectUrl: "/product/memphis_tours",
      backgroundImg: memphis,
      buildBy: "javaScript",
    },
    {
      id: "1",
      title: "Osoule",
      projectUrl: "/product/Osoule",
      backgroundImg: setFristproject,
      buildBy: "javaScript",
    },
    {
      id: "2",
      title: "netflix",
      projectUrl: "/product/Netflix",
      backgroundImg: set2project,
      buildBy: "nextjs",
    },
    {
      id: "3",
      title: "commerce",
      projectUrl: "/product/commerce",
      backgroundImg: shooping,
      buildBy: "reactjs",
    },
    {
      id: "4",
      title: "realestate",
      projectUrl: "/product/realestate",
      backgroundImg: RealEstate,
      buildBy: "nextjs",
    },
    {
      id: "5",
      title: "Cryptosapp",
      projectUrl: "/product/cryptosapp",
      backgroundImg: coinShooping,
      buildBy: "reactjs",
    },
    {
      id: "6",
      title: "searchGoogle",
      projectUrl: "/product/searchGoogle",
      backgroundImg: searchGoogle,
      buildBy: "reactjs",
    },
    {
      id: "7",
      title: "Dashboard",
      projectUrl: "/product/Dashboard",
      backgroundImg: Dashboard,
      buildBy: "reactjs",
    },
    {
      id: "8",
      title: "spotify",
      projectUrl: "/product/spotify",
      backgroundImg: spotify,
      buildBy: "reactjs",
    },
    {
      id: "9",
      title: "fitclub",
      projectUrl: "/product/fitclub",
      backgroundImg: fitclub,
      buildBy: "reactjs",
    },
    {
      id: "10",
      title: "gym",
      projectUrl: "/product/gym",
      backgroundImg: gym,
      buildBy: "javaScript",
    },
    {
      id: "11",
      title: "Dino Game",
      projectUrl: "/product/dino",
      backgroundImg: Dino,
      buildBy: "javaScript",
    },
    {
      id: "12",
      title: "Snake",
      projectUrl: "/product/snake",
      backgroundImg: Snake,
      buildBy: "javaScript",
    },
    {
      id: "13",
      title: "SpecialDesing",
      projectUrl: "/product/SpecialDesing",
      backgroundImg: SpecialDesing,
      buildBy: "javaScript",
    },
    {
      id: "14",
      title: "color",
      projectUrl: "/product/color",
      backgroundImg: color,
      buildBy: "javaScript",
    },
  ],
};
function Projects() {
  return (
    <div id="project" className="w-full h-auto">
      <div className="max-3[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">what I've Bulit</h2>

        <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              280: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {projectData.projects.map((item) => (
              <SwiperSlide key={item.id}>
                <ProjectItem
                  backgroundImg={item.backgroundImg}
                  titleProject={item.title}
                  projectUrl={item.projectUrl}
                  buildBy={item.buildBy}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;

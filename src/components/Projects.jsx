import React from "react";
import { bigProjects, smallProjects } from "../data";
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>

        <div className="z-0 mb-8 max-w-3xl mx-auto">
          <Carousel
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            dynamicHeight={true}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
          >
            {bigProjects.map(
              ({ id, src, gitLink, title, description, stack }) => (
                <div key={id} className="relative">
                  <img src={src} alt="project-pic" className="rounded-lg" />
                  <div className="flex flex-col justify-center absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-80 text-white">
                    <div className="flex justify-center pb-4">
                      <h2 className="text-bold">{title} </h2>
                      <a
                        href={gitLink}
                        className="duration-200 hover:scale-105 text-sm ml-3"
                      >
                        <FaGithub size={25} />
                      </a>
                    </div>
                    <p className="text-sm">{description}</p>
                    <div className="flex justify-center mt-2">
                      <p className="font-bold text-sm">Tech Stack:</p>
                      <p className="ml-1 text-sm">{stack}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </Carousel>
        </div>

        <div className="mb-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {smallProjects.map(
            ({ id, src, gitLink, title, description, stack }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-lg duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <div className="p-4 text-center">
                  <div className="flex justify-center">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <a
                      href={gitLink}
                      className="duration-200 hover:scale-105 text-sm ml-3"
                    >
                      <FaGithub size={25} className="mr-2" />
                    </a>
                  </div>
                  <p className="text-sm mb-4">{description}</p>
                  <div className="flex justify-center items-center mb-4"></div>
                  <p className="text-xs mb-1">
                    <span className="font-bold">Tech Stack:</span>
                  </p>
                  <p className="text-xs">{stack}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

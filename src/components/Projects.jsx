import React from "react";
import { projects } from "../data";
const Portfolio = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg pg-4 mx-auto 
      flex flex-col justtify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold border-b-4
          border-gray-500 p-2 inline"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0"
        >
          {projects.map(({ id, src, gitLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-lg duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center text-center">
                <button className="bg-gray-800 rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Deployed Project
                </button>
                <a
                  href={gitLink}
                  className="bg-gray-800 rounded-lg w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Github Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

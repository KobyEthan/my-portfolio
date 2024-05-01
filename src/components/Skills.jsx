import React from "react";
import { skills } from "../data";
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b
    from-gray-800 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4
          border-gray-500 p-2 inline"
          >
            Technical Skills
          </p>
          <p className="py-6">
            These are some of the technologies I have worked with.
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0"
        >
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

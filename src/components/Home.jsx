import React from "react";
// import ProfileImage form "../assets/profile-image.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Aspiring Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am extremely passionate about the software development industry
            and am eager to learn! Currently, I love to work on web applications
            with technologies like React, Tailwind, JavaScript and many others.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={600}
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 pl-3">
                <FaArrowRightLong size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          {/* <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

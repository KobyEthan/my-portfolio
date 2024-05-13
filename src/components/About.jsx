import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg pg-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          My software development journey started in college when I decided that
          going in as undelcared was unwise and picking a major was in my best
          interest. I figured that I had enough interest in technology to start
          a degree in computer information systems, though I wasn't too
          enthusiastic about it at the time. It wasn't until I had my first real
          programming course with my friends that I fell in love with every
          aspect of software development (even debugging).
        </p>
        <br />
        <p className="text-xl">
          From that moment forward I was hooked (react pun) and knew I wanted to
          code for a living. Throughout my degree I learned about object
          oriented programming with Java and Python, networking and information
          security, web development, and many other concepts. Currently, I'm
          picking up JavaScript, and building web applications to enhance my
          skills and my portfolio.
        </p>
      </div>
    </div>
  );
};

export default About;

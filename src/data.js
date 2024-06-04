import chatApp from "./assets/projectPics/chatApp.png";
import weatherApp from "./assets/projectPics/weatherApp.png";
import persistenceList from "./assets/projectPics/persistenceList.png";
import simpleCalculator from "./assets/projectPics/simpleCalculator.png";
import sortingVisualizer from "./assets/projectPics/sortingVisualizer.png";
import jokeGenerator from "./assets/projectPics/jokeGenerator.png";
import noteTaker from "./assets/projectPics/noteTaker.png";
import HTML from "./assets/skillsIcons/html-5.png";
import CSS from "./assets/skillsIcons/css-3.png";
import GitHub from "./assets/skillsIcons/github.png";
import Node from "./assets/skillsIcons/node.png";
import React from "./assets/skillsIcons/react.png";
import Java from "./assets/skillsIcons/java.png";
import JavaScript from "./assets/skillsIcons/js.png";
import Python from "./assets/skillsIcons/python.png";
import SQL from "./assets/skillsIcons/sql-server.png";

const links = [
  {
    id: 1,
    link: "intro",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "skills",
  },
  {
    id: 4,
    link: "projects",
  },
];

const skills = [
  {
    id: 1,
    src: HTML,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: CSS,
    title: "CSS",
    style: "shadow-blue-300",
  },
  {
    id: 3,
    src: GitHub,
    title: "GitHub",
    style: "shadow-gray-300",
  },
  {
    id: 4,
    src: Node,
    title: "Node",
    style: "shadow-green-500",
  },
  {
    id: 5,
    src: React,
    title: "React",
    style: "shadow-blue-600",
  },

  {
    id: 6,
    src: JavaScript,
    title: "JavaScript",
    style: "shadow-yellow-600",
  },
  {
    id: 7,
    src: SQL,
    title: "SQL",
    style: "shadow-green-800",
  },

  {
    id: 8,
    src: Java,
    title: "Java",
    style: "shadow-red-600",
  },
  {
    id: 9,
    src: Python,
    title: "Python",
    style: "shadow-blue-800",
  },
];

const bigProjects = [
  {
    id: 1,
    src: chatApp,
    gitLink: "https://github.com/KobyEthan/MERN-chat-app",
    deployLink: "https://mern-chat-app-1r7h.onrender.com",
    title: "Chat App",
    description:
      "A real-time chat application using socket.io and the MERN stack to provide a seemless user experience.",
    stack:
      "React, Node, Express, MongoDB, Socket.io, JWT, Bcrypt, Axios, Material-UI, Chakra UI.",
  },
  {
    id: 2,
    src: sortingVisualizer,
    gitLink: "https://github.com/KobyEthan/sorting-visualizer",
    deployLink: "https://sorting-visualizer-kobysm.netlify.app",
    title: "Sorting Visualizer",
    description:
      "Visually represents popular sorting algorithms to better understand how they work. (UI Not Mobile Friendly)",
    stack: "React, JavaScript, HTML, CSS.",
  },
];

const smallProjects = [
  {
    id: 1,
    src: weatherApp,
    gitLink: "https://github.com/KobyEthan/weather-app",
    deployLink: "https://weather-app-kobysm.netlify.app/",
    title: "Weather App",
    description:
      "Fetches data from a weather API and displays the current weather in a given location.",
    stack: "React, TypeScript, Axios, HTML, CSS.",
  },
  {
    id: 2,
    src: persistenceList,
    gitLink: "https://github.com/KobyEthan/persistence-list",
    deployLink: "https://persistence-list.onrender.com",
    title: "Persistence List",
    description: "A simple to-do list app that uses SQLite to save tasks.",
    stack: "EJS, Node, Express, HTML, CSS.",
  },
  {
    id: 3,
    src: jokeGenerator,
    gitLink: "https://github.com/KobyEthan/jokeAPI-app.git",
    deployLink: "https://jokeapi-app.onrender.com",
    title: "Joke Generator",
    description: "An app that fetches jokes from an API and displays them.",
    stack: "EJS, Node, Express, HTML, CSS.",
  },
  {
    id: 4,
    src: simpleCalculator,
    gitLink: "https://github.com/KobyEthan/simple-calculator.git",
    deployLink: "https://simple-calculator-kobysm.netlify.app/",
    title: "Calculator",
    description: "A basic calculator that can perform simple arithmetic.",
    stack: "JavaScript, HTML, CSS.",
  },
  {
    id: 5,
    src: noteTaker,
    gitLink: "https://github.com/KobyEthan/note-taker-app",
    deployLink: "https://note-taker-kobysm.netlify.app/",
    title: "Note Taker",
    description: "Allows the user to create and delete notes.",
    stack: "React, JavaScript, HTML, CSS.",
  },
];

export { links, skills, bigProjects, smallProjects };

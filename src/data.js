import chatApp from "./assets/projectPics/chatApp.png";
import persistenceList from "./assets/projectPics/persistenceList.png";
import simpleCalculator from "./assets/projectPics/simpleCalculator.png";
import sortingVisualizer from "./assets/projectPics/sortingVisualizer.png";
import jokeGenerator from "./assets/projectPics/jokeGenerator.png";
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
    link: "projects",
  },
  {
    id: 4,
    link: "skills",
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
  },
  {
    id: 2,
    src: sortingVisualizer,
    gitLink: "https://github.com/KobyEthan/sorting-visualizer",
  },
];

const smallProjects = [
  {
    id: 1,
    src: persistenceList,
    gitLink: "https://github.com/KobyEthan/persistence-list",
  },
  {
    id: 2,
    src: simpleCalculator,
    gitLink: "https://github.com/KobyEthan/simple-calculator.git",
  },
  {
    id: 3,
    src: jokeGenerator,
    gitLink: "https://github.com/KobyEthan/jokeAPI-app.git",
  },
];

export { links, skills, bigProjects, smallProjects };

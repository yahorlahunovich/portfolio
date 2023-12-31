import { githubSvg, instagramSvg, linkedinSvg } from "@/public/assets/icons";
import {
  galleryImg,
  laptopImg,
  pizzaImg,
  pomImg,
  promptopiaImg,
  quizImg,
} from "@/public/assets/images";
import { ProjectsType } from "@/types";

export const superpowers = [
  "a Front-End Developer",
  "a React Developer",
  "a Web Developer",
  "a TypeScript Developer",
  "an Investor",
  "a Data Science Student",
  "a Speedcuber",
  "a Sportsman",
];

export const social_media_links = [
  {
    name: "Github",
    src: "https://github.com/egorlagunovich",
    iconSrc: githubSvg,
  },
  {
    name: "LinkedIn",
    src: "https://www.linkedin.com/in/egorlagunovich/",
    iconSrc: linkedinSvg,
  },
  {
    name: "Instagram",
    src: "https://www.instagram.com/egorlagunovich/",
    iconSrc: instagramSvg,
  },
];

export const projects: ProjectsType[] = [
  {
    title: "Quiz App",
    desc: "Discover and test your knowledge on diverse topics with Quiz App! I created this site for personal development and gaining new knowledge. This app is connected to a database with a huge number of questions on various topics. ",
    tools: ["React", "Redux", "CSS Modules"],
    img: quizImg,
    link: "https://egorlagunovich.github.io/quiz-app/",
    githubLink: "https://github.com/egorlagunovich/quiz-app",
    bg: "quiz",
  },
  {
    title: "Pomodoro Timer",
    desc: "My Pomodoro(Arancioro) Timer is a productivity tool designed to boost your focus and efficiency. Stay on track with your tasks and break them into manageable intervals with built-in notifications. I created this site to sharpen my front-end development skills and for personal use.",
    tools: ["React", "Redux", "TypeScript", "Tailwind"],
    img: pomImg,
    link: "https://egorlagunovich.github.io/productivity-manager/",
    githubLink: "https://github.com/egorlagunovich/productivity-manager",
    bg: "arancioro",
  },
  {
    title: "Pizza Order App ",
    desc: "This is an online shop for ordering pizza(e-commerce). All orders and data are connected to the database.  I created this project while taking a react course on the Udemy website.",
    tools: ["React", "Firebase", "CSS Modules"],
    img: pizzaImg,
    link: "https://egorlagunovich.github.io/food-order-app/",
    githubLink: "https://github.com/egorlagunovich/food-order-app",
    bg: "pizza",
  },
  {
    title: "Photo Gallery",
    desc: "I created this website as a gallery of photos taken by me. The goal of this project was to create a beautiful website and practice working with photographs on websites.",
    tools: ["React", "TypeScript", "Tailwind"],
    img: galleryImg,
    link: "https://photo-portfolio-livid-alpha.vercel.app/",
    githubLink: "https://github.com/egorlagunovich/photo-portfolio",
    bg: "gallery",
  },
  {
    title: "Promptopia",
    desc: "Promptopia is an open-source AI prompting tool for the modern world to discover, create and share creative prompts. This project was made in order to hone my skills in working with the Next framework, connecting tp MongoDB, and learning how to write a backend.",
    tools: ["Next", "MongoDB", "Tailwind"],
    img: promptopiaImg,
    link: "https://promptopia-teal-beta.vercel.app/",
    githubLink: "https://github.com/egorlagunovich/Promptopia",
    bg: "promptopia",
  },
];

export const allProjects: ProjectsType[] = [
  ...projects,
  {
    title: "Quiz App",
    desc: "Discover and test your knowledge on diverse topics with Quiz App! I created this site for personal development and gaining new knowledge.",
    tools: ["React", "Redux", "CSS Modules"],
    img: quizImg,
    link: "https://egorlagunovich.github.io/quiz-app/",
    githubLink: "https://github.com/egorlagunovich/quiz-app",
    bg: "",
  },
];

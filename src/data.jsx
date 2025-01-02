import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaGitAlt, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import jobImg from "./assets/Jobster.jpeg";
import comfyImg from "./assets/comfy.png";
import MixImg from "./assets/MixMaster.png";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },

  // { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-yellow-300 " />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-400 " />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNode className="h-16 w-16 text-green-400" />,
    text: "Skilled Node.js developer proficient in building robust server-side applications. Experienced in optimizing performance and implementing scalable solutions",
  },
  {
    id: nanoid(),
    title: "Mongodb",
    icon: <SiMongodb className="h-16 w-16 text-green-500" />,
    text: "Seasoned MongoDB developer proficient in schema design, query optimization, and data modeling.",
  },
  {
    id: nanoid(),
    title: "Redux-Toolkit",
    icon: <TbBrandRedux className="h-16 w-16 text-purple-500" />,
    text: "Seasoned Redux Toolkit expert specializing in streamlined state management for complex front-end applications.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitAlt className="h-16 w-16 text-orange-600" />,
    text: "Proficient in Git, adept at version control, branching, merging, and resolving conflicts to streamline collaborative software development processes.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-orange-600" />,
    text: "Proficient in Git, adept at version control, branching, merging, and resolving conflicts to streamline collaborative software development processes.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: jobImg,
    url: "https://jobster-blue.vercel.app/",
    github: "https://github.com/durgeshkumbhare/Jobster",
    title: "Jobster",
    text: "Streamlining job hunting with Project Jobster: Your centralized hub to manage multiple job applications effortlessly.",
  },
  {
    id: nanoid(),
    img: comfyImg,
    url: "https://comfy-store12.netlify.app/",
    github: "https://github.com/durgeshkumbhare/e-commerce",
    title: "Comfy-Store",
    text: "Building immersive furniture shopping experiences with React in my ecommerce project, where style meets functionality.",
  },
  {
    id: nanoid(),
    img: MixImg,
    url: "https://mixmaster21.netlify.app/",
    github: "https://github.com/durgeshkumbhare/Cocktail-app-",
    title: "MixMaster",
    text: "The Cocktail Mixer is a front-end project aimed at providing users with a fun and interactive platform for exploring and creating their favourite cocktail recipe ",
  },
];

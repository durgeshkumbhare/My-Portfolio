import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import  heroImg  from "../assets/heroImg.png";

const Hero = () => { 
  return (
    <div className=" py-24" id="home">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl tracking-wider font-bold text-slate-50">
            I'm Durgesh kumbhare
          </h1>
          <p className="mt-4 text-3xl capitalize tracking-wider">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg capitalize tracking-wider">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/durgeshkumbhare">
              <FaGithubSquare className="h-8 w-8  hover:text-slate-700 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/dkumbhare03/">
              <FaLinkedin className="h-8 w-8  hover:text-slate-700 duration-300" />
            </a>
            <a href="#">
              <BsTwitterX className="h-8 w-8  hover:text-slate-700 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg}  className="h-80 lg:h-96"/>
        </article>
      </div>
    </div>
  );
};

export default Hero;

import { links } from "../data";
import logo from "../assets/Logo.png";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <nav className="shadow-md bg-gradient-to-r from-slate-500 to-slate-800 w-full sticky top-0">
      <div className="mx-auto max-w-7xl px-6 py-4 md:flex items-center justify-between">
        <div className="">
          <img src={logo} className="h-8 w-8" />
        </div>
        <div
          onClick={() => {
            setToggleBtn(!toggleBtn);
          }}
          className="text-3xl text-gray-50 absolute right-6 top-4 hover:scale-110 duration-300 cursor-pointer md:hidden"
        >
          {toggleBtn ? <IoMdCloseCircle /> : <FaBarsStaggered />}
        </div>
        <ul
          className={`md:flex md:items-center mt-2 md:mt-[-0.5rem] ${
            toggleBtn ? "" : "hidden"
          }`}
        >
          {links.map((link) => {
            return (
              <li key={link.id} className=" md:ml-8 text-xl ">
                <a onClick={()=>{setToggleBtn(!toggleBtn)}}
                  href={link.href}
                  className="capitalize text-gray-50 hover:text-gray-400 duration-300 "
                >
                  {link.text}
                </a>
              </li>
            );
          })}
          <button className="bg-gray-50 px-3 py-1 pb-2 hover:bg-gray-400 rounded mt-2 text-gray-900 md:mt-[-0.2px]  md:ml-8 ">
            <a href="https://drive.google.com/file/d/1YMccBD0suu-e7FWl8NGEEXxjF_Zx-gwh/view?usp=drivesdk" className="capitalize text-xl">Resume</a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

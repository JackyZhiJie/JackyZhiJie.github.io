import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/oreo_logo.png"; //originally logo.svg
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="mt-[1vh] w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to="/" className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80">
          <img src={Logo} alt="Logo" className="w-1/2" onContextMenu={(e) => e.preventDefault()} />
        </Link>
        {/* nav */}
        <nav className="hidden lg:flex gap-x-12 font-semibold text-lg lg:text-xl">
          {/* lg means  */}
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          {/* <Link to="/portfolio" className="text-[#696c6d] hover:text-primary transition">
            Portfolio
          </Link> */}
          <Link to="/skills" className="text-[#696c6d] hover:text-primary transition">
            Skills
          </Link>
          {/* <Link to="/about" className="text-[#696c6d] hover:text-primary transition">
            About
          </Link> */}
          {/* <Link to="/contact" className="text-[#696c6d] hover:text-primary transition">
            Contact
          </Link> */}
          <Link to="/achievements" className="text-[#696c6d] hover:text-primary transition">
            Achievements
          </Link>
          <Link to="/prose" className="text-[#696c6d] hover:text-primary transition">
            Prose
          </Link>
          <Link to="/projects" className="text-[#696c6d] hover:text-primary transition">
            Projects
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
    </header>
  );
};

export default Header;

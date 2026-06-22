import React from "react";
import MobileNav from "./MobileNav";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "../img/header/oreo_logo.png"; //originally logo.svg
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="mt-[1vh] w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center justify-between">
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Logo with Text */}
        <Link to="/" className="w-24 sm:w-24 md:w-30 lg:w-36" loading="lazy">
          <img src={Logo} alt="Logo" className="w-full" onContextMenu={(e) => e.preventDefault()} />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold tracking-wide text-center text-lg lg:text-xl text-gray-900 dark:text-gray-100">Jacky Chen</span>
        <span className="text-center text-xs sm:text-[10px] lg:text-md text-[#696c6d] dark:text-gray-400 font-medium tracking-wider uppercase">Graduate Engineer @ MTR | HCI Researcher</span>
      </div>

      {/* nav */}
      <nav className="hidden lg:flex gap-x-6 font-semibold text-lg lg:text-xl">
        <Link to="/" className="text-[#696c6d] dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
          Home
        </Link>
        <Link to="/about" className="text-[#696c6d] dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
          About
        </Link>
        <Link to="/achievements" className="text-[#696c6d] dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
          Achievements
        </Link>
        <Link to="/projects" className="text-[#696c6d] dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
          Projects
        </Link>
        <Link to="/prose" className="text-[#696c6d] dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
          Prose
        </Link>
      </nav>

      <div className="flex items-center gap-4 ml-4">
        <DarkModeToggle />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

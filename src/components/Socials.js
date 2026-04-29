import React from "react";
import { FaInstagram, FaLinkedinIn, FaGoogleDrive, FaGithub } from "react-icons/fa";
import MobileNav from "./MobileNav";
import DarkModeToggle from "./DarkModeToggle";

const Socials = () => {
  return (
    <div className="xl:flex ml-4">
      <ul className="flex gap-x-2">
        <li className="inline-block mx-1">
          <a href="https://www.instagram.com/oreofotolife/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://drive.google.com/drive/folders/1tlPZHAjTWp-6rwtHee0GCxnmD77EC71G?usp=sharing" target="_blank" rel="noreferrer">
            <FaGoogleDrive className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://www.linkedin.com/in/jackyxczj" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://github.com/JackyZhiJie" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <DarkModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Socials;

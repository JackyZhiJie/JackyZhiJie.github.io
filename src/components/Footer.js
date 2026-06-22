import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full px-[30px] lg:px-[100px] py-2 border-t border-[#d4d4d8] dark:border-[#333] bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        <p className="text-sm text-[#696c6d] dark:text-gray-300">© 2026 Jacky Chen. Handcrafted with biophilic design.</p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;

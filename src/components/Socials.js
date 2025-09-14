import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import MobileNav from "./MobileNav";

const Socials = () => {
  return (
    <div className="xl:flex ml-4">
      <ul className="flex gap-x-2">
        <li className="inline-block mx-1">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-3xl text-primary" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://www.instagram.com/oreofotolife/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-3xl text-primary" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://www.youtube.com/@oreoproduction3586?si=WgpW1gBVtqEwD3-z" target="_blank" rel="noreferrer">
            <FaYoutube className="text-3xl text-primary" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://www.linkedin.com/in/jackyxczj" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="text-3xl text-primary" />
          </a>
        </li>
        {/* Mobile Nav */}
        <li className="inline-block mx-1">
          <MobileNav />
        </li>
      </ul>
    </div>
  );
};

export default Socials;

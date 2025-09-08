import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="xl:flex ml-4">
      <ul className="flex gap-x-4">
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
        <li className="inline-block mx-1"></li>
      </ul>
    </div>
  );
};

export default Socials;

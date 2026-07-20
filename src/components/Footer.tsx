import React from "react";
import { FaInstagram, FaLinkedinIn, FaGoogleDrive, FaGithub } from "react-icons/fa";
import { Linkedin, Github, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-bioLight-border dark:border-bioDark-border/50 py-2 bg-bioLight-card/50 dark:bg-bioDark-card/20 z-10">
      <div className="max-w-6xl mx-auto px-4 text-center sm:flex sm:justify-between sm:items-center space-y-4 sm:space-y-0 text-xs text-bioLight-textMuted dark:text-bioDark-textMuted font-light">
        <p>&copy; 2026 Jacky Chen. Handcrafted with biophilic design. • <a href="https://jackyzhijie.github.io/portfolio-v1/" target="_blank" rel="noreferrer" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">Old Portfolio (v1)</a></p>
    <div className="lg:flex ml-4">
      <ul className="flex gap-x-2 justify-center lg:justify-end">
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
          <a href="https://drive.google.com/drive/folders/1tlPZHAjTWp-6rwtHee0GCxnmD77EC71G?usp=sharing" target="_blank" rel="noreferrer">
            <FaGoogleDrive className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
        <li className="inline-block mx-1">
          <a href="https://www.instagram.com/oreofotolife/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-3xl text-primary dark:text-accent hover:scale-105 transition" />
          </a>
        </li>
      </ul>
    </div>

        {/* <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/jackyxczj" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a href="https://github.com/JackyZhiJie" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a href="https://jackyzhijie.github.io/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
            <ExternalLink className="w-3.5 h-3.5" />
            Portfolio
          </a>
        </div> */}
      </div>
    </footer>
  );
};

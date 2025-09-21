import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Link } from "react-router-dom";
import githubImg1 from "../img/projects/img1.jpg";
import githubImg3 from "../img/projects/img3.jpg";
import githubImg from "../img/portfolio/v1.jpg";
import photoImg from "../img/contact/man.jpg";
import photoImg2 from "../img/about/man.jpg";
import photoImg3 from "../img/projects/img5.jpg";

const githubProjects = [
  {
    name: "CINTEC-Arduino-Green-Energy-Workshop",
    description: "Developed and conducted at CUHK’s Centre of Innovation of Technology. This STEM workshop focuses on piezoelectric energy harvesting and ultrasonic sensing using Arduino, introducing secondary school students to sustainable energy concepts through hands-on experimentation.",
    link: "https://github.com/JackyZhiJie/CINTEC-Arduino-Green-Energy-Workshop",
    img: githubImg3,
  },
  {
    name: "CINTEC-Arduino-Air-Quality-Workshop",
    description: "A comprehensive STEM workshop developed and conducted at CUHK’s Centre of Innovation of Technology (CINTEC), focusing on environmental monitoring and Arduino programming. Designed to teach secondary school students about air pollution through hands-on experimentation with PM2.5 sensors.",
    link: "https://github.com/JackyZhiJie/CINTEC-Arduino-Air-Quality-Workshop",
    img: githubImg1,
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS, showcasing my technical, creative, and research work.",
    link: "https://github.com/JackyZhiJie/JackyZhiJie.github.io",
    img: githubImg,
  },
];

const photoProjects = [
  {
    name: "Oreofotolife Instagram",
    description: "A curated collection of my street photography, focusing on human stories and urban aesthetics.",
    link: "https://www.instagram.com/oreofotolife/",
    img: photoImg2,
  },
  {
    name: "Google Drive Photo Archive",
    description: "High-resolution photo sets and project albums, including event coverage and creative series.",
    link: "https://drive.google.com/drive/folders/1tlPZHAjTWp-6rwtHee0GCxnmD77EC71G?usp=sharing",
    img: photoImg,
  },
  {
    name: "Other Photo Projects",
    description: "Work in progress. Stay tuned for more updates! I have a lot of archives in photography but need to organize them.",
    link: "#",
    img: photoImg3,
  },
];

const Projects = () => (
  <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
    <div className="container mx-auto px-2 max-w-6xl">
      <h1 className="h2 font-bold text-center tracking-tight mb-0">Projects</h1>
      <div className="grid grid-cols-1 gap-10">
        {/* GitHub Projects */}
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            GitHub STEM Workshop Projects
          </h2>
          <div className="space-y-8">
            {githubProjects.map((proj) => (
              <div key={proj.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col md:flex-row items-center gap-5 hover:scale-105 transition">
                {/* <img src={githubImg1} alt={proj.name} className="w-32 h-32 object-cover rounded-xl border border-gray-100 shadow-sm mb-4 md:mb-0" onContextMenu={(e) => e.preventDefault()} /> */}
                <div>
                  <img src={proj.img} alt={proj.name} className="w-32 h-32 object-cover rounded-xl border border-gray-100 shadow-sm mb-4 md:mb-0" onContextMenu={(e) => e.preventDefault()} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{proj.name}</h3>
                  <p className="mb-2 text-gray-600">{proj.description}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block text-teal-600 hover:text-teal-800 font-medium underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Photo Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M4 7V6a2 2 0 012-2h2.586a1 1 0 00.707-.293l1.414-1.414A2 2 0 0112.828 2h2.344a2 2 0 011.414.586l1.414 1.414A1 1 0 0020.414 4H22a2 2 0 012 2v1M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M4 7l4 5a2 2 0 002.828 0l4-5M4 7l4 5a2 2 0 002.828 0l4-5" />
            </svg>
            Photo Projects
          </h2>
          <div className="space-y-8">
            {photoProjects.map((proj) => (
              <div key={proj.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col md:flex-row items-center gap-5 hover:scale-105 transition">
                <img src={proj.img} alt={proj.name} className="w-32 h-32 object-cover rounded-xl border border-gray-100 shadow-sm mb-4 md:mb-0" onContextMenu={(e) => e.preventDefault()} />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{proj.name}</h3>
                  <p className="mb-2 text-gray-600">{proj.description}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block text-teal-600 hover:text-teal-800 font-medium underline">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Projects;

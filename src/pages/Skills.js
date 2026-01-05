import React from "react";
import manImg from "../img/skills/man.JPG";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
// import icons
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobepremierepro, SiAdobelightroom, SiAdobeaudition, SiCplusplus, SiAdobephotoshop, SiArduino, SiGithub } from "react-icons/si";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import docker from "../img/icon/docker.png";
import n8n from "../img/icon/n8n.png";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "Python", level: 70, icon: <FaPython /> },
    { name: "CSS", level: 80, icon: <FaCss3Alt /> },
    { name: "C++", level: 60, icon: <SiCplusplus /> },
    { name: "JavaScript", level: 70, icon: <IoLogoJavascript /> },
    { name: "React", level: 70, icon: <RiReactjsLine /> },
    { name: "Premiere Pro", level: 85, icon: <SiAdobepremierepro /> },
    { name: "Lightroom", level: 90, icon: <SiAdobelightroom /> },
    { name: "Audition", level: 70, icon: <SiAdobeaudition /> },
    { name: "Photoshop", level: 50, icon: <SiAdobephotoshop /> },
    { name: "Figma", level: 50, icon: <IoLogoFigma /> },
    { name: "Microsoft Office", level: 80, icon: <TfiMicrosoftAlt /> },
    { name: "Arduino", level: 75, icon: <SiArduino /> },
    { name: "GitHub", level: 60, icon: <SiGithub /> },
    { name: "Docker", level: 40, icon: <img src={docker} alt="Docker Icon" className="w-5" /> },
    { name: "n8n", level: 40, icon: <img src={n8n} alt="n8n Icon" className="w-5" /> },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-2 max-w-6xl">
        <h1 className="h3 font-bold text-center tracking-tight mb-0">Skills</h1>
        <div className="grid grid-cols-1 gap-10">
          <div>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl px-2 flex flex-col md:flex-row items-center gap-1">
                {/* Image */}
                <div className="flex flex-col items-center">
                  <img src={manImg} alt="Skills Profile" loading="lazy" className="w-64 h-64 object-cover rounded-2xl border border-gray-100 shadow-sm mx-10 hover:scale-105 transition" onContextMenu={(e) => e.preventDefault()} />
                  <div className="text-center w-64">
                    {" "}
                    <p className="text-base text-gray-800 mt-6">
                      Currently learning <b>Ollama</b> and <b>n8n</b>
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-xl shadow p-4 m-4 hover:scale-105 transition">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <div className="text-base mr-3">{skill.icon}</div>
                          <div className="w-[20vw]">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-semibold">{skill.name}</span>
                              <span className="text-xs text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-gray-200 w-full rounded-full">
                              <div style={{ width: `${skill.level}%` }} className="h-full bg-teal-600 rounded-full transition-all duration-500"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

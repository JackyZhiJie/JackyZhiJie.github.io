import React from "react";
import manImg from "../img/skills/man.JPG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
//import icons
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobepremierepro, SiAdobelightroom, SiAdobeaudition, SiCplusplus, SiAdobephotoshop, SiArduino, SiGithub } from "react-icons/si";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TfiMicrosoftAlt } from "react-icons/tfi";

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
    { name: "Arduino", level: 90, icon: <SiArduino /> },
    { name: "GitHub", level: 60, icon: <SiGithub /> },

    // add more skills here
  ];
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-2 max-w-6xl ">
        <h1 className="h2 font-bold text-center tracking-tight">Skills</h1>
        <div className="grid grid-cols-1 gap-10 ">
          <div className="space-y-8 ">
            <div className=" rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col-reverse md:flex-row justify-center items-center gap-5 hover:scale-105 transition">
              <div className="flex-0.8 h-full flex mb-0">
                <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className=" rounded-2xl h-[50vh]" />
              </div>

              <div className="flex-1 m-1 h-[50vh]">
                <div className="bg-gray-50 rounded-xl p-2 grid grid-cols-2 gap-3 mb-[1vh] ">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-[3vw]">{skill.icon}</div>
                      <div className="">
                        <div className=" justify-between mb-2 ">
                          <span className="">{skill.name}</span>
                          {/* <span>{skill.level}%</span> */}
                        </div>
                        <div className="h-3 bg-gray-200 w-full rounded-full hover:scale-105 transition" style={{ width: "20vw" }}>
                          {" "}
                          <div style={{ width: `${skill.level}%` }} className="h-full bg-teal-600 rounded-full "></div>
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
    </motion.section>
  );
};

export default Skills;

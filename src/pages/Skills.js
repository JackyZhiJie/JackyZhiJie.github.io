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
      <div className="container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-x-6 items-center">
          {/* img */}
          <div className="flex-0.8 h-full flex justify-center mb-0">
            <div className="rounded-lg h-full m-1">
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className=" rounded-2xl h-[65vh]" />
            </div>
          </div>
          {/* text */}
          <motion.div className="lg:flex-1.2 lg:w-auto flex flex-col text-center">
            <p className="h2">Skills</p>
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

            {/* <p className="mb-3">I'm a computer engineering undergraduate with a minor in Journalism, based in Hong Kong. I have a passion for technology, writing, photography, and filmmaking.</p>
            <p className="">With a strong foundation in both technical knowledge and communication skills, I aim to bridge the gap between engineering and journalism through multimedia storytelling.</p>
            <div className="w-auto h-auto max-w-xs mx-auto ">
              <br />
              <Link to={"/portfolio"} className="btn rounded-lg">
                View my work
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

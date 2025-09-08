import React from "react";
import manImg from "../img/skills/man.JPG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
//import icons
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobepremierepro, SiAdobelightroom, SiAdobeaudition, SiCplusplus, SiAdobephotoshop } from "react-icons/si";
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

    // add more skills here
  ];
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="">
      <div className="container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div className="flex flex-col-reverse lg:flex-row h-full mt-[3vh] justify-center items-center gap-x-12 text-center lg:text-left">
          {/* img */}
          <div className="flex-1 h-full flex justify-center mb-0">
            <div className="rounded-lg h-full m-1">
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className=" rounded-lg h-[70vh]" />
            </div>
          </div>
          {/* text */}
          <motion.div initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="lg:flex-1 lg:w-auto z-10 flex flex-col justify-center items-center  ">
            <h1 className="h1">Skills</h1>
            <div className="grid grid-cols-2 gap-2 justify-center mt-[3vh] mb-[1vh] ">
              {skills.map((skill, index) => (
                <div key={index} className="flex mb-0">
                  <div className="w-[5vw]">{skill.icon}</div>
                  <div className="">
                    <div className=" justify-between mb-2">
                      <span className="">{skill.name}</span>
                      {/* <span>{skill.level}%</span> */}
                    </div>
                    <div className="h-3 bg-gray-200 w-full rounded-full" style={{ width: "15vw" }}>
                      {" "}
                      <div style={{ width: `${skill.level}%` }} className="h-full bg-green-500 rounded-full"></div>
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

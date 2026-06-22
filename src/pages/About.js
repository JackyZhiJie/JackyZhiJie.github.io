import React from "react";
import manImg from "../img/about/man.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { FaPython, FaLinux, FaLanguage, FaNetworkWired, FaCube, FaBootstrap, FaBriefcase, FaGraduationCap, FaTrophy, FaAward, FaDocker, FaHtml5, FaCss3, FaCameraRetro } from "react-icons/fa";
import { SiCplusplus, SiArduino, SiGithub, SiAdobelightroom, SiOpencv, SiJavascript, SiAdobepremierepro, SiAdobeaudition, SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";

const About = () => {
  const timelineData = [
    {
      period: "Coming Semester",
      role: "MPhil in Computer Science",
      org: "BiWell Lab, City University of Hong Kong (CityU)",
      desc: "Focusing research targets on Human-Computer Interaction (HCI) and enhancing individual's health and well-being.",
      type: "education",
    },
    {
      period: "Jul 2025 - Present",
      role: "Graduate Engineer",
      org: "MTR Corporation Limited (香港鐵路有限公司)",
      desc: 'Railway Operations and Engineering Trainee within the Scheme "A" HKIE structured curriculum.',
      type: "work",
    },
    {
      period: "Jul 2024 - Aug 2024",
      role: "Summer Intern — iAM Smart Team",
      org: "OGCIO / Digital Policy Office (DPO)",
      desc: "Composed promotional media vectors and optimised web portal configurations to enhance public utility visibility.",
      type: "work",
    },
    {
      period: "Jul 2023 - Sep 2023",
      role: "Summer Intern — Network & Infrastructure",
      org: "Electrical & Mechanical Services Dept. (EMSD)",
      desc: "Coordinated IT infrastructure virtualisation frameworks, registering 200+ network components using NetBox application.",
      type: "work",
    },
    {
      period: "Sep 2020 - Dec 2024",
      role: "B.Eng in Computer Engineering",
      org: "The Chinese University of Hong Kong (CUHK)",
      desc: "Graduated with a Major in Computer Engineering and minor in Journalism and Communication.",
      type: "education",
    },
  ];

  const awards = [
    {
      title: "IoT Data Hackathon Champion 2026",
      stream: "Champion of the Professional Stream, Best Low-Altitude Economy Innovation, Innovator of Secure by Design",
    },
    {
      title: "Professor Charles K. Kao Student Creativity Award 2025",
      stream: "Undergraduate 1st Runner-up Inidividual (Undergraduate Champion is Group)",
    },
    {
      title: "CUHK Outstanding Students Award 2024",
      stream: "Innovation and Invention",
    },
  ];

  const competenceCategories = [
    {
      title: "Programming & Infrastructure",
      icon: <FaNetworkWired className="text-teal-600 dark:text-teal-400 text-xl" />,
      skills: [
        { name: "Python Programming", icon: <FaPython /> },
        { name: "C++ Programming", icon: <SiCplusplus /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "NetBox Network Asset Management Tools", icon: <FaNetworkWired /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "GitHub Workflows", icon: <SiGithub /> },
      ],
    },
    {
      title: "Research & Prototypes",
      icon: <FaCube className="text-teal-600 dark:text-teal-400 text-xl" />,
      skills: [
        { name: "Arduino IoT", icon: <SiArduino /> },
        { name: "Figma", icon: <IoLogoFigma /> },
        { name: "Onshape CAD", icon: <FaCube /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "ReactJS", icon: <RiReactjsLine /> },
      ],
    },
    {
      title: "Multimedia & Graphics",
      icon: <FaCameraRetro className="text-teal-600 dark:text-teal-400 text-xl" />,
      skills: [
        { name: "Multimedia Production", icon: <FaCameraRetro /> },
        { name: "Lightroom", icon: <SiAdobelightroom /> },
        { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
        { name: "Audition", icon: <SiAdobeaudition /> },
      ],
    },
    {
      title: "Languages",
      icon: <FaLanguage className="text-teal-600 dark:text-teal-400 text-xl" />,
      skills: [
        { name: "Cantonese (Native)", icon: <FaLanguage /> },
        { name: "English (Proficient)", icon: <FaLanguage /> },
        { name: "Mandarin (Proficient)", icon: <FaLanguage /> },
      ],
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="py-2">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="h3 font-bold text-center tracking-tight mb-8">About Me</h1>

        {/* --- CONNECTING THE DOTS SECTION --- */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-[1.01] hover:shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 mb-12 duration-300 transition-all">
          {/* Profile Picture */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img src={manImg} alt="Jacky Profile" loading="lazy" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-teal-500/20 shadow-md hover:scale-[1.10] transition-transform duration-300" onContextMenu={(e) => e.preventDefault()} />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Jacky</h2>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">Graduate Engineer & HCI Researcher</p>
            </div>
          </div>

          {/* Bio text */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-400 flex items-center gap-2">Connecting the Dots</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-base md:text-lg">
              I am a <strong>Computer Science MPhil </strong> student in the at <strong>City University of Hong Kong (CityU)</strong>, supervised by{" "}
              <a className="text-teal-600 dark:text-teal-400 hover:underline" href="https://yuhanlolo.github.io/me/">
                Prof. Yuhan Luo
              </a>
              , and a <strong>Graduate Engineer</strong> at <strong>MTR Corporation Limited</strong> under the HKIE Scheme A Training.
            </p>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-base md:text-lg">
              My research interests lie in the field of <strong>Human-Computer Interaction (HCI)</strong>, where I explore the intersection of technology, built environments, education and human well-being.
            </p>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base md:text-lg">
              I hold a B.Eng. in Computer Engineering with a minor in Journalism and Communication from <strong>The Chinese University of Hong Kong (CUHK)</strong>. My diverse background allows me to approach problems from multiple perspectives, bridging the gap between industry and academia (hopefully).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-2">
          {/* --- PROFESSIONAL TIMELINE (Left 7 Columns) --- */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">Professional Timeline</h3>

            <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Icon Node */}
                  <span className="absolute -left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-teal-500 shadow-md group-hover:bg-teal-50 dark:group-hover:bg-teal-900/30 transition-colors duration-300">{item.type === "education" ? <FaGraduationCap className="text-teal-600 dark:text-teal-400 text-sm" /> : <FaBriefcase className="text-teal-600 dark:text-teal-400 text-sm" />}</span>

                  {/* Timeline Entry Card */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 dark:border-gray-850 shadow-sm hover:shadow-md dark:hover:border border-gray-100 hover:scale-[1.01] transition-all duration-200">
                    <span className="inline-block bg-teal-50 dark:bg-teal-200 text-teal-700 dark:text-teal-350 text-xs font-semibold px-2.5 py-1 rounded-md mb-2">{item.period}</span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">{item.role}</h4>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">{item.org}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- COMPETENCES & AWARDS (Right 5 Columns) --- */}
          <div className="lg:col-span-5 space-y-8">
            {/* HONOURS & AWARDS */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">Honours & Awards</h3>
              <div className="space-y-4">
                {awards.map((award, idx) => (
                  <div key={idx} className=" bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 flex gap-4 dark:border-gray-850 shadow-sm hover:shadow-md dark:hover:border border-gray-100 hover:scale-[1.01] transition-all duration-200">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400">{idx === 0 ? <FaTrophy className="text-lg" /> : <FaAward className="text-lg" />}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 leading-snug text-sm md:text-base">{award.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">{award.stream}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROFESSIONAL COMPETENCES */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">Professional Competences</h3>

              <div className="space-y-6">
                {competenceCategories.map((cat, catIdx) => (
                  <div key={catIdx} className=" bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 dark:border-gray-850 shadow-sm hover:shadow-md dark:hover:border border-gray-100 hover:scale-[1.01] transition-all duration-200">
                    <div className="flex items-center gap-2.5 mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                      {cat.icon}
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="flex items-center gap-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-teal-500 dark:hover:bg-teal-400 hover:border-teal-500/30 dark:hover:border-teal-500/30 hover:scale-105 transition-all duration-200">
                          <span className="text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 text-sm">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

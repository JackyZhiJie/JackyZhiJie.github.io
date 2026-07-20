import React from "react";
import { Award, Download, GraduationCap, Briefcase } from "lucide-react";
import { 
  FaNetworkWired, 
  FaPython, 
  FaHtml5, 
  FaCss3, 
  FaDocker, 
  FaCube, 
  FaBootstrap, 
  FaCameraRetro, 
  FaLanguage 
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiJavascript, 
  SiGithub, 
  SiArduino, 
  SiOpencv, 
  SiAdobelightroom, 
  SiAdobepremierepro, 
  SiAdobeaudition 
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";

interface AboutProps {
  onShowToast: (title: string, message: string, icon: string) => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onShowToast }) => {
  const competenceCategories = [
    {
      title: "Programming & Infrastructure",
      icon: <FaNetworkWired className="" />,
      accentColor: "text-bioLight-accentSage dark:text-bioDark-accentSage",
      hoverBorderColor: "hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage",
      hoverTextColor: "group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage",
      hoverBgColor: "hover:bg-bioLight-accentSage/5 dark:hover:bg-bioDark-accentSage/5",
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
      icon: <FaCube className="" />,
      accentColor: "text-bioLight-accentTerra dark:text-bioDark-accentTerra",
      hoverBorderColor: "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra",
      hoverTextColor: "group-hover:text-bioLight-accentTerra dark:group-hover:text-bioDark-accentTerra",
      hoverBgColor: "hover:bg-bioLight-accentTerra/5 dark:hover:bg-bioDark-accentTerra/5",
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
      icon: <FaCameraRetro className="" />,
      accentColor: "text-bioLight-accentSage dark:text-bioDark-accentSage",
      hoverBorderColor: "hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage",
      hoverTextColor: "group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage",
      hoverBgColor: "hover:bg-bioLight-accentSage/5 dark:hover:bg-bioDark-accentSage/5",
      skills: [
        { name: "Multimedia Production", icon: <FaCameraRetro /> },
        { name: "Lightroom", icon: <SiAdobelightroom /> },
        { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
        { name: "Audition", icon: <SiAdobeaudition /> },
      ],
    },
    {
      title: "Languages",
      icon: <FaLanguage className="" />,
      accentColor: "text-bioLight-accentTerra dark:text-bioDark-accentTerra",
      hoverBorderColor: "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra",
      hoverTextColor: "group-hover:text-bioLight-accentTerra dark:group-hover:text-bioDark-accentTerra",
      hoverBgColor: "hover:bg-bioLight-accentTerra/5 dark:hover:bg-bioDark-accentTerra/5",
      skills: [
        { name: "Cantonese (Native)", icon: <FaLanguage /> },
        { name: "English (Proficient)", icon: <FaLanguage /> },
        { name: "Mandarin (Proficient)", icon: <FaLanguage /> },
      ],
    },
  ];

  const timeline = [
    {
      label: "Coming Semester",
      title: "MPhil in Computer Science",
      organization: "BiWell Lab, City University of Hong Kong",
      description: "Focusing research targets on Human-Building Interaction (HBI) and smart environmental optimisation.",
      type: "current" as const,
      iconType: "education" as const,
    },
    {
      label: "Jul 2025 - Present",
      title: "Graduate Engineer",
      organization: "MTR Corporation Limited (香港鐵路有限公司)",
      description: 'Railway Operations and Engineering Trainee within the Scheme "A" HKIE structured curriculum.',
      type: "current" as const,
      iconType: "work" as const,
    },
    {
      label: "Jul 2024 - Aug 2024",
      title: "Summer Intern — iAM Smart Team",
      organization: "OGCIO / Digital Policy Office (DPO)",
      description: "Composed promotional media vectors and optimised web portal configurations to enhance public utility visibility.",
      type: "past" as const,
      iconType: "work" as const,
    },
    {
      label: "Oct 2023 - Jan 2024",
      title: "Part time Teacher — Chinese & Maths",
      organization: "HKWMA Chu Shek Lun Secondary School",
      description: "Instructed high school students in Chinese and Mathematics, utilising tailored teaching materials.",
      type: "past" as const,
      iconType: "work" as const,
    },
    {
      label: "Jul 2023 - Sep 2023",
      title: "Summer Intern — Network & Infrastructure",
      organization: "Electrical & Mechanical Services Dept. (EMSD)",
      description: "Coordinated IT infrastructure virtualization frameworks, registering 200+ network components under NetBox models.",
      type: "past" as const,
      iconType: "work" as const,
    },
    {
      label: "Sep 2020 - Dec 2024",
      title: "B.Eng in Computer Engineering",
      organization: "The Chinese University of Hong Kong (CUHK)",
      description: "Graduated with a Major in Computer Engineering and minor in Journalism and Communication.",
      type: "past" as const,
      iconType: "education" as const,
    },
  ];

  const awards = [
    {
      title: "IoT Data Hackathon Champion 2026",
      description: "Champion of the Professional Stream, Best Low-Altitude Economy Innovation Award, Innovator of Secure by Design Award",
    },
    {
      title: "Professor Charles K. Kao Student Creativity Award 2025",
      description: "1st Runner-up",
    },
    {
      title: "CUHK Outstanding Students Award 2024",
      description: "Focus in Innovation and Invention",
    },
  ];

  const downloadCV = () => {
    onShowToast("Compiling CV", "Organizing full B.Eng & MPhil portfolio assets...", "download");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "data:text/plain,Jacky Chen - Professional Portfolio";
      link.download = "Jacky_Chen_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast("Download Initialized", "CV successfully generated.", "check");
    }, 1200);
  };

  return (
    <section className="space-y-12 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 1st Row: Bio */}
        <div className="lg:col-span-12 space-y-8">
          <div className="space-y-4">
            <h2 className="serif-title text-3xl font-normal text-gray-900 dark:text-white">Connecting the Dots</h2>
            <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed">
              I am a <strong>Computer Science MPhil</strong> student at <strong>City University of Hong Kong (CityU)</strong>, supervised by{" "}
              <a className="text-bioLight-accentSage dark:text-bioDark-accentSage hover:text-bioLight-accentTerra dark:hover:text-bioDark-accentTerra font-bold transition-colors duration-300 hover:underline" href="https://yuhanlolo.github.io/me/">
                Prof. Yuhan Luo
              </a>
              , and a <strong>Graduate Engineer</strong> at <strong>MTR Corporation Limited</strong> under the HKIE Scheme A Training.
            </p>
              <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed">
              My research interests lie in the field of <strong>Human-Computer Interaction (HCI)</strong>, where I explore the intersection of technology, built environments, education and human well-being.
            </p>
            <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed">
            I hold a <strong>B.Eng.</strong> in <strong>Computer Engineering</strong> with a minor in <strong>Journalism and Communication</strong> from <strong>The Chinese University of Hong Kong (CUHK)</strong>. My diverse background allows me to approach problems from multiple perspectives, bridging the gap between industry and academia (hopefully).
            </p>
              
              {/* Throughout my experience with MTR's massive signaling systems, the Digital Policy Office's promotional vectors, and EMSD's network assets mapping, my focus has remained on communication: simplifying complex structures to optimize physical environment wellness.
               */}
          </div>
        </div>

        {/* Left Column: Timeline */}
        <div className="lg:col-span-6 space-y-6">
        {/* Professional Timeline */}
          <h3 className="serif-title text-xl font-normal text-gray-900 dark:text-white">Professional Timeline</h3>
          <div className="relative border-l-2 border-bioLight-border dark:border-bioDark-border/600 pl-8 space-y-8 mt-4">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative group pl-1.5 transition-all duration-300 hover:translate-x-5 cursor-default">
                <div className={`absolute -left-12 top-[2px] w-8 h-8 rounded-full border-2 bg-bioLight-bg dark:bg-bioDark-bg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm
                  ${event.type === "current" 
                    ? "border-bioLight-accentTerra dark:border-bioDark-accentTerra text-bioLight-accentTerra dark:text-bioDark-accentTerra" 
                    : "border-gray-300 dark:border-bioDark-border text-bioLight-textMuted dark:text-bioDark-textMuted group-hover:border-bioLight-accentSage dark:group-hover:border-bioDark-accentSage group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage"
                  }
                `}>
                  {event.iconType === "education" ? (
                    <GraduationCap className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Briefcase className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  )}
                </div>
                <span className={`text-[10px] font-bold ${event.type === "current" ? "text-bioLight-accentTerra dark:text-bioDark-accentTerra" : "text-bioLight-textMuted dark:text-bioDark-textMuted"}`}>{event.label}</span>
                <h4 className={`serif-title text-base font-semibold text-gray-900 dark:text-white mt-0.5 transition-colors duration-300 ${event.type === "current" ? "group-hover:text-bioLight-accentTerra dark:group-hover:text-bioDark-accentTerra" : "group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage"}`}>{event.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">{event.organization}</p>
                <p className="text-[11px] text-bioLight-textMuted dark:text-bioDark-textMuted mt-0.5 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
          {/* CV Download */}
          {/* <button onClick={downloadCV} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-bioLight-accentSage text-white dark:bg-bioDark-accentSage dark:text-bioDark-bg font-bold text-xs shadow-md hover:scale-[1.01] transition-transform">
            <Download className="w-4 h-4" />
            Download Full CV Documents (PDF)
          </button> */}
        </div>
        <div className="lg:col-span-6 space-y-6">
          {/* Awards */}
            <h3 className="serif-title text-xl font-normal text-gray-900 dark:text-white">Honours & Awards</h3>
            <ul className="text-sm space-y-2 text-bioLight-textMuted dark:text-bioDark-textMuted">
              {awards.map((award, idx) => (
                <li key={idx} className="group flex items-start gap-3 p-2 -mx-2 rounded-xl border border-transparent hover:border-bioLight-border dark:hover:border-bioDark-border/40 hover:bg-bioLight-card dark:hover:bg-bioDark-card transition-all duration-300 hover:translate-x-1 cursor-default">
                  <Award className="w-4 h-4 text-bioLight-accentTerra dark:text-bioDark-accentTerra flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
                  <span className="transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    <strong className="text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-bioLight-accentTerra dark:group-hover:text-bioDark-accentTerra">{award.title}</strong> — {award.description}
                  </span>
                </li>
              ))}
            </ul>
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="serif-title text-xl font-normal text-gray-900 dark:text-white">Professional Competences</h3>
            {competenceCategories.map((category) => (
              <div key={category.title} className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className={`text-base ${category.accentColor} flex items-center`}>{category.icon}</span>
                  <span className={`text-[10px] font-bold ${category.accentColor} tracking-widest uppercase`}>{category.title}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-bioLight-card dark:bg-bioDark-card border border-bioLight-border dark:border-bioDark-border/60 text-gray-600 dark:text-gray-400 flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm hover:text-gray-900 dark:hover:text-white ${category.hoverBorderColor} ${category.hoverBgColor} cursor-default group`}>
                      <span className={`text-gray-500 dark:text-gray-400 text-sm flex items-center flex-shrink-0 transition-all duration-300 group-hover:scale-115 ${category.hoverTextColor}`}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import { ArrowRight, Linkedin, Github, Train, Brain, Camera } from "lucide-react";
// import manimg from "../../img/home/man1.jpg";
import manimg from "../../img/contact/man.jpg";

interface GatewayCardProps {
  icon: React.ReactNode;
  accent: "sage" | "terra";
  categoryLabel: string;
  title: string;
  description: string;
  onClick: () => void;
}

const accentStyles = {
  sage: {
    bg: "bg-bioLight-accentSage/10 dark:bg-bioDark-accentSage/10",
    text: "text-bioLight-accentSage dark:text-bioDark-accentSage",
    hoverBorder: "hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage",
  },
  terra: {
    bg: "bg-bioLight-accentTerra/10 dark:bg-bioDark-accentTerra/10",
    text: "text-bioLight-accentTerra dark:text-bioDark-accentTerra",
    hoverBorder: "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra",
  },
};

const GatewayCard: React.FC<GatewayCardProps> = ({ icon, accent, categoryLabel, title, description, onClick }) => {
  const styles = accentStyles[accent];
  return (
    <div onClick={onClick} className={`group relative bg-bioLight-card dark:bg-bioDark-card rounded-2xl border border-bioLight-border dark:border-bioDark-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${styles.hoverBorder}`}>
      {/* Mobile Layout (hidden on md/lg) */}
      <div className="flex flex-row items-stretch gap-4 p-5 md:hidden">
        {/* Left: Large Icon stretching to height of content */}
        <div className={`w-28 h-28 rounded-xl ${styles.bg} flex items-center justify-center ${styles.text} group-hover:scale-105 transition-transform [&>svg]:w-20 [&>svg]:h-20 shrink-0 self-center`}>
          {icon}
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-between flex-grow py-1">
          <div>
            <span className={`block text-[11px] font-bold ${styles.text} tracking-wider uppercase mb-1`}>{categoryLabel}</span>
            <h3 className="serif-title text-lg font-medium text-gray-900 dark:text-white mb-1.5">{title}</h3>
            <p className="text-[11px] text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed mb-3">{description}</p>
          </div>
          <div className={`flex items-center gap-1.5 text-[11px] font-semibold ${styles.text}`}>
            Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout (visible on md/lg) */}
      <div className="hidden md:flex md:flex-col p-6 h-full justify-between">
        <div>
          {/* Icon and Category Label Row */}
          <div className="flex items-center gap-4 mb-5">
            <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center ${styles.text} group-hover:scale-105 transition-transform [&>svg]:w-6 [&>svg]:h-6`}>
              {icon}
            </div>
            <span className={`text-[11px] font-bold ${styles.text} tracking-wider uppercase`}>{categoryLabel}</span>
          </div>
          
          <h3 className="serif-title text-xl font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed mb-4">{description}</p>
        </div>
        <div className={`flex items-center gap-1.5 text-xs font-semibold ${styles.text} mt-auto`}>
          Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  onNavigateToTab: (tab: "work-research" | "creative-log") => void;
  onShowToast: (title: string, message: string, icon: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToTab, onShowToast }) => {
  const [tempValue, setTempValue] = useState(3200);
  const [transValue, setTransValue] = useState(65);
  const [ambientState, setAmbientState] = useState("cozy");

  useEffect(() => {
    updateAmbientSimulation();
  }, [tempValue, transValue]);

  const updateAmbientSimulation = () => {
    if (tempValue < 3000) {
      setAmbientState("warm");
    } else if (tempValue >= 3000 && tempValue < 4500) {
      setAmbientState("cozy");
    } else {
      setAmbientState("daylight");
    }
  };

  const simulateCVDownload = () => {
    onShowToast("Compiling CV", "Organizing full B.Eng & MPhil portfolio assets...", "download");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "data:text/plain,Jacky Chen - Portfolio Resume";
      link.download = "Jacky_Chen_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast("Download Initialized", "CV successfully generated.", "check");
    }, 1200);
  };

  return (
    <section className="space-y-12 sm:space-y-16 animate-fade-in">
      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Profile Image */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center">
          <div className="relative group">
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-bioDark-accentSage via-transparent to-bioDark-accentTerra opacity-35 blur-sm scale-102 group-hover:scale-105 transition-transform duration-500"></div> */}
            <div className="relative bg-bioLight-card dark:bg-bioDark-card p-2 rounded-2xl border border-bioLight-border dark:border-bioDark-border/60">
              <div className="w-64 h-80 rounded-xl overflow-hidden bg-gradient-to-b from-[#86A396]/30 to-[#26332E]/80 flex items-end justify-center relative">
                {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10 bg-gradient-to-t from-black/85 via-black/25 to-transparent">
                  <h3 className="serif-title font-medium text-lg leading-tight"></h3>
                </div> */}
                <img src={manimg} alt="Jacky Chen" loading="lazy" onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2 ">
                <p className="text-center text-sm sm:text-md text-bioLight-textMuted dark:text-bioDark-textMuted font-light mx-auto lg:mx-0 leading-relaxed">
                  Graduate Engineer & MPhil Student 
                  <br/>
                  <strong className="font-medium text-gray-800 dark:text-gray-200">Hong Kong</strong></p>
                {/* <a href="https://www.linkedin.com/in/jackyxczj" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 rounded-xl text-sm font-semibold border border-bioLight-border dark:border-bioDark-border/60 hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage hover:text-bioLight-accentSage dark:hover:text-bioDark-accentSage hover:bg-bioLight-accentSage/5 dark:hover:bg-bioDark-accentSage/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-sm">
                  <Linkedin className="w-6 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/JackyZhiJie" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 rounded-xl text-sm font-semibold border border-bioLight-border dark:border-bioDark-border/60 hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra hover:text-bioLight-accentTerra dark:hover:text-bioDark-accentTerra hover:bg-bioLight-accentTerra/5 dark:hover:bg-bioDark-accentTerra/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-sm">
                  <Github className="w-6 h-4" />
                  GitHub
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="md:col-span-7 lg:col-span-8 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bioLight-card dark:bg-bioDark-accentMoss/20 border border-bioLight-border dark:border-bioDark-border/40 text-xs font-semibold text-bioLight-accentSage dark:text-bioDark-accentSage tracking-wide">
            <span className="w-2 h-2 rounded-full bg-bioDark-accentSage animate-pulse"></span>
            Connecting Smart Infrastructure with Human Well-being
          </div>

          <h1 className="serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 dark:text-white leading-tight">
            Hi, I am <span className="italic font-medium text-bioLight-accentSage dark:text-bioDark-accentSage">Jacky</span>
          </h1>
          <div className="text-base sm:text-md text-bioLight-textMuted dark:text-bioDark-textMuted font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          <p className="mb-2">
            I am currently working as a <strong className="font-medium text-gray-800 dark:text-gray-200">Graduate Engineer at MTR</strong> , while pursing an <strong className="font-medium text-gray-800 dark:text-gray-200">MPhil in Computer Science at CityU</strong>, supervised by {""}
              <a className="text-bioLight-accentSage dark:text-bioDark-accentSage hover:text-bioLight-accentTerra dark:hover:text-bioDark-accentTerra font-bold transition-colors duration-300 hover:underline" href="https://yuhanlolo.github.io/me/">
              Prof. Yuhan Luo
              </a>.
            </p>
            <p className="mb-2">
              My research interests lie in <strong className="font-medium text-gray-800 dark:text-gray-200">Human-Computer Interaction (HCI)</strong>, exploring the intersection of technology, public space, education and human well-being. 
            </p>
            <p className="mb-2">
              Before embarking on my MPhil, I received a <strong className="font-medium text-gray-800 dark:text-gray-200">BEng in Computer Engineering</strong>, with a <strong className="font-medium text-gray-800 dark:text-gray-200">minor in Journalism and Communication at CUHK</strong>.
            </p>
          </div>

        </div>
      </div>

      {/* Gateway Cards */}
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="serif-title text-2xl font-normal text-gray-900 dark:text-white">Three Pillars of Action</h2>
          <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted mt-1">Explore my background across physical electronic engineering, human-computer interaction research, and creative storytelling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GatewayCard icon={<Train className="w-6 h-6" />} accent="sage" categoryLabel="Engineering & Infrastructure" title="Tech Projects" description="A playground where I break down technical systems and build practical solutions. It’s a hub for my automation tools, electronics projects, and hands-on engineering experiments." onClick={() => onNavigateToTab("work-research")} />
          <GatewayCard icon={<Brain className="w-6 h-6" />} accent="terra" categoryLabel="Human Studies" title="HCI & Well-being" description="Exploring how we interact with tech in the real world. My research looks into multi-sensory designs, smart environments, and tools that connect the physical and digital world to enhance human well-being." onClick={() => onNavigateToTab("work-research")} />
          <GatewayCard icon={<Camera className="w-6 h-6" />} accent="sage" categoryLabel="Multimedia & Prose" title="Creative Log" description="A personal space for my thoughts and creative experiments. This is where I share casual writing, photography, and everyday musings on life and tech without the rigid lines of engineering." onClick={() => onNavigateToTab("creative-log")} />
        </div>
      </div>            

      {/* Environmental Facade Simulator */}
      {/* <div className="bg-bioLight-card dark:bg-bioDark-card rounded-2xl border border-bioLight-border dark:border-bioDark-border/60 p-6 md:p-8"> */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"> */}
          {/* <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-bioLight-accentSage dark:text-bioDark-accentSage tracking-widest uppercase">Human-Building Interaction (HBI) Sandbox</span>
            <h3 className="serif-title text-2xl font-normal text-gray-900 dark:text-white">Smart Environmental Facade</h3>
            <p className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed">This panel highlights real-world Human-Building Interaction (HBI) objectives. Tune the sliders to adjust structural circadian temperature and facade transmission values, observing the corresponding bio-behavior change.</p>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <span>Circadian Temperature Control (K)</span>
                  <span className="font-semibold text-bioLight-accentTerra dark:text-bioDark-accentTerra">{tempValue} K</span>
                </div>
                <input type="range" min="2000" max="6500" value={tempValue} onChange={(e) => setTempValue(Number(e.target.value))} className="w-full accent-bioLight-accentTerra dark:accent-bioDark-accentTerra" />
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <span>Facade Light Transmission (%)</span>
                  <span className="font-semibold text-bioLight-accentSage dark:text-bioDark-accentSage">{transValue}%</span>
                </div>
                <input type="range" min="10" max="100" value={transValue} onChange={(e) => setTransValue(Number(e.target.value))} className="w-full accent-bioLight-accentSage dark:accent-bioDark-accentSage" />
              </div>
            </div>
          </div> */}

          {/* Canvas Simulator */}
          {/* <div className="lg:col-span-7 flex flex-col items-center w-full">
            <div
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-bioLight-border dark:border-bioDark-border flex items-center justify-center bg-[#151a1a] transition-all"
              style={{
                background: ambientState === "warm" ? "radial-gradient(circle, rgba(194, 123, 99, 0.3) 0%, rgba(17, 20, 20, 1) 100%)" : ambientState === "cozy" ? "radial-gradient(circle, rgba(134, 163, 150, 0.3) 0%, rgba(17, 20, 20, 1) 100%)" : "radial-gradient(circle, rgba(98, 142, 171, 0.3) 0%, rgba(17, 20, 20, 1) 100%)",
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="facade-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-bioDark-border" />
                    <circle cx="20" cy="20" r={3.5 + (transValue / 100) * 11} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bioDark-accentSage" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#facade-grid)" />
              </svg>

              <div className="text-center z-10 px-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 border border-white/10 text-[11px] font-medium text-white mb-2">{ambientState === "warm" ? "Restoration Cycle Active" : ambientState === "cozy" ? "Cozy Architectural Aura" : "High Focus Daylight Cycle"}</div>
                <h4 className="serif-title text-2xl font-light text-white shadow-sm">{ambientState === "warm" ? "Restorative Circadian Amber" : ambientState === "cozy" ? "Calming Workspace Sage" : "Dawn Stimulation Spectrum"}</h4>
                <p className="text-[11px] text-gray-300 mt-1 max-w-sm">{ambientState === "warm" ? "Maximizing organic melatonin support to prepare building occupants for natural evening rest." : ambientState === "cozy" ? "Deploying balanced bio-ambient levels to diminish cognitive anxiety and boost creative flow." : "Triggering high visual cognition cues matching early morning solar patterns."}</p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

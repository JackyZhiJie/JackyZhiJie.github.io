import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Link2, Play, Award, Trophy, Shield, Cpu, Sparkles } from "lucide-react";

// Image Imports matching projects.ts
import img2 from "../../img/projects/img2.jpg";
import img4 from "../../img/projects/img4.jpg";
import img5 from "../../img/projects/img5.jpg";
import iotProject1Img from "../../img/iot/project2.jpg";
import chinewriting01 from "../../img/write_right/algo.jpg";

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageCaption: string;
  bullets: {
    text: string;
    link?: string;
    isExternal?: boolean;
    iconType?: "link" | "video" | "trophy" | "award" | "shield" | "cpu";
  }[];
  footerLinks: {
    label: string;
    url: string;
  }[];
  summary: string;
}

export const AchievementsSection: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      id: "handwriting",
      title: "Award-winning Handwriting Analysis Individual Project",
      description:
        "Developed a web-based system to improve Chinese handwriting quality through font analysis, educational feedback, and game-based learning. This individual project covers algorithm development, interface design, and user testing.",
      images: [chinewriting01, img2, img4],
      imageCaption: "Innovative Hough Algorithm",
      bullets: [
        {
          text: "1st Runner-up, Professor Charles K. Kao Student Creativity Awards 2025",
          link: "https://github.com/JackyZhiJie/chinese-handwriting",
          iconType: "link",
        },
        {
          text: "CUHK Outstanding Student Award for Innovation and Invention 2024",
          link: "https://github.com/JackyZhiJie/chinese-handwriting",
          iconType: "link",
        },
        {
          text: "Publication at the 13th IEEE International Conference on Engineering Education 2024 (First Author)",
          link: "https://doi.org/10.1109/ICEED62316.2024.1092380",
          iconType: "link",
        },
        {
          text: "Project Demo Video",
          link: "https://www.youtube.com/watch?v=demo",
          iconType: "video",
        },
      ],
      footerLinks: [
        { label: "Research Paper PDF", url: "https://github.com/JackyZhiJie/chinese-handwriting/raw/main/paper.pdf" },
        { label: "IEEE Publication (DOI)", url: "https://doi.org/10.1109/ICEED62316.2024.1092380" },
        { label: "Presentation Slides", url: "https://github.com/JackyZhiJie/chinese-handwriting/raw/main/slides.pdf" },
      ],
      summary:
        "This project demonstrates the integration of technical innovation and educational impact, earning recognition in competitions, university awards, and international publication.",
    },
    {
      id: "hackathon",
      title: "Champion of the Professional Stream - IoT Data Hackathon 2026",
      description:
        "Led team Keep Data Moving to victory by developing an innovative IoT solution addressing UAVs, data automation, and network security in the low-altitude economy. As team lead, pitched the winning prototype on stage and spearheaded the integration of complex technical systems with practical, data-driven insights.",
      images: [iotProject1Img, img5],
      imageCaption: "IoT Data Hackathon Project",
      bullets: [
        {
          text: "Champion of the Professional Stream",
          iconType: "trophy",
        },
        {
          text: "Best Low-Altitude Economy Innovation Award (presented by HKT)",
          iconType: "cpu",
        },
        {
          text: "Innovator of Secure by Design Award (presented by Check Point)",
          iconType: "shield",
        },
      ],
      footerLinks: [
        { label: "Solution Casebook", url: "https://www.gs1hk.org/sites/default/files/2026-06/IOT_Data_Hackathon_2026_20260529_V2.pdf" },
        { label: "Yahoo News", url: "https://finance.yahoo.com/sectors/technology/articles/iot-data-hackathon-2026-winners-091300455.html" },
        { label: "經濟日報 報導", url: "https://money.udn.com/money/story/123828/9445880" },
        { label: "My LinkedIn Post", url: "https://www.linkedin.com/posts/jackyxczj_iothackathon2026-mtr-keepdatamoving-activity-7451113204476272640-_h5S" },
      ],
      summary:
        "This victory showcases technical excellence in building robust, data-driven solutions for the emerging low-altitude economy, combined with strong team leadership and the ability to translate complex ideas into winning, practical solutions.",
    },
  ];

  // Individual slider state hooks
  const [sliderIndices, setSliderIndices] = useState<Record<string, number>>({
    handwriting: 0,
    hackathon: 0,
  });

  const handlePrevSlide = (id: string, length: number) => {
    setSliderIndices((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + length) % length,
    }));
  };

  const handleNextSlide = (id: string, length: number) => {
    setSliderIndices((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % length,
    }));
  };

  return (
    <section className="space-y-10 animate-fade-in">
      <div className="border-b border-bioLight-border dark:border-bioDark-border/50 pb-6">
        <h2 className="serif-title text-3xl font-normal text-gray-900 dark:text-white flex items-center gap-2">
          Awards & Achievements <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
        </h2>
        <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted mt-1">
          Earning recognition at local and international levels for technical innovation, public presentation, and academic publication.
        </p>
      </div>

      <div className="space-y-12">
        {achievements.map((item) => {
          const currentIndex = sliderIndices[item.id] || 0;
          const imageList = item.images;

          return (
            <div
              key={item.id}
              className="bg-bioLight-card dark:bg-[#181D1D] rounded-2xl border border-bioLight-border dark:border-[#283030] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Left Column: Image Slider */}
              <div className="lg:w-1/3 flex flex-col items-center">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-bioLight-border/40 dark:border-bioDark-border/30">
                  <img
                    src={imageList[currentIndex]}
                    alt={`${item.title} slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {imageList.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrevSlide(item.id, imageList.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/95 hover:scale-105 transition-transform"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleNextSlide(item.id, imageList.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/95 hover:scale-105 transition-transform"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
                <span className="text-[11px] text-bioLight-textMuted dark:text-bioDark-textMuted mt-3 font-medium text-center italic tracking-wide">
                  {item.imageCaption}
                </span>
              </div>

              {/* Right Column: Title, Description, Bullet Details, Footer Links */}
              <div className="flex-grow space-y-4">
                <h3 className="serif-title text-xl font-semibold text-[#4A7261] dark:text-[#86A396]">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Bullet Points Dark Box */}
                <div className="bg-[#EBE5DA]/55 dark:bg-[#111414]/90 border border-bioLight-border/50 dark:border-[#283030]/50 p-4 rounded-xl space-y-3">
                  {item.bullets.map((bullet, idx) => {
                    return (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 dark:text-gray-200">
                        <span className="mt-0.5 flex-shrink-0">
                          {bullet.iconType === "trophy" && <Trophy className="w-4 h-4 text-amber-500" />}
                          {bullet.iconType === "award" && <Award className="w-4 h-4 text-amber-400" />}
                          {bullet.iconType === "shield" && <Shield className="w-4 h-4 text-blue-400" />}
                          {bullet.iconType === "cpu" && <Cpu className="w-4 h-4 text-emerald-400" />}
                          {bullet.iconType === "link" && <Link2 className="w-4 h-4 text-bioLight-accentSage dark:text-bioDark-accentSage" />}
                          {bullet.iconType === "video" && <Play className="w-4 h-4 text-red-500 fill-red-500/20" />}
                        </span>
                        
                        {bullet.link ? (
                          <a
                            href={bullet.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1 text-bioLight-accentSage dark:text-[#86A396] font-semibold"
                          >
                            <span>{bullet.text}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        ) : (
                          <span className="font-medium">{bullet.text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Footer Links Row */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-bioLight-border/30 dark:border-bioDark-border/10">
                  {item.footerLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A7261] dark:text-[#86A396] hover:underline"
                    >
                      <Link2 className="w-3.5 h-3.5" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>

                {/* Summary Statement */}
                <p className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted italic pt-2 border-t border-bioLight-border/20 dark:border-bioDark-border/5">
                  {item.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

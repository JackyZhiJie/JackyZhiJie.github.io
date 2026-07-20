import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Link2, Play, Award, Trophy, Shield, Cpu, X, FileText, BookOpen, Globe, Presentation } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGoogleDrive, FaGithub } from "react-icons/fa";
import type { Project } from "@types";

interface AchievementCardProps {
  project: Project;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ project }) => {
  const imageList = project.images && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % imageList.length);
  };

  const hoverColor = "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra hover:text-bioLight-accentTerra dark:hover:text-bioDark-accentTerra";

  const btnHoverStyles = "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra hover:text-bioLight-accentTerra dark:hover:text-bioDark-accentTerra";

  const getIconComponent = (bullet: { text: string; iconType?: string }) => {
    const text = bullet.text.toLowerCase();
    const type = bullet.iconType || "";

    if (type === "trophy" || text.includes("champion") || text.includes("runner-up")) {
      return <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
    }
    if (type === "cpu" || text.includes("innovation") || text.includes("invention") || text.includes("low-altitude") || text.includes("stem")) {
      return <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
    if (type === "shield" || text.includes("secure") || text.includes("design")) {
      return <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
    if (type === "video" || text.includes("video") || text.includes("presentation")) {
      return <Play className="w-4 h-4 text-red-500 fill-red-500/10" />;
    }
    if (type === "award" || text.includes("publication") || text.includes("ieee") || text.includes("conference") || text.includes("award")) {
      return <Award className="w-4 h-4 text-amber-600 dark:text-amber-500" />;
    }
    return <Link2 className="w-4 h-4 text-bioLight-accentTerra dark:text-bioDark-accentSage" />;
  };

  return (
    <>
      <div className="col-span-full group bg-bioLight-card dark:bg-[#181D1D] rounded-2xl border border-bioLight-border dark:border-[#283030] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 transition-all duration-400 hover:shadow-lg hover:-translate-y-1 hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra">
        {/* Left Column: Image Slider */}
        <div className="lg:w-1/3 flex flex-col items-center flex-shrink-0">
          <div 
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-bioLight-border/40 dark:border-bioDark-border/30 cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={imageList[currentIdx]}
              alt={`${project.name} slide ${currentIdx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />

            {imageList.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/95 hover:scale-105 transition-transform z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/95 hover:scale-105 transition-transform z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indicator Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md backdrop-blur-md bg-black/60 text-[9px] font-bold text-white z-10">
                  {currentIdx + 1} / {imageList.length}
                </div>
              </>
            )}
          </div>
          <span className="text-[11px] text-bioLight-textMuted dark:text-bioDark-textMuted mt-3 font-medium text-center italic tracking-wide">
            {project.imageCaptions && project.imageCaptions[currentIdx]
              ? project.imageCaptions[currentIdx]
              : project.imageCaption || "Project Preview"}
          </span>
        </div>

        {/* Right Column: Title, Description, Bullet Details, Footer Links */}
        <div className="flex-grow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 
              className={`serif-title text-xl sm:text-2xl font-medium text-gray-900 dark:text-white transition-colors duration-300 ${hoverColor}`}
              dangerouslySetInnerHTML={{ __html: project.name }}
            />
            
            <p 
              className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: project.descript }}
            />

            {/* Bullet Points Dark Box */}
            {project.bullets && project.bullets.length > 0 && (
              <div className="bg-[#EBE5DA]/55 dark:bg-[#111414]/90 border border-bioLight-border/50 dark:border-[#283030]/50 p-4 rounded-xl space-y-3">
                {project.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-bioLight-textMuted dark:text-bioDark-textMuted">
                    <span className="mt-0.5 flex-shrink-0">
                      {getIconComponent(bullet)}
                    </span>
                    
                    {bullet.link ? (
                      <a
                        href={bullet.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline inline-flex items-center gap-1 text-bioLight-textMuted dark:text-bioDark-textMuted font-semibold text-left"
                      >
                        <span>{bullet.text}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    ) : (
                      <span className="font-medium text-left">{bullet.text}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            {/* Action Links Row (Matches ProjectCard exactly) */}
            {(project.link || (project.links && project.links.length > 0)) && (
              <div className="flex flex-wrap gap-2 pt-1 w-full border-t border-bioLight-border/30 dark:border-bioDark-border/10 pt-4">
                {/* GitHub Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-grow flex-shrink-0 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-bioLight-border dark:border-bioDark-border hover:bg-bioLight-card dark:hover:bg-bioDark-card ${btnHoverStyles} transition-all duration-300 text-xs font-semibold text-bioLight-textMuted dark:text-bioDark-textMuted min-w-[80px]`}
                  >
                    <FaGithub className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>GitHub</span>
                  </a>
                )}

                {/* Other Links */}
                {project.links && project.links.map((link) => {
                  const lower = link.label.toLowerCase();
                  let LinkIcon: React.ComponentType<any> = ExternalLink;
                  let useReactIcon = false;
                  let ReactIconComponent: React.ComponentType<any> = FaGithub;

                  if (lower.includes("linkedin")) {
                    useReactIcon = true;
                    ReactIconComponent = FaLinkedinIn;
                  } else if (lower.includes("instagram")) {
                    useReactIcon = true;
                    ReactIconComponent = FaInstagram;
                  } else if (lower.includes("drive.google") || lower.includes("google drive") ) {
                    useReactIcon = true;
                    ReactIconComponent = FaGoogleDrive;
                  } else if (lower.includes("github")) {
                    useReactIcon = true;
                    ReactIconComponent = FaGithub;
                  } else if (lower.includes("pdf")|| lower.includes("casebook")) {
                    LinkIcon = FileText;
                  } else if (lower.includes("arxiv")) {
                    LinkIcon = BookOpen;
                  } else if (lower.includes("doi")) {
                    LinkIcon = Globe;
                  } else if (lower.includes("video")) {
                    LinkIcon = Play;
                  } else if (lower.includes("slide")) {
                    LinkIcon = Presentation;
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-grow flex-shrink-0 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-bioLight-border dark:border-bioDark-border hover:bg-bioLight-card dark:hover:bg-bioDark-card ${btnHoverStyles} transition-all duration-300 text-xs font-semibold text-bioLight-textMuted dark:text-bioDark-textMuted min-w-[80px]`}
                    >
                      {useReactIcon ? (
                        <ReactIconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                      ) : (
                        <LinkIcon className="w-3.5 h-3.5 flex-shrink-0" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            )}

            {/* Summary Statement */}
            {project.summary && (
              <p className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted italic pt-2 border-t border-bioLight-border/20 dark:border-bioDark-border/5">
                {project.summary}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Pop-up Modal (Matches ProjectCard exactly) */}
      {lightboxOpen && imageList.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 p-2.5 rounded-full bg-black/40 border border-white/10 hover:border-white/20 transition-all z-[110]"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Lightbox Slideshow Controls */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-black/40 border border-white/10 hover:border-white/20 transition-all z-[110]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx((prev) => (prev + 1) % imageList.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-black/40 border border-white/10 hover:border-white/20 transition-all z-[110]"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center z-[105]" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageList[currentIdx]}
              alt={`${project.name} preview ${currentIdx + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl select-none shadow-2xl border border-white/5"
              loading="lazy"
              onContextMenu={(e) => e.preventDefault()}
            />
            
            {/* Caption and Slides Indicator */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 text-center">
              {(project.imageCaptions && project.imageCaptions[currentIdx]) ? (
                <span className="text-white/90 text-xs font-medium px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/5">
                  {project.imageCaptions[currentIdx]}
                </span>
              ) : project.imageCaption ? (
                <span className="text-white/90 text-xs font-medium px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/5">
                  {project.imageCaption}
                </span>
              ) : null}

              {imageList.length > 1 && (
                <span className="text-white/80 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 border border-white/5">
                  {currentIdx + 1} / {imageList.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

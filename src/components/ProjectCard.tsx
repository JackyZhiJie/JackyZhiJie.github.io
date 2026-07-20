import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGoogleDrive, FaGithub } from "react-icons/fa";
import type { Project } from "@types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const iconComponents = Icons as unknown as Record<string, React.ComponentType<any>>;
  
  const toPascalCase = (str: string) => {
    if (!str) return "";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  const IconComponent = iconComponents[toPascalCase(project.icon)] || Icons.Code2;

  const isTerra = project.category.includes("hci") && project.category[0] === "hci";

  const accentColor = isTerra
    ? "text-bioLight-accentTerra dark:text-bioDark-accentTerra bg-bioLight-accentTerra/10 dark:bg-bioDark-accentTerra/10"
    : "text-bioLight-accentSage dark:text-bioDark-accentSage bg-bioLight-accentSage/10 dark:bg-bioDark-accentSage/10";

  const hoverColor = isTerra
    ? "dark:hover:border-bioDark-accentTerra hover:border-bioLight-accentTerra group-hover:text-bioLight-accentTerra dark:group-hover:text-bioDark-accentTerra"
    : "dark:hover:border-bioLight-accentSage hover:border-bioLight-accentSage group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage";

  const btnHoverStyles = "hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage hover:text-bioLight-accentSage dark:hover:text-bioDark-accentSage";

  const imageList = project.images && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="project-card group bg-bioLight-card dark:bg-bioDark-card rounded-2xl border border-bioLight-border dark:border-bioDark-border p-5 flex flex-col justify-between transition-all duration-400 hover:shadow-lg hover:-translate-y-1">
        <div>
          {/* Project Preview Image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 border border-bioLight-border/40 dark:border-bioDark-border/30 transform-gpu">
            {imageList.length > 0 ? (
              <div className="w-full h-full relative cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                <img
                  src={imageList[currentImgIdx]}
                  alt={`${project.name} preview ${currentImgIdx + 1}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 transform-gpu"
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                />
                
                {imageList.length > 1 && (
                  <>
                    {/* Slideshow Controls */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/80 shadow-md border border-white/20 dark:border-white/5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform z-20"
                      aria-label="Previous slide"
                    >
                      <Icons.ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIdx((prev) => (prev + 1) % imageList.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/80 shadow-md border border-white/20 dark:border-white/5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform z-20"
                      aria-label="Next slide"
                    >
                      <Icons.ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Indicator Badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm border border-white/10 text-[9px] font-bold text-bioLight-textMuted dark:text-bioDark-textMuted z-20">
                      {currentImgIdx + 1} / {imageList.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-bioLight-accentSage/20 to-bioLight-accentTerra/20 flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-bioLight-textMuted/40" />
              </div>
            )}

            {/* Floating Category Icon and Metadata Label */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
              <div className={`p-2 rounded-xl backdrop-blur-md bg-white/80 dark:bg-black/85 shadow-sm border border-white/20 dark:border-white/5 pointer-events-auto flex items-center justify-center ${isTerra ? "text-bioLight-accentTerra dark:text-bioDark-accentTerra" : "text-bioLight-accentSage dark:text-bioDark-accentSage"}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md bg-white/80 dark:bg-black/85 shadow-sm border border-white/20 dark:border-white/5 text-bioLight-textMuted dark:text-bioDark-textMuted pointer-events-auto uppercase tracking-wider">
                {project.metadata?.label || project.category[0]}
              </span>
            </div>
          </div>

          {/* Project Title and Description */}
          <h4 
            className={`serif-title text-xl font-medium text-gray-900 dark:text-white mb-1.5 transition-colors duration-300 ${hoverColor}`}
            dangerouslySetInnerHTML={{ __html: project.name }}
          />
          <p 
            className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: project.descript }}
          />
        </div>

        {/* Footer: Tags and Links */}
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium bg-bioLight-card dark:bg-bioDark-card border border-bioLight-border dark:border-bioDark-border/60 text-gray-600 dark:text-gray-400 flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm hover:text-gray-900 dark:hover:text-white cursor-default ${
                  isTerra
                    ? "hover:border-bioLight-accentTerra dark:hover:border-bioDark-accentTerra hover:bg-bioLight-accentTerra/5 dark:hover:bg-bioDark-accentTerra/5"
                    : "hover:border-bioLight-accentSage dark:hover:border-bioDark-accentSage hover:bg-bioLight-accentSage/5 dark:hover:bg-bioDark-accentSage/5"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links Row */}
          {(project.link || (project.links && project.links.length > 0)) && (
            <div className="flex flex-wrap gap-2 pt-1 w-full">
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
                let LinkIcon: React.ComponentType<any> = Icons.ExternalLink;
                let useReactIcon = false;
                let ReactIconComponent: React.ComponentType<any> = FaGithub;

                if (lower.includes("linkedin")) {
                  useReactIcon = true;
                  ReactIconComponent = FaLinkedinIn;
                } else if (lower.includes("instagram")) {
                  useReactIcon = true;
                  ReactIconComponent = FaInstagram;
                } else if (lower.includes("drive.google") || lower.includes("google drive") || lower.includes("casebook")) {
                  useReactIcon = true;
                  ReactIconComponent = FaGoogleDrive;
                } else if (lower.includes("github")) {
                  useReactIcon = true;
                  ReactIconComponent = FaGithub;
                } else if (lower.includes("pdf")) {
                  LinkIcon = Icons.FileText;
                } else if (lower.includes("arxiv")) {
                  LinkIcon = Icons.BookOpen;
                } else if (lower.includes("doi")) {
                  LinkIcon = Icons.Globe;
                } else if (lower.includes("video")) {
                  LinkIcon = Icons.Play;
                } else if (lower.includes("slide")) {
                  LinkIcon = Icons.Presentation;
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
        </div>
      </div>

      {/* Lightbox Pop-up Modal */}
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
            <Icons.X className="w-6 h-6" />
          </button>
          
          {/* Lightbox Slideshow Controls */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-black/40 border border-white/10 hover:border-white/20 transition-all z-[110]"
                aria-label="Previous image"
              >
                <Icons.ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIdx((prev) => (prev + 1) % imageList.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-black/40 border border-white/10 hover:border-white/20 transition-all z-[110]"
                aria-label="Next image"
              >
                <Icons.ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

            {/* Lightbox Image Container */}
            <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center z-[105]" onClick={(e) => e.stopPropagation()}>
              <img
                src={imageList[currentImgIdx]}
                alt={`${project.name} preview ${currentImgIdx + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl select-none shadow-2xl border border-white/5"
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
              />
              
              {/* Caption and Slides Indicator */}
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 text-center">
                {(project.imageCaptions && project.imageCaptions[currentImgIdx]) ? (
                  <span className="text-white/90 text-xs font-medium px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/5">
                    {project.imageCaptions[currentImgIdx]}
                  </span>
                ) : project.imageCaption ? (
                  <span className="text-white/90 text-xs font-medium px-3 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/5">
                    {project.imageCaption}
                  </span>
                ) : null}

                {imageList.length > 1 && (
                  <span className="text-white/80 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 border border-white/5">
                    {currentImgIdx + 1} / {imageList.length}
                  </span>
                )}
              </div>
            </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useMemo } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { AchievementCard } from "@components/AchievementCard";
import { projects } from "@data/projects";
import { Layers, Trophy, Terminal, BookOpen, GraduationCap, Lightbulb } from "lucide-react";

interface WorkResearchProps {
  onShowToast: (title: string, message: string, icon: string) => void;
}

export const WorkResearchSection: React.FC<WorkResearchProps> = ({ onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    const baseList = selectedCategory === "all"
      ? projects
      : selectedCategory === "awarded"
      ? projects.filter((p) => p.isAwarded)
      : projects.filter((p) => p.category.includes(selectedCategory));

    // Sort: isAwarded goes first (bubbles to top), then by id desc (newest first)
    return [...baseList].sort((a, b) => {
      const aAward = a.isAwarded ? 1 : 0;
      const bAward = b.isAwarded ? 1 : 0;
      if (aAward !== bAward) return bAward - aAward;
      return Number(b.id) - Number(a.id);
    });
  }, [selectedCategory]);

  const awardedProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.isAwarded);
  }, [filteredProjects]);

  const otherProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.isAwarded);
  }, [filteredProjects]);

  const categories = [
    { id: "all", label: "Show All", icon: Layers },
    { id: "awarded", label: "Award-Winning", icon: Trophy },
    { id: "engineering", label: "Engineering", icon: Terminal },
    { id: "publication", label: "Publication", icon: BookOpen },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "others", label: "Others", icon: Lightbulb },
  ];

  const triggerSignalDecode = () => {
    onShowToast("Log Diagnostic", "Transforming MTR operational logs to telemetry charts...", "cpu");
    setTimeout(() => {
      onShowToast("Parsing Completed", "Subway operational telemetries fully mapped.", "check");
    }, 2500);
  };

  return (
    <section className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="serif-title text-3xl font-normal text-gray-900 dark:text-white">Projects & Research </h2>
          <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted mt-1">Intersections of physical architecture, computer engineering, and user-centered design.</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-1.5 bg-bioLight-card dark:bg-bioDark-card p-1 rounded-xl border border-bioLight-border dark:border-bioDark-border/60 self-start">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button 
                key={cat.id} 
                onClick={() => setSelectedCategory(cat.id)} 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat.id 
                    ? "bg-bioLight-accentSage text-white dark:bg-bioDark-accentSage dark:text-bioDark-bg" 
                    : "text-bioLight-textMuted dark:text-bioDark-textMuted hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Display Groups */}
      <div className="space-y-12 relative">
        {filteredProjects.length > 0 ? (
          <>
            {/* Major Achievements Section */}
            {awardedProjects.length > 0 && (
              <div className="space-y-6">
                <h3 className="serif-title text-xl font-normal text-bioLight-accentTerra dark:text-bioDark-accentTerra border-b border-bioLight-border dark:border-bioDark-border/20 pb-2">
                  Achievements
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {awardedProjects.map((project) => (
                    <AchievementCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {/* Standard Projects Section */}
            {otherProjects.length > 0 && (
              <div className="space-y-6">
                <h3 className="serif-title text-xl font-normal text-bioLight-accentSage dark:text-bioDark-accentSage border-b border-bioLight-border dark:border-bioDark-border/20 pb-2">
                  Projects & Research
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-bioLight-textMuted dark:text-bioDark-textMuted">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

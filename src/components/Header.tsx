import React from "react";
import { Menu, X, Mail, Moon, Sun } from "lucide-react";
import type { TabId } from "@types";
const Logo = "/logo192.png";


interface HeaderProps {
  currentTab: TabId;
  isDarkMode: boolean;
  onNavigate: (tab: TabId) => void;
  onThemeToggle: () => void;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, isDarkMode, onNavigate, onThemeToggle, mobileMenuOpen, onMobileMenuToggle }) => {
  const navItems: { label: string; id: TabId }[] = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "work-research" },
    { label: "Creative Log", id: "creative-log" },
    { label: "About", id: "about" },
  ];

  const isActive = (tab: TabId) => currentTab === tab;

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bioLight-bg/80 dark:bg-bioDark-bg/80 border-b border-bioLight-border dark:border-bioDark-border/30 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between ">
          {/* Logo Icon */}
          <button onClick={() => onNavigate("home")} className="flex-shrink-0 group hover:opacity-90 transition-opacity">
            <div className="w-10 h-10">
              <img src={Logo} alt="Logo" className="" loading="lazy" onContextMenu={(e) => e.preventDefault()} />
            </div>
          </button>

          {/* Centered Title Text */}
          <button onClick={() => onNavigate("home")} className="flex-1 text-center px-1 sm:px-4 hover:opacity-90 transition-opacity focus:outline-none flex flex-col items-center justify-center min-w-0">
            <span className="serif-title font-semibold tracking-wide text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap">Jacky Chen</span>
            <span className="block text-[7.5px] sm:text-[10px] text-bioLight-textMuted dark:text-bioDark-textMuted font-medium tracking-wider uppercase truncate w-full max-w-[130px] min-[375px]:max-w-[180px] sm:max-w-none">Graduate Engineer @ MTR | HCI Researcher</span>
          </button>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => onNavigate(item.id)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive(item.id) ? "text-bioLight-accentSage dark:text-bioDark-accentSage bg-bioLight-card dark:bg-bioDark-accentMoss/30" : "text-bioLight-textMuted dark:text-bioDark-textMuted hover:text-gray-900 dark:hover:text-white"}`}>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Bar */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button onClick={onThemeToggle} className="p-2 rounded-lg hover:bg-bioLight-card dark:hover:bg-bioDark-card border border-bioLight-border dark:border-bioDark-border transition-colors text-gray-700 dark:text-gray-300" aria-label="Toggle Theme">
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Contact Button */}
              <a href="mailto:jackyxiechenzhijie@gmail.com" className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-bioLight-accentSage text-white dark:bg-bioDark-accentSage dark:text-bioDark-bg shadow-sm hover:opacity-95 transition-opacity">
                <Mail className="w-3.5 h-3.5" />
                Contact
              </a>

              {/* Mobile Menu Toggle */}
              <button onClick={onMobileMenuToggle} className="p-2 rounded-lg hover:bg-bioLight-card dark:hover:bg-bioDark-card border border-bioLight-border dark:border-bioDark-border transition-colors text-gray-700 dark:text-gray-300">
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto bg-bioLight-bg/95 dark:bg-bioDark-bg/95 border-b border-bioLight-border dark:border-bioDark-border/50 shadow-lg z-40 animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onMobileMenuToggle();
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${isActive(item.id) ? "bg-bioLight-card dark:bg-bioDark-card text-bioLight-accentSage dark:text-bioDark-accentSage" : "text-bioLight-textMuted dark:text-bioDark-textMuted hover:text-gray-900 dark:hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}

            {/* <div className="pt-3 border-t border-bioLight-border dark:border-bioDark-border flex justify-between items-center px-4">
              <span className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted">Connect with Jacky</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jackyxczj" target="_blank" rel="noreferrer" className="text-bioLight-textMuted hover:text-gray-900 dark:text-bioDark-textMuted dark:hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/JackyZhiJie" target="_blank" rel="noreferrer" className="text-bioLight-textMuted hover:text-gray-900 dark:text-bioDark-textMuted dark:hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

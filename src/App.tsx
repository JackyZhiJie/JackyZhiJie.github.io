import React, { useState, useEffect } from "react";
import { Header } from "@components/Header";
import { ToastContainer } from "@components/Toast";
import { HeroSection } from "@components/sections/Hero";
import { WorkResearchSection } from "@components/sections/WorkResearch";
import { CreativeLogSection } from "@components/sections/CreativeLog";
import { ProseReader } from "@components/sections/ProseReader";
import { AboutSection } from "@components/sections/About";
import { Footer } from "@components/Footer";
import { useTheme, useToast, useNavigation } from "@hooks";
import { proseData } from "@data";
import type { TabId } from "@types";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { toasts, showToast, removeToast } = useToast();
  const { currentTab, navigateTo } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProse, setSelectedProse] = useState<string | null>(null);

  // Initialize theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleNavigateToTab = (tab: TabId) => {
    navigateTo(tab);
    setMobileMenuOpen(false);
    setSelectedProse(null);
  };

  const handleNavigateWithPreset = (tab: TabId, _preset?: string) => {
    handleNavigateToTab(tab);
  };

  const handleOpenProse = (proseKey: string) => {
    setSelectedProse(proseKey);
  };

  const handleCloseProse = () => {
    setSelectedProse(null);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} bg-bioLight-bg dark:bg-bioDark-bg text-gray-900 dark:text-gray-100 min-h-screen flex flex-col antialiased`}>
      {/* Ambient background effects */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-bioDark-accentSage/15 dark:bg-bioDark-accentSage/5 blur-[130px] pointer-events-none z-0 animate-pulse-glow"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-bioDark-accentTerra/15 dark:bg-bioDark-accentTerra/5 blur-[130px] pointer-events-none z-0 animate-pulse-glow" style={{ animationDelay: "-5s" }}></div>

      {/* Header */}
      <Header currentTab={currentTab} isDarkMode={isDarkMode} onNavigate={handleNavigateToTab} onThemeToggle={toggleTheme} mobileMenuOpen={mobileMenuOpen} onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* Main Content */}
      <main className="flex-grow z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Home Section */}
        {currentTab === "home" && <HeroSection onNavigateToTab={handleNavigateWithPreset} onShowToast={showToast} />}

        {/* Work & Research Section */}
        {currentTab === "work-research" && <WorkResearchSection onShowToast={showToast} />}

        {/* Creative Log Section */}
        {currentTab === "creative-log" && (
          selectedProse && proseData[selectedProse] ? (
            <ProseReader prose={proseData[selectedProse]} onBack={handleCloseProse} />
          ) : (
            <CreativeLogSection onOpenProse={handleOpenProse} />
          )
        )}

        {/* About Section */}
        {currentTab === "about" && <AboutSection onShowToast={showToast} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />

    </div>
  );
}

export default App;

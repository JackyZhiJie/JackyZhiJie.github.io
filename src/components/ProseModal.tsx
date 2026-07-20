import React from "react";
import { X } from "lucide-react";
import type { ProseItem } from "@types";

interface ProseModalProps {
  prose: ProseItem | null;
  isOpen: boolean;
  onClose: () => void;
}


export const ProseModal: React.FC<ProseModalProps> = ({ prose, isOpen, onClose }) => {
  if (!isOpen || !prose) return null;

  const isChinese = prose.isChinese;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-bioLight-bg dark:bg-bioDark-bg border border-bioLight-border dark:border-bioDark-border max-w-2xl w-full rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-bioLight-border dark:border-bioDark-border/60 flex justify-between items-start">
          <div>
            <span className={`text-[10px] font-bold text-bioLight-accentSage dark:text-bioDark-accentSage uppercase tracking-widest ${isChinese ? "font-tc" : "font-mono"}`}>
              {prose.category}
            </span>
            <h3 className={`text-2xl mt-1 text-gray-900 dark:text-white ${isChinese ? "font-tc font-bold" : "serif-title font-normal"}`}>
              {prose.title}
            </h3>
            <span className="text-[10px] text-bioLight-textMuted dark:text-bioDark-textMuted block mt-0.5">{prose.date}</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-bioLight-card dark:hover:bg-bioDark-card text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-grow">
          {/* Google Drive Image Preview Embed */}
          {prose.driveImageId && (
            <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-black/10 border-b border-bioLight-border dark:border-bioDark-border/40 relative">
              <iframe
                src={`https://drive.google.com/file/d/${prose.driveImageId}/preview`}
                className="w-full h-full absolute inset-0"
                allow="autoplay"
                title={`Google Drive Photo Preview for ${prose.title}`}
                style={{
                  border: "none",
                  transform: "scale(1.5)", // scaled down slightly from 5.0 for better preview alignment in modal
                  transformOrigin: "center",
                }}
              />
              {/* Optional Glassmorphism overlay for aesthetics */}
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-[9px] text-white/80 font-mono tracking-wider">
                Photo Frame
              </div>
            </div>
          )}

          <div className={`p-6 space-y-4 leading-relaxed font-light ${
            isChinese 
              ? "font-dfkai text-[15px] sm:text-base text-gray-800 dark:text-gray-200 tracking-wide" 
              : "text-xs text-bioLight-textMuted dark:text-bioDark-textMuted"
          }`}>
            {prose.htmlContent ? (
              <div 
                className="prose-content whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: prose.htmlContent }}
              />
            ) : (
              prose.text.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-bioLight-border dark:border-bioDark-border/60 bg-bioLight-card dark:bg-bioDark-card flex justify-between items-center">
          <span className="text-[9px] italic">Authored by Jacky Chen</span>
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-bioLight-border dark:bg-bioDark-border text-xs font-semibold hover:opacity-90 transition-opacity">
            Close Reading
          </button>
        </div>
      </div>
    </div>
  );
};

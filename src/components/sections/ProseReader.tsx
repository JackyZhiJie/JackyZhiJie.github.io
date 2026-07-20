import React from "react";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import type { ProseItem } from "@types";

interface ProseReaderProps {
  prose: ProseItem;
  onBack: () => void;
}

export const ProseReader: React.FC<ProseReaderProps> = ({ prose, onBack }) => {
  const isChinese = prose.isChinese;

  // Support multiple images
  const imageUrls = prose.driveImageIds && prose.driveImageIds.length > 0
    ? prose.driveImageIds.map(id => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`)
    : prose.driveImageId
      ? [`https://drive.google.com/thumbnail?id=${prose.driveImageId}&sz=w1600`]
      : [];

  return (
    <article className="max-w-3xl mx-auto space-y-8 py-4 animate-fade-in">
      {/* Navigation Header */}
      <div className={`flex items-center justify-between border-b border-bioLight-border dark:border-bioDark-border/40 pb-2 ${isChinese ? "font-dfkai" : "font-mono"}`}>
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-xs font-semibold text-bioLight-textMuted dark:text-bioDark-textMuted hover:text-bioLight-accentSage dark:hover:text-bioDark-accentSage transition-colors group`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {isChinese ? "返回創作日誌" : "Back to Creative Log"}
        </button>
        <div className="text-xs text-bioLight-textMuted dark:text-bioDark-textMuted tracking-wider">
          {isChinese ? "隨筆" : "Prose Reader"}
        </div>
      </div>

      {/* Prose Metadata */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 text-xs text-bioLight-textMuted dark:text-bioDark-textMuted">
          <span className="inline-flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            <span className={isChinese ? "font-tc font-medium" : "font-mono"}>{prose.category}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <time className={isChinese ? "font-tc" : ""}>{prose.date}</time>
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            <span>Jacky Chen</span>
          </span>
        </div>

        <h1 className={`text-3xl md:text-4xl text-gray-900 dark:text-white leading-tight ${isChinese ? "font-tc font-bold tracking-wide" : "serif-title font-normal"}`}>
          {prose.title}
        </h1>
      </div>

      {/* Direct Google Drive Photo Frame(s) */}
      {imageUrls.length > 0 && (
        <div className={`grid gap-4 ${imageUrls.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
          {imageUrls.map((url, idx) => (
            <div key={idx} className="w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-bioLight-border dark:border-bioDark-border/40 shadow-md">
              <img
                src={url}
                alt={`Photograph ${idx + 1} for ${prose.title}`}
                className="w-full h-auto max-h-[500px] object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {/* Prose Body Content */}
      <div className={`leading-relaxed whitespace-pre-line tracking-wide ${
        isChinese 
          ? "font-dfkai text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-loose" 
          : "text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light space-y-6"
      }`}>
        {prose.htmlContent ? (
          <div 
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: prose.htmlContent }}
          />
        ) : (
          prose.text.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-6">
              {paragraph}
            </p>
          ))
        )}
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-bioLight-border dark:border-bioDark-border/40 pt-8 flex justify-center">
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl bg-bioLight-card dark:bg-bioDark-card hover:bg-bioLight-border dark:hover:bg-bioDark-border text-sm font-semibold transition-colors"
        >
          {isChinese ? "返回列表" : "Back to List"}
        </button>
      </div>
    </article>
  );
};

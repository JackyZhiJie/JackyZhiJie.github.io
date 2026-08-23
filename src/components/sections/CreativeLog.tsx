import React from "react";
import { proseData } from "@data/prose";
import { ArrowUpRight } from "lucide-react";

interface CreativeLogProps {
  onOpenProse: (proseKey: string) => void;
}

export const CreativeLogSection: React.FC<CreativeLogProps> = ({ onOpenProse }) => {
  const proseItems = Object.values(proseData);

  return (
    <section className="space-y-10 animate-fade-in">
      <div className="border-b border-bioLight-border dark:border-bioDark-border/50 pb-6">
        <h2 className="serif-title text-3xl font-normal text-gray-900 dark:text-white">Prose & Frames</h2>
        <p className="text-sm text-bioLight-textMuted dark:text-bioDark-textMuted mt-1">
          I Emo a lot and I like to write and take pictures to express it. Maybe it's just my way of processing and coping with things that happen in my life. I think it's a cool way to connect with people too, sharing my thoughts and feelings and seeing how they resonate with others. (Not sure if it's cool yet...)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 2xl:grid-cols-12 gap-10">
        {/* Prose List */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="serif-title text-xl font-normal text-bioLight-accentSage dark:text-bioDark-accentSage border-b border-bioLight-border dark:border-bioDark-border/20 pb-2">Selected Reflections</h3>

          <div className="space-y-4">
            {proseItems.map((prose) => (
              <article
                key={prose.key}
                onClick={() => onOpenProse(prose.key)}
                className="group cursor-pointer p-4 rounded-xl hover:bg-bioLight-card dark:hover:bg-bioDark-card transition-all border border-transparent hover:border-bioLight-border dark:hover:border-bioDark-border/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                {prose.driveImageId && (
                  <div className="w-full sm:w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black/5 dark:bg-white/5 border border-bioLight-border/30 dark:border-bioDark-border/30">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${prose.driveImageId}&sz=w300`}
                      alt={prose.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-grow space-y-1">
                  <div className="flex justify-between text-[10px] text-bioLight-textMuted dark:text-bioDark-textMuted font-mono">
                    <span className={prose.isChinese ? "font-tc font-medium" : "font-mono"}>{prose.category}</span>
                    <time className={prose.isChinese ? "font-tc" : ""}>{prose.date}</time>
                  </div>
                  <h4 className={`${prose.isChinese ? "font-tc font-bold tracking-wide" : "serif-title font-medium"} text-base text-gray-900 dark:text-white group-hover:text-bioLight-accentSage dark:group-hover:text-bioDark-accentSage transition-colors`}>
                    {prose.title}
                  </h4>
                  <p className={`text-bioLight-textMuted dark:text-bioDark-textMuted line-clamp-1 ${prose.isChinese ? "font-dfkai text-xs leading-relaxed" : "text-xs"}`}>
                    {prose.text}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-semibold text-bioLight-accentSage dark:text-bioDark-accentSage mt-1 ${prose.isChinese ? "font-tc" : ""}`}>
                    {prose.isChinese ? "閱讀文章" : "Read Essay"} <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Frames Gallery */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="serif-title text-xl font-normal text-bioLight-accentTerra dark:text-bioDark-accentTerra border-b border-bioLight-border dark:border-bioDark-border/20 pb-2">Captured Frames</h3>

          <div className="grid grid-cols-2 gap-4">
            {/* Photo Card 1 */}
            <div className="relative rounded-xl overflow-hidden group border border-bioLight-border dark:border-bioDark-border/60 bg-gradient-to-br from-[#121515] to-[#2E3535] aspect-square">
              <img
                src="https://drive.google.com/thumbnail?id=1hRM2tg-MQRDV7b4BpzjGmkiNXMsoXLlS&sz=w600"
                alt="Quarry Bay Towers"
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] uppercase tracking-wider text-bioDark-accentSage">Architecture</span>
                <p className="serif-title text-xs font-normal">Quarry Bay Towers</p>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="relative rounded-xl overflow-hidden group border border-bioLight-border dark:border-bioDark-border/60 bg-gradient-to-br from-[#121515] to-[#2E3535] aspect-square">
              <img
                src="https://drive.google.com/thumbnail?id=1XTG2T965SMYsXYRhgdPQzQRlQ5ljUiq0&sz=w600"
                alt="MTR Blue Hour"
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] uppercase tracking-wider text-bioDark-accentTerra">Transit</span>
                <p className="serif-title text-xs font-normal">MTR Blue Hour</p>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-bioLight-textMuted dark:text-bioDark-textMuted text-center font-light italic">All street frames captured via Nikon Z6 & my smartphones.</p>
        </div>
      </div>
    </section>
  );
};

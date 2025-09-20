import React, { useState } from "react";
import manImg from "../img/about/man.jpg";
import demoImg from "../img/write_right/demo.png";
import algoImg from "../img/write_right/algo.jpg";
import creativityAwardImg from "../img/write_right/creativity_award.jpg";
import innovationAwardImg from "../img/write_right/innovation_award.jpg";
import { FaLink, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const images = [
  { src: demoImg, alt: "Write Right" },
  { src: algoImg, alt: "Innovative Hough Algorithm" },
  { src: creativityAwardImg, alt: "Professor Charles K. Kao Student Creativity Award" },
  { src: innovationAwardImg, alt: "CUHK Outstanding Student Award" },
];

const Achievements = () => {
  const [current, setCurrent] = useState(0);
  const [popup, setPopup] = useState(false);

  const prevImg = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImg = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-2 max-w-6xl">
        <h1 className="h2 font-bold text-center tracking-tight mb-0">Achievements</h1>
        <div className="grid grid-cols-1 gap-10">
          <div>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col md:flex-row items-center gap-5">
                {/* Slideshow */}
                <div className="flex flex-col items-center gap-5">
                  <div className="relative flex items-center justify-center hover:scale-105 transition">
                    <button onClick={prevImg} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-teal-100 transition z-10" aria-label="Previous">
                      <FaChevronLeft className="w-6 h-6 text-teal-700" />
                    </button>
                    <img src={images[current].src} alt={images[current].alt} className="w-64 h-84 object-cover rounded-2xl border border-gray-100 shadow-sm mx-10 cursor-pointer" onClick={() => setPopup(true)} onContextMenu={(e) => e.preventDefault()} />
                    <button onClick={nextImg} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-teal-100 transition z-10" aria-label="Next">
                      <FaChevronRight className="w-6 h-6 text-teal-700" />
                    </button>
                  </div>
                  <div className="text-center text-lg text-gray-500 mt-2">{images[current].alt}</div>
                </div>
                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-teal-700">Award-winning Handwriting Analysis Project</h2>
                  <p className="text-gray-800 mb-2">Developed a web-based system to improve Chinese handwriting quality through font analysis, educational feedback, and game-based learning. The project covers algorithm development, interface design, and user testing.</p>
                  <div className="bg-gray-100 rounded-xl shadow p-4 mb-4 hover:scale-105 transition">
                    <ul className="list-disc list-inside text-gray-800 space-y-2">
                      <li className="flex text-lg items-center">
                        <span>1st Runner-up, Professor Charles K. Kao Student Creativity Awards 2025</span>
                        <a href="https://www.cse.cuhk.edu.hk/news/achievements/pckksca2025/" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="Award Details">
                          <FaLink className="inline w-4 h-4" />
                        </a>
                      </li>
                      <li className="flex text-lg items-center">
                        <span>CUHK Outstanding Student Award for Innovation and Invention 2024</span>
                        <a href="https://www.uc.cuhk.edu.hk/tc/story/dedication-in-action-impacting-beyond-aspiration-xie-chen-zhi-jie-jacky/" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="CUHK Story">
                          <FaLink className="inline w-4 h-4" />
                        </a>
                      </li>
                      <li className="flex text-lg items-center">
                        <span>Publication at the 13th IEEE International Conference on Engineering Education (2024)</span>
                        <a href="https://ieeexplore.ieee.org/document/10923800" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="IEEE Paper">
                          <FaLink className="inline w-4 h-4" />
                        </a>
                      </li>
                      <li className="flex text-lg items-center">
                        <span>Participated in the James Dyson Award 2025 (Write Right project, not awarded)</span>
                        <a href="https://www.jamesdysonaward.org/2025/project/write-right" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="James Dyson Award Entry">
                          <FaLink className="inline w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="text-base text-gray-800 mt-6">This project demonstrates the integration of technical innovation and educational impact, earning recognition in competitions, university awards, and international publication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup for large image */}
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setPopup(false)}>
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <button className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-teal-100 transition" onClick={() => setPopup(false)} aria-label="Close">
              <FaTimes className="w-6 h-6 text-teal-700" />
            </button>
            <img src={images[current].src} alt={images[current].alt} loading="lazy" className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-lg bg-white" onClick={(e) => e.stopPropagation()} style={{ objectFit: "contain" }} />
            <div className="text-center text-lg text-white mt-4">{images[current].alt}</div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Achievements;

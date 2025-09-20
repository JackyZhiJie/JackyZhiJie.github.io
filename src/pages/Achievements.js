import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Profile = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-2 max-w-6xl">
        <h1 className="h2 font-bold text-center tracking-tight mb-0">Achievements</h1>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col md:flex-row justify-center gap-5 hover:scale-105 transition">
              <div className="">
                <img src={manImg} alt="Profile" className="w-64 h-84 object-cover rounded-2xl border border-gray-100 shadow-sm" onContextMenu={(e) => e.preventDefault()} />
              </div>
              <div className=" flex-1 h-[55vh]">
                <div className="bg-gray-50 rounded-2xl shadow p-6 mb-6 max-w-5xl">
                  <p className="text-xl mb-3 text-gray-800">
                    My most notable achievement is the development of an award-winning web-based system for improving Chinese handwriting quality through font analysis and educational feedback. This <b>individual project</b> earned me:
                  </p>
                  <ul className="text-2xl font-semibold list-disc list-inside mb-3 text-left text-gray-800">
                    <li>
                      Professor Charles K. Kao Student Creativity Awards 2025 <br />
                      (Undergraduate Individual 1st Runner-up)
                      <a href="https://www.cse.cuhk.edu.hk/news/achievements/pckksca2025/" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="Award Details">
                        <FaLink className="inline w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      The 2024 CUHK Outstanding Student Award
                      <br />
                      (Innovation and Invention)
                      <a href="https://www.uc.cuhk.edu.hk/tc/story/dedication-in-action-impacting-beyond-aspiration-xie-chen-zhi-jie-jacky/" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="CUHK Story">
                        <FaLink className="inline w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      Publication at the 13th IEEE International Conference on Engineering Education (IEEE ICEED 2024)
                      <a href="https://ieeexplore.ieee.org/document/10923800" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="IEEE Paper’s DOI">
                        <FaLink className="inline w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                  <p className="text-xl text-gray-800">The system uses game-based learning and the innovative Hough Transform algorithm to assess the prettiness of one’s Chinese penmanship. I independently handled all aspects of the project, from programming and algorithm development to interface design and user testing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;

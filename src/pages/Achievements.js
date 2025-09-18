import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Profile = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-x-12 max-w-5xl">
        {/* Image */}
        <div className="flex flex-col items-center mt-4 lg:mb-0">
          <div className="rounded-2xl overflow-hidden mb-4 flex justify-center">
            <img src={manImg} alt="Profile" className="object-cover w-[280px] h-[380px] md:w-[340px] md:h-[516px] transition duration-300 hover:scale-105 mx-auto" onContextMenu={(e) => e.preventDefault()} />
          </div>
          {/* <Link to={"/portfolio"} className="btn rounded-lg px-6 py-2 text-base font-medium bg-teal-600 text-white hover:bg-teal-700 transition mb-4">
            View my work
          </Link> */}
        </div>

        {/* Text */}
        <motion.div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="h2 mb-0">Achievements</p>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 max-w-5xl">
            <p className="mb-3 text-gray-800">
              My most notable achievement is the development of an award-winning web-based system for improving Chinese handwriting quality through font analysis and educational feedback. This <b>individual project</b> earned me:
            </p>
            <ul className="text-xl font-semibold list-disc list-inside mb-3 text-left text-gray-800">
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
                <a href="https://ieeexplore.ieee.org/document/10923800" target="_blank" rel="noopener noreferrer" className="ml-2 text-teal-600 hover:text-teal-800 inline-flex align-middle" title="IEEE Paper's DOI">
                  <FaLink className="inline w-4 h-4" />
                </a>
              </li>
            </ul>
            <p className="text-gray-800">The system uses game-based learning and the innovative Hough Transform algorithm to assess the prettiness of one’s Chinese penmanship. I independently handled all aspects of the project, from programming and algorithm development to interface design and user testing.</p>
          </div>
          {/* <h2 className="text-2xl font-semibold mb-4 text-teal-700">Current Work</h2>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-8 max-w-2xl w-full">
            <p className="font-tertiary text-gray-800">As a graduate engineer in MTR’s graduate programme, I’m gaining valuable insights into different aspects of railway operations and maintenance. I’m particularly interested in applying my technical background to railway systems, such as computer vision and automation technologies.</p>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profile;

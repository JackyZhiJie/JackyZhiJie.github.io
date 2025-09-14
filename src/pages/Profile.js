import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Profile = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-x-12 max-w-5xl">
        {/* Image */}
        <div className="flex flex-col items-center justify-center mt-4 lg:mb-0">
          <div className="rounded-2xl overflow-hidden mb-4 flex justify-center">
            <img src={manImg} alt="Profile" className="object-cover w-[280px] h-[380px] md:w-[340px] md:h-[460px] transition duration-300 hover:scale-105 mx-auto" onContextMenu={(e) => e.preventDefault()} />
          </div>
          <Link to={"/portfolio"} className="btn rounded-lg px-6 py-2 text-base font-medium bg-teal-600 text-white hover:bg-teal-700 transition mb-4">
            View my work
          </Link>
        </div>

        {/* Text */}
        <motion.div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl font-semibold mb-4 text-teal-700">Technical Expertise & Achievements</h1>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 max-w-xl w-full">
            <p className="mb-3 text-gray-800">My most notable achievement is the development of an award-winning web-based system for improving Chinese handwriting quality through font analysis and educational feedback. This project earned me:</p>
            <ul className="list-disc list-inside mb-3 text-left text-gray-800">
              <li>First Runner-up in the Professor Charles K. Kao Student Creativity Awards 2025 (Undergraduate Individual Entry)</li>
              <li>The 2024 Outstanding Student Award for Innovation and Invention from CUHK</li>
              <li>Publication at the 13th IEEE International Conference on Engineering Education (2024)</li>
            </ul>
            <p className="text-gray-800">The system uses game-based learning and the Hough Transform algorithm to assess Chinese penmanship, focusing on stroke order, aesthetics, and educational needs. I independently handled all aspects of the project, from programming and algorithm development to interface design and user testing.</p>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-teal-700">Current Work</h2>
          <div className="bg-gray-50 rounded-xl shadow p-6 mb-8 max-w-xl w-full">
            <p className="text-gray-800">As a graduate engineer in MTR's rotation programme, I'm gaining valuable insights into different aspects of railway operations and maintenance, including passenger flow monitoring and service planning. I'm particularly interested in applying my technical background to railway systems, such as train management systems, data analytics, and automation technologies.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profile;

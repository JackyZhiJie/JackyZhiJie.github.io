import React from "react";
import manImg from "../img/home/man1.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="py-2">
      <div className="container mx-auto px-4 items-center justify-center flex flex-col lg:flex-row gap-x-12 max-w-5xl mb-4">
        {/* Left: Image and Info */}
        <div className="flex items-center mt-4 lg:mb-0">
          <div className="">
            <img src={manImg} alt="Jacky" className="rounded-2xl h-[62vh] duration-300 hover:scale-105 transition mx-auto mb-2" onContextMenu={(e) => e.preventDefault()} />
            <div className="w-full text-center lg:text-center">
              <p className="text-lg md:text-xl font-semibold text-teal-700 mb-1">Graduate Engineer & HCI Researcher</p>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-0">Hong Kong</p>
            </div>
          </div>
        </div>
        {/* Right: Description */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left  ">
          <div className="flex-1 flex flex-col justify-end items-center">
            <p className="h3 font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">Hi, I am Jacky!</p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-8 max-w-4xl w-full text-center lg:text-left duration-300 hover:scale-105 transition">
              <p className="text-base lg:text-xl mb-3 text-gray-800 dark:text-gray-200">I am a Computer Engineering graduate from CUHK with a minor in Journalism and Communication. I am currently working as a Graduate Engineer at MTR, while pursing an MPhil in Computer Science at CityU's BiWell Lab. With technical expertise and strong communication skills, I have always been captivated by the convergence of technology and communication.</p>
              <p className="text-base lg:text-xl text-gray-800 dark:text-gray-200 mb-6">My research Interests lie in Human-Computer Interaction (HCI), exploring the intersection of technology, built environments,education and human well-being.</p>
              <div className="flex flex-wrap gap-2 mb-0 justify-center lg:justify-start">
                {["HCI", "Computer", "Technology", "Engineering", "Electronics", "Photography", "Filmmaking", "Writing", "Humanities", "Education", "IoT"].map((tag) => (
                  <span key={tag} className="inline-block bg-gray-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-teal-600 transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

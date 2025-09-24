import React from "react";
import manImg from "../img/home/man1.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto px-4 items-center justify-center flex flex-col lg:flex-row gap-x-12 max-w-5xl">
        {/* Left: Image and Info */}
        <div className="flex items-center mt-4 lg:mb-0">
          <div className="">
            <img src={manImg} alt="Jacky" className="rounded-2xl h-[62vh] duration-300 hover:scale-105 transition mx-auto mb-2" onContextMenu={(e) => e.preventDefault()} />
            <div className="w-full text-center lg:text-center">
              <p className="text-lg md:text-xl font-semibold text-teal-700 mb-1">Graduate Engineer & Photographer</p>
              <p className="text-base text-gray-500 mb-0">Hong Kong</p>
            </div>
          </div>
        </div>
        {/* Right: Description */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left  ">
          <div className="flex-1 flex flex-col justify-end items-center">
            <p className="h3 font-bold text-gray-900 mb-3 leading-tight">Hi, I am Jacky!</p>
            <div className="bg-gray-50 rounded-xl shadow p-8 max-w-4xl w-full text-center lg:text-left duration-300 hover:scale-105 transition">
              <p className="text-base lg:text-xl mb-3 text-gray-800">I am a Computer Engineering graduate from CUHK with a minor in Journalism and Communication, currently working as a Graduate Engineer at MTR. With technical expertise and strong communication skills, I have always been captivated by the convergence of technology and communication.</p>
              <p className="text-base lg:text-xl text-gray-800 mb-6">While I initially focused on educational technology, I’m now more passionate about applying these skills to transportation systems.</p>
              <div className="flex flex-wrap gap-2 mb-0 justify-center lg:justify-start">
                {["Computer", "Technology", "Engineering", "Electronics", "Photography", "Filmmaking", "Writing", "Humanities", "Education", "IoT"].map((tag) => (
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

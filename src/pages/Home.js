import React from "react";
import manImg from "../img/home/man1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-x-12 gap-y-8 w-full max-w-5xl">
          {/* Text */}
          <motion.div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hi, I am Jacky!</h1>
            <p className="text-xl md:text-2xl font-semibold text-teal-700 mb-2">Graduate Engineer & Photographer</p>
            <p className="text-lg text-gray-500 mb-3">Hong Kong</p>
            <div className="bg-gray-50 rounded-xl shadow p-6 mb-6 max-w-xl w-full text-center">
              <p className="mb-3 text-gray-800">I am a Computer Engineering graduate from CUHK with a minor in Journalism and Communication, currently working as a Graduate Engineer at MTR. With technical expertise and strong communication skills, I have always been captivated by the convergence of technology and communication.</p>
              <p className="text-gray-800 mb-6">While I initially focused on educational technology, I'm now more passionate about applying these skills to transportation systems.</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-center">
                {["Technology", "Engineering", "Photography", "Filmmaking", "Writing", "Humanities", "Education"].map((tag) => (
                  <span key={tag} className="inline-block bg-gray-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-teal-600 transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <img src={manImg} alt="Jacky" className="object-cover w-[320px] h-[420px] md:w-[380px] md:h-[500px] transition duration-300 hover:scale-105" onContextMenu={(e) => e.preventDefault()} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

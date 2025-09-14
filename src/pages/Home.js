import React from "react";
import manImg from "../img/home/man1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Home = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="">
      <div className="container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div
          className="flex flex-col-reverse lg:flex-row
      h-full justify-center items-center gap-x-8 text-center"
        >
          {/* text */}
          <motion.div className="">
            <p className="h1 mt-[5vh]">Hi, I am Jacky</p>
            <p className="font-secondary text-[5vh]">Graduate Engineer & Photographer</p>
            {/* <p className="h2 mt-[5vh]">
              Graduate Engineer <br /> & <br /> Photographer
            </p> */}
            <br />
            <p className="text-[5vh] font-primary mb-4 lg:mb-6 w-full">Hong Kong</p>
            {/* <Link to={"/contact"} className="btn w-[20vw] mb-[3vh] rounded-lg">
              Hire me
            </Link> */}
          </motion.div>
          {/* img */}
          <div className="flex-1 h-full flex justify-center mb-0">
            <div className="rounded-lg h-full m-1">
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className="rounded-lg h-[75vh]" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

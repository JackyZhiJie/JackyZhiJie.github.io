import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        {/* <div
          className="flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center lg:text-left"
        > */}
        <div
          className="flex flex-col-reverse lg:flex-row
      h-full mt-[0vh] justify-center items-center gap-x-12 text-center lg:text-left"
        >
          {/* img */}
          <div className="flex-1 h-full flex justify-center mb-0">
            {/* flex-1 max-h-48 lg:max-h-[350px]
          order-2 lg:order-none mx-auto h-full relative */}
            <div className="rounded-lg h-full m-1">
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className="rounded-lg h-[70vh]" />
            </div>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="lg:flex-1 
          lg:w-auto z-10 justify-center items-center lg:items-start m-1"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-3">I'm a Computer Engineering undergraduate with a minor in Journalism, based in Hong Kong. I have a passion for technology, writing, photography, and filmmaking.</p>
            {/*p tag className max-w-sm */}
            <p className="mb-12">
              With a strong foundation in both technical knowledge and communication skills, I aim to bridge the gap between engineering and journalism through multimedia storytelling.
              <div className="w-auto h-auto max-w-xs mx-auto ">
                <br />
                <Link to={"/portfolio"} className="btn rounded-lg">
                  View my work
                </Link>
              </div>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

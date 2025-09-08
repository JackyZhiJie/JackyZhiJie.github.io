import React from "react";
import manImg from "../img/contact/man.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        {/* <div
          className="flex flex-col lg:flex-row h-full items-center justify-start pt-36
        gap-x-8 text-center lg:text-left"
        > */}
        <div
          className="flex flex-col lg:flex-row
      h-full mt-[3vh] justify-center items-center gap-x-0 text-center lg:text-left"
        >
          {/* bg */}
          {/* <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9]
          absolute bottom-0 left-0 right-0 top-64 -z-10 "
          ></motion.div> */}
          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="lg:flex-1 
          lg:w-auto z-10 justify-center items-center text-center lg:items-start"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-5">
              I would love to get suggestions from you.
              <br />
              Email: jackyxiechenzhijie@gmail.com
            </p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-5 justify-center">
                <input
                  className="outline-none border-b border-b-primary h-[8vh]
                bg-transparent font-secondary w-[20vw] justify-center
                placeholder:tex-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[8vh]
                bg-transparent font-secondary w-[20vw] justify-center
                placeholder:tex-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="justify-center">
                <input
                  className="outline-none border-b border-b-primary h-[8vh]
                bg-transparent font-secondary w-[42vw]
                placeholder:tex-[#757879]"
                  type="text"
                  placeholder="Your message"
                />
              </div>
              <button className="btn mt-[3vh] mb-[3vh] mx-auto rounded-lg">Send it</button>
            </form>
          </motion.div>
          {/* img */}
          <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={{ transition: transition1, duration: 1.5 }}>
            <div className="flex-1 h-full flex justify-center mb-0">
              <div className="rounded-lg h-full m-1">
                <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className="rounded-lg h-[70vh]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

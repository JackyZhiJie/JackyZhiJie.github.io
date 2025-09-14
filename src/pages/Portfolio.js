import React from "react";
import Image1 from "../img/portfolio/1.jpg";
import Image2 from "../img/portfolio/2.jpg";
import Image3 from "../img/portfolio/3.jpg";
import Image4 from "../img/portfolio/4.jpg";
import Image5 from "../img/portfolio/v1.jpg";
import Image6 from "../img/portfolio/v2.jpg";
import Image7 from "../img/portfolio/v3.jpg";
import Image8 from "../img/portfolio/5.jpg";
import Image9 from "../img/portfolio/6.jpg";
import Image10 from "../img/portfolio/7.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Portfolio = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "-80%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-80%" }} transition={transition1} className="items-center">
      <div className="container mx-auto relative">
        <div
          className="flex flex-col lg:flex-row h-full
        items-center justify-center gap-x-24 text-center pb-8"
        >
          {/* text */}
          <motion.div className="flex flex-col lg:text-center items-center">
            <p className="h2">Portfolio</p>
            <p className="mb-6 max-w-sm">
              Click the button below to view my whole portfolio in <b>Google Drive</b>. Amazing photos and videos are waiting for you.
            </p>
            <a href="https://drive.google.com/drive/folders/1tlPZHAjTWp-6rwtHee0GCxnmD77EC71G?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn mb-[30px] mx-auto lg:mx-0 rounded-lg">
              Google Drive
            </a>
          </motion.div>
          {/* img grid*/}
          <div className="grid grid-cols-3 lg:gap-2 md:gap-1 w-full h-full">
            {/* img */}
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image5}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image6}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image7}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image8}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image9}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden rounded-md"
            >
              <img
                className="object-fill h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Image10}
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

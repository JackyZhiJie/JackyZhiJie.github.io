import React, { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-primary lg:hidden xl:hidden" ref={navRef}>
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      {/* menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div variants={menuVariants} initial="hidden" animate="show" exit="exit" className="bg-white shadow-2xl w-full fixed top-0 bottom-0 right-0 max-w-xs h-full z-20 rounded-l-xl" style={{}}>
            <div onClick={() => setOpenMenu(false)} className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer">
              <IoMdClose />
            </div>
            <ul className="h-full flex flex-col justify-center items-center gap-y-12 text-primary font-primary font-bold text-3xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/portfolio">Portfolio</Link>
              </li> */}
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              {/* <li>
                <Link to="/about">About</Link>
              </li> */}
              {/* <li>
                <Link to="/contact">Contact</Link>
              </li> */}
              <li>
                <Link to="/achievements">Achievements</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/prose">Prose</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;

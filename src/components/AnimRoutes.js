import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Prose from "../pages/Prose";
import { Routes, Route, useLocation, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Achievements from "../pages/Achievements";
import Projects from "../pages/Projects";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prose" element={<Prose />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;

import React from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* <div className="pt-[100px] lg:pt-[140px]"> */}
        <AnimRoutes />
        {/* </div> */}
      </Router>
    </>
  );
};

export default App;

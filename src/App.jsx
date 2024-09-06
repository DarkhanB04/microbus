import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "./i18n";
import "./fonts/fonts.css";
import Greeting from "./components/Greeting/Greeting";
import ExperienceBanner from "./components/ExperienceBanner/ExperienceBanner";
import CarPark from "./components/CarPark/CarPark";
import Bus360Main from "./components/Bus360/Bus360Main";
import Us from "./components/Us/Us";
import BusRoutes from "./components/BusRoutes/BusRoutes";
import Partners from "./components/Partners/Partners";
import Price from "./components/Price/Price";
import DriverVacancyForm from "./components/DriverVacancyForm/DriverVacancyForm";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import bg from "./assets/mesh-left.png";
import bg2 from "./assets/mesh-bg2.png";

import rightel1 from "./assets/right-el.png";
import rightel2 from "./assets/rightel2.png";
import leftel1 from "./assets/left-el.png";
import leftel2 from "./assets/leftel2.png";
import mainmesh from "./assets/mainmesh.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function App() {
  const { t } = useTranslation();

  // Animation variant for individual elements
  const elementVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Smooth animation duration
      },
    },
  };
  const bgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.3,
      y: 0,
      transition: {
        duration: 1.5, // Smooth animation duration
      },
    },
  };

  return (
    <div className="App">
      <Navigation />
      <Greeting />
      <ExperienceBanner />
      <BusRoutes />
      <Us />
      <CarPark />
      <Bus360Main />

      <Partners />
      <Price />
      <DriverVacancyForm />
      <Questions />
      <Footer />
      {/* Individual background elements with on-scroll animations */}
      <motion.img
        src={bg}
        alt="Background Element 1"
        className="bg-us1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bgVariants} // Apply individual animation
      />
      <motion.img
        src={leftel1}
        alt="Left Element"
        className="bg-leftel1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={elementVariants}
      />
      <motion.img
        src={bg2}
        alt="Background Element 2"
        className="bg-us2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bgVariants}
      />
      <motion.img
        src={rightel1}
        alt="Right Element"
        className="bg-rightel1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={elementVariants}
      />
      <img src={mainmesh} alt="" className="main-mesh" />
      <motion.img
        src={bg}
        alt="Background Element 1"
        className="bg-us3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bgVariants} // Apply individual animation
      />
      <motion.img
        src={leftel2}
        alt="Right Element"
        className="bg-leftel2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={elementVariants}
      />
      <motion.img
        src={bg}
        alt="Background Element 4"
        className="bg-us4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bgVariants} // Apply individual animation
      />
      <div className="bg-leftel3-wrapper">
        {" "}
        <motion.img
          src={rightel1}
          alt="Left Element"
          className="bg-leftel3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elementVariants}
        />
      </div>
      <motion.img
        src={bg2}
        alt="Background Element 5"
        className="bg-us5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bgVariants} // Apply individual animation
      />
      <motion.img
        src={rightel2}
        alt="Left Element"
        className="bg-rightel2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={elementVariants}
      />
    </div>
  );
}

export default App;

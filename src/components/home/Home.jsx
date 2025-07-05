import { motion } from "framer-motion";
import React from "react";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";
import "./Home.scss";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Slider Section */}
      <HomeSlider />

      {/* Additional Content Section */}
      <motion.section
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container">
          <motion.div
            className="home-content__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="home-content__card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="home-content__icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower communities through education, healthcare, and
                sustainable development initiatives.
              </p>
            </motion.div>

            <motion.div
              className="home-content__card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="home-content__icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                Creating a world where every individual has access to
                opportunities for growth and development.
              </p>
            </motion.div>

            <motion.div
              className="home-content__card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="home-content__icon">
                <FaGem />
              </div>
              <h3>Our Values</h3>
              <p>
                Compassion, integrity, transparency, and commitment to making a
                positive impact in society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

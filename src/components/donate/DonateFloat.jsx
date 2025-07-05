import { motion } from "framer-motion";
import React from "react";
import { FaHeart } from "react-icons/fa";
import "./DonateFloat.scss";

const DonateFloat = ({ onDonateClick }) => {
  return (
    <motion.div
      className="donate-float"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        className="donate-float__button"
        onClick={onDonateClick}
        whileHover={{
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
          y: -2,
        }}
        whileTap={{ y: 0 }}
      >
        <motion.div
          className="donate-float__icon"
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <FaHeart />
        </motion.div>
        <span className="donate-float__text">Donate</span>
        <motion.div
          className="donate-float__pulse"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default DonateFloat;

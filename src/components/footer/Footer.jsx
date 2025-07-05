import { motion } from "framer-motion";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaHandHoldingHeart,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { ADDRESS, EMAIL, PHONE, WEBSITE_URL } from "../../utils";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Section */}
          <div className="footer__main">
            <motion.div className="footer__section" variants={itemVariants}>
              <div className="footer__logo">
                <FaHandHoldingHeart className="footer__logo-icon" />
                <div className="footer__logo-text">
                  <h3>Sneha Sambrama</h3>
                  <p>Charity Foundation</p>
                </div>
              </div>
              <p className="footer__description">
                Empowering communities through compassion, education, and
                sustainable development. Together, we create lasting positive
                change in the lives of those who need it most.
              </p>
              <div className="footer__social">
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <motion.div className="footer__section" variants={itemVariants}>
              <h4 className="footer__section-title">Quick Links</h4>
              <ul className="footer__links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#donate">Donate</a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer__section" variants={itemVariants}>
              <h4 className="footer__section-title">Our Services</h4>
              <ul className="footer__links">
                <li>Education Support</li>
                <li>Healthcare Programs</li>
                <li>Community Development</li>
                <li>Women Empowerment</li>
                <li>Child Welfare</li>
                <li>Disaster Relief</li>
              </ul>
            </motion.div>

            <motion.div className="footer__section" variants={itemVariants}>
              <h4 className="footer__section-title">Contact Info</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <FaMapMarkerAlt className="footer__contact-icon" />
                  <div>
                    <p>{ADDRESS}</p>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <FaPhone className="footer__contact-icon" />
                  <p>{PHONE}</p>
                </div>
                <div className="footer__contact-item">
                  <FaEnvelope className="footer__contact-icon" />
                  <p>{EMAIL}</p>
                </div>
                <div className="footer__contact-item">
                  <FaGlobe className="footer__contact-icon" />
                  <p>{WEBSITE_URL}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Section */}
          <motion.div
            className="footer__bottom"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="footer__bottom-content">
              <div className="footer__copyright">
                <p>
                  © {currentYear} Sneha Sambrama Charity Foundation. All rights
                  reserved.
                </p>
                <p>
                  Made with <FaHeart className="footer__heart" /> for the
                  community
                </p>
              </div>
              <div className="footer__legal">
                <a href="#" className="footer__legal-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer__legal-link">
                  Terms of Service
                </a>
                <a href="#" className="footer__legal-link">
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

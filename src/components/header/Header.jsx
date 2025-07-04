import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaHeart,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaPhone,
  FaTools,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logopng from "../../assets/images/logopng.png";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About Us", path: "/about", icon: FaInfoCircle },
    { name: "Services", path: "/services", icon: FaTools },
    { name: "Gallery", path: "/gallery", icon: FaImages },
    { name: "Contact", path: "/contact", icon: FaPhone },
    { name: "Donate", path: "/donate", icon: FaHeart },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo Section */}
        <motion.div
          className="header__logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/" className="header__logo-link">
            <div className="header__logo-image">
              <img
                src={logopng}
                alt="Sneha Sambrama Logo"
                className="header__logo-img"
              />
            </div>
            <div className="header__logo-text">
              <span className="header__logo-primary">Sneha</span>
              <span className="header__logo-secondary">Sambrama</span>
            </div>
            <div className="header__logo-badge">Charity Foundation</div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop">
          <motion.ul
            className="header__nav-list"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.li
                  key={item.name}
                  className="header__nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`header__nav-link ${
                      location.pathname === item.path
                        ? "header__nav-link--active"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="header__nav-icon">
                      <IconComponent />
                    </span>
                    <span className="header__nav-text">{item.name}</span>
                    <motion.div
                      className="header__nav-indicator"
                      layoutId="nav-indicator"
                      initial={false}
                      animate={
                        location.pathname === item.path
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="header__menu-btn"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`header__menu-icon ${
              isMenuOpen ? "header__menu-icon--open" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="header__nav header__nav--mobile"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.ul
                className="header__nav-list header__nav-list--mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.name}
                      className="header__nav-item header__nav-item--mobile"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`header__nav-link header__nav-link--mobile ${
                          location.pathname === item.path
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={closeMenu}
                      >
                        <span className="header__nav-icon">
                          <IconComponent />
                        </span>
                        <span className="header__nav-text">{item.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="header__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

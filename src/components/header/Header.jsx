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
import logopng from "../../assets/images/logopng.png";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home", icon: FaHome },
    { name: "About Us", id: "about", icon: FaInfoCircle },
    { name: "Services", id: "services", icon: FaTools },
    { name: "Gallery", id: "gallery", icon: FaImages },
    { name: "Contact", id: "contact", icon: FaPhone },
    { name: "Donate", id: "donate", icon: FaHeart },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          )
        ) || 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollOffset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--scroll-offset"
          )
        ) || 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= window.scrollY + scrollOffset) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <button
            className="header__logo-link"
            onClick={() => scrollToSection("home")}
          >
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
          </button>
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
                  <button
                    className={`header__nav-link ${
                      activeSection === item.id
                        ? "header__nav-link--active"
                        : ""
                    }`}
                    onClick={() => scrollToSection(item.id)}
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
                        activeSection === item.id
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  </button>
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
                      <button
                        className={`header__nav-link header__nav-link--mobile ${
                          activeSection === item.id
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <span className="header__nav-icon">
                          <IconComponent />
                        </span>
                        <span className="header__nav-text">{item.name}</span>
                      </button>
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

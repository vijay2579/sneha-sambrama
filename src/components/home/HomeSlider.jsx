import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import "./HomeSlider.scss";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Dummy images with different aspect ratios and content
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=600&fit=crop",
      title: "Empowering Communities",
      subtitle: "Building a brighter future together",
      description:
        "Join us in making a difference in the lives of those who need it most.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
      title: "Education for All",
      subtitle: "Knowledge is the key to success",
      description:
        "Providing quality education to children from underprivileged backgrounds.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
      title: "Healthcare Support",
      subtitle: "Caring for those in need",
      description:
        "Ensuring access to basic healthcare services for vulnerable communities.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=600&fit=crop",
      title: "Community Development",
      subtitle: "Growing stronger together",
      description:
        "Supporting sustainable development projects in rural areas.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=600&fit=crop",
      title: "Hope & Healing",
      subtitle: "Restoring lives with compassion",
      description:
        "Bringing hope and healing to families facing difficult challenges.",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="home-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="home-slider__container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            className="home-slider__slide"
          >
            <div
              className="home-slider__image"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="home-slider__overlay">
                <motion.div
                  className="home-slider__content"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h1
                    className="home-slider__title"
                    variants={itemVariants}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.h2
                    className="home-slider__subtitle"
                    variants={itemVariants}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>
                  <motion.p
                    className="home-slider__description"
                    variants={itemVariants}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.button
                    className="home-slider__cta"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          className="home-slider__nav home-slider__nav--prev"
          onClick={prevSlide}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </motion.button>

        <motion.button
          className="home-slider__nav home-slider__nav--next"
          onClick={nextSlide}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </motion.button>

        {/* Play/Pause Button */}
        <motion.button
          className="home-slider__play"
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </motion.button>

        {/* Dots Indicator */}
        <div className="home-slider__dots">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`home-slider__dot ${
                index === currentSlide ? "home-slider__dot--active" : ""
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.div
                className="home-slider__dot-fill"
                animate={{
                  scale: index === currentSlide ? 1 : 0,
                  opacity: index === currentSlide ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="home-slider__progress"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isPlaying ? 1 : 0 }}
          transition={{ duration: 2, ease: "linear" }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
};

export default HomeSlider;

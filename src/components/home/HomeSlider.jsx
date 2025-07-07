import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero6 from "../../assets/images/hero/her06.jpeg";
import hero10 from "../../assets/images/hero/hero10.jpeg";
import hero3 from "../../assets/images/hero/hero3.jpeg";
import hero4 from "../../assets/images/hero/hero4.jpeg";
import hero7 from "../../assets/images/hero/hero7.jpeg";
import hero8 from "../../assets/images/hero/hero8.jpeg";
import hero9 from "../../assets/images/hero/hero9.jpeg";
import "./HomeSlider.scss";

const sliderImages = [hero3, hero4, hero6, hero7, hero8, hero9, hero10];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <div className="home-slider">
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={sliderImages[current]}
          alt={`Slide ${current + 1}`}
          className="home-slider__image"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="home-slider__arrow home-slider__arrow--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <button
        className="home-slider__arrow home-slider__arrow--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="home-slider__dots">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            className={`home-slider__dot${
              idx === current ? " home-slider__dot--active" : ""
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;

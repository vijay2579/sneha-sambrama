import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.scss";

// Import all gallery images
import img1 from "../../assets/images/gallery/2.jpeg";
import img2 from "../../assets/images/gallery/3.jpeg";
import img3 from "../../assets/images/gallery/4.jpeg";
import img4 from "../../assets/images/gallery/5.jpeg";
import img5 from "../../assets/images/gallery/6.jpeg";
import img6 from "../../assets/images/gallery/8.jpeg";
import img7 from "../../assets/images/gallery/c3.jpeg";
import img8 from "../../assets/images/gallery/c4.jpeg";
import img9 from "../../assets/images/gallery/c5.jpeg";
import img10 from "../../assets/images/gallery/c6.jpeg";
import img11 from "../../assets/images/gallery/camp1.jpeg";
import img12 from "../../assets/images/gallery/camp2.jpeg";
import img13 from "../../assets/images/gallery/k4.jpeg";
import img14 from "../../assets/images/gallery/k5.jpeg";
import img15 from "../../assets/images/gallery/k6.jpeg";
import img16 from "../../assets/images/gallery/k7.jpeg";
import img17 from "../../assets/images/gallery/king.jpeg";
import img18 from "../../assets/images/gallery/king2.jpeg";
import img19 from "../../assets/images/gallery/mike1.jpeg";
import img20 from "../../assets/images/gallery/sir2.jpeg";
import img21 from "../../assets/images/gallery/stage1.jpeg";
import img22 from "../../assets/images/gallery/stage2.jpeg";
import img23 from "../../assets/images/gallery/stage3.jpeg";
import img24 from "../../assets/images/gallery/stage4.jpeg";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [imagesPerSlide, setImagesPerSlide] = useState(3);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Responsive images per slide
    const updateImagesPerSlide = () => {
      if (window.innerWidth <= 768) {
        setImagesPerSlide(1);
      } else {
        setImagesPerSlide(3);
      }
    };
    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [imagesPerSlide, totalSlides]);

  const getCurrentSlideImages = () => {
    const startIndex = currentSlide * imagesPerSlide;
    return galleryImages.slice(startIndex, startIndex + imagesPerSlide);
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="gallery__title">Our Gallery</h2>
        </motion.div>

        <div className="gallery__slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              className="gallery__slide"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 40 },
                opacity: { duration: 0.4 },
              }}
            >
              <div className="gallery__grid">
                {getCurrentSlideImages().map((image, index) => (
                  <motion.div
                    key={index}
                    className="gallery__item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${
                        currentSlide * imagesPerSlide + index + 1
                      }`}
                      className="gallery__image"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="gallery__arrow gallery__arrow--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            className="gallery__arrow gallery__arrow--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          {/* Navigation Dots */}
          <div className="gallery__dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`gallery__dot ${
                  index === currentSlide ? "gallery__dot--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaHeartbeat,
  FaTint,
} from "react-icons/fa";
import "./Services.scss";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceCarousels, setServiceCarousels] = useState({});

  // Service data structure with dynamic image imports
  const services = [
    {
      id: 1,
      title: "Job Fair",
      subtitle: "Employment Opportunities for All",
      description:
        "Organizing job fairs and employment melas to connect job seekers with potential employers. We facilitate skill development workshops, provide career counseling, and create networking opportunities to help individuals find meaningful employment and build sustainable careers.",
      icon: FaGraduationCap,
      color: "#e74c3c",
      stats: "400+ Jobs Provided",
      carouselImages: [
        "/images/udyogamela/2.jpeg",
        "/images/udyogamela/4.jpeg",
        "/images/udyogamela/5.jpeg",
        "/images/udyogamela/6.jpeg",
        "/images/udyogamela/p2.jpeg",
        "/images/udyogamela/price.jpeg",
      ],
    },
    {
      id: 2,
      title: "Healthcare Services",
      subtitle: "Caring for Health & Wellness",
      description:
        "Offering medical check-ups, health camps, and basic healthcare support to communities in need. We organize regular health awareness programs, dental camps, and provide essential medicines to families who cannot afford them.",
      icon: FaHeartbeat,
      color: "#e74c3c",
      stats: "1000+ Health Check-ups",
      carouselImages: [
        "/images/healthcare/c3.jpeg",
        "/images/healthcare/c4.jpeg",
        "/images/healthcare/c5.jpeg",
        "/images/healthcare/camp1.jpeg",
        "/images/healthcare/camp2.jpeg",
        "/images/healthcare/k4.jpeg",
      ],
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      subtitle: "Saving Lives Through Donation",
      description:
        "Organizing regular blood donation camps to ensure adequate blood supply for emergency medical needs. We partner with hospitals and blood banks to conduct awareness campaigns, donor registration drives, and maintain a network of voluntary blood donors to support critical healthcare requirements.",
      icon: FaTint,
      color: "#e74c3c",
      stats: "300+ Blood Units Collected",
      carouselImages: [
        "/images/blooddonation/hero3.jpeg",
        "/images/blooddonation/hero4.jpeg",
      ],
    },
  ];

  // Auto-slide functionality for individual service carousels
  useEffect(() => {
    const intervals = {};

    services.forEach((service) => {
      intervals[service.id] = setInterval(() => {
        setServiceCarousels((prev) => {
          const currentIndex = prev[service.id] || 0;
          const nextIndex = (currentIndex + 1) % service.carouselImages.length;
          return {
            ...prev,
            [service.id]: nextIndex,
          };
        });
      }, 3000); // 3 seconds interval
    });

    // Cleanup intervals on component unmount
    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, []); // Empty dependency array means this runs once on mount

  const nextSlide = () => {
    const maxSlides = Math.ceil(services.length / 3) - 1;
    setCurrentSlide((current) => (current === maxSlides ? 0 : current + 1));
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(services.length / 3) - 1;
    setCurrentSlide((current) => (current === 0 ? maxSlides : current - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Individual service carousel controls
  const nextServiceSlide = (serviceId) => {
    setServiceCarousels((prev) => ({
      ...prev,
      [serviceId]:
        ((prev[serviceId] || 0) + 1) %
        services.find((s) => s.id === serviceId).carouselImages.length,
    }));
  };

  const prevServiceSlide = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    setServiceCarousels((prev) => ({
      ...prev,
      [serviceId]:
        prev[serviceId] === 0
          ? service.carouselImages.length - 1
          : (prev[serviceId] || 0) - 1,
    }));
  };

  // Calculate which services to show based on current slide
  const getVisibleServices = () => {
    const startIndex = currentSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  const totalSlides = Math.ceil(services.length / 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        duration: 0.8,
      },
    },
  };

  const tileVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.7,
      rotateY: -30,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="services">
      <div className="container">
        {/* Header */}
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="services__title">Our Services</h1>
          <p className="services__subtitle">
            Comprehensive programs designed to uplift communities and create
            lasting positive change
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="services__carousel">
          <motion.div
            className="services__grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={currentSlide} // Force re-render on slide change
          >
            {getVisibleServices().map((service) => {
              const IconComponent = service.icon;
              const currentImageIndex = serviceCarousels[service.id] || 0;
              const currentImage = service.carouselImages[currentImageIndex];

              // Debug logging for mobile
              console.log(
                `Service ${service.id}: Loading image ${
                  currentImageIndex + 1
                }/${service.carouselImages.length}`,
                currentImage
              );

              return (
                <motion.div
                  key={service.id}
                  className="services__tile"
                  variants={tileVariants}
                  style={{ "--service-color": service.color }}
                >
                  <div className="services__tile-image">
                    <div
                      className="services__tile-bg"
                      style={{
                        backgroundColor: service.color + "40", // Enhanced fallback color
                      }}
                    >
                      {/* Add actual img element for better mobile support */}
                      <img
                        src={currentImage}
                        alt={`${service.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="services__tile-img"
                        onLoad={() =>
                          console.log(
                            `Image loaded successfully: ${currentImage}`
                          )
                        }
                        onError={(e) => {
                          console.error(
                            `Failed to load image: ${currentImage}`
                          );
                          e.target.style.display = "none";
                          const fallback = e.target.nextElementSibling;
                          if (fallback) {
                            fallback.style.display = "block";
                          }
                        }}
                      />
                      <div
                        className="services__tile-fallback"
                        style={{
                          backgroundImage: `url(${currentImage})`,
                        }}
                      />

                      <div className="services__tile-overlay">
                        <div className="services__tile-icon">
                          <IconComponent />
                        </div>
                      </div>

                      {/* Individual Service Carousel Controls */}
                      <div className="services__tile-carousel-controls">
                        <motion.button
                          className="services__tile-carousel-btn services__tile-carousel-btn--prev"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevServiceSlide(service.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaChevronLeft />
                        </motion.button>

                        <motion.button
                          className="services__tile-carousel-btn services__tile-carousel-btn--next"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextServiceSlide(service.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaChevronRight />
                        </motion.button>
                      </div>

                      {/* Carousel Indicators */}
                      <div className="services__tile-carousel-indicators">
                        {service.carouselImages.map((_, index) => (
                          <motion.div
                            key={index}
                            className={`services__tile-carousel-indicator ${
                              index === currentImageIndex
                                ? "services__tile-carousel-indicator--active"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setServiceCarousels((prev) => ({
                                ...prev,
                                [service.id]: index,
                              }));
                            }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="services__tile-content">
                    <h3 className="services__tile-title">{service.title}</h3>
                    <p className="services__tile-subtitle">
                      {service.subtitle}
                    </p>
                    <div className="services__tile-stats">{service.stats}</div>
                  </div>

                  <motion.div
                    className="services__tile-glow"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Carousel Navigation */}
          <div className="services__carousel-nav">
            <motion.button
              className="services__nav-btn services__nav-btn--prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            <motion.button
              className="services__nav-btn services__nav-btn--next"
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Carousel Dots */}
          <div className="services__carousel-dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <motion.button
                key={index}
                className={`services__dot ${
                  index === currentSlide ? "services__dot--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.div
                  className="services__dot-fill"
                  animate={{
                    scale: index === currentSlide ? 1 : 0,
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaBook,
  FaChevronLeft,
  FaChevronRight,
  FaChild,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaHome,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import "./Services.scss";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Service data structure - you can add your images here
  const services = [
    {
      id: 1,
      title: "Education Support",
      subtitle: "Empowering through Knowledge",
      description:
        "Providing quality education, school supplies, and learning resources to underprivileged children. Our comprehensive education programs include after-school tutoring, computer literacy classes, and scholarship opportunities for deserving students.",
      icon: FaGraduationCap,
      image: "/placeholder-education.jpg", // Replace with your image path
      color: "#667eea",
      stats: "500+ Children Educated",
    },
    {
      id: 2,
      title: "Healthcare Services",
      subtitle: "Caring for Health & Wellness",
      description:
        "Offering medical check-ups, health camps, and basic healthcare support to communities in need. We organize regular health awareness programs, dental camps, and provide essential medicines to families who cannot afford them.",
      icon: FaHeartbeat,
      image: "/placeholder-healthcare.jpg", // Replace with your image path
      color: "#764ba2",
      stats: "1000+ Health Check-ups",
    },
    {
      id: 3,
      title: "Food Distribution",
      subtitle: "Nourishing Communities",
      description:
        "Regular food distribution programs to ensure no family goes hungry in our communities. We provide nutritious meals, food packages, and support local farmers to create sustainable food security programs.",
      icon: FaUtensils,
      image: "/placeholder-food.jpg", // Replace with your image path
      color: "#ff6b6b",
      stats: "2000+ Meals Served",
    },
    {
      id: 4,
      title: "Community Care",
      subtitle: "Supporting Families",
      description:
        "Comprehensive support programs for families including counseling and social welfare activities. We provide emotional support, family counseling, and help families access government benefits and resources.",
      icon: FaHandHoldingHeart,
      image: "/placeholder-community.jpg", // Replace with your image path
      color: "#4ecdc4",
      stats: "500+ Families Supported",
    },
    {
      id: 5,
      title: "Women Empowerment",
      subtitle: "Building Strong Women",
      description:
        "Skill development, vocational training, and empowerment programs for women in the community. We offer sewing classes, computer training, and micro-enterprise support to help women become financially independent.",
      icon: FaUsers,
      image: "/placeholder-women.jpg", // Replace with your image path
      color: "#45b7d1",
      stats: "200+ Women Empowered",
    },
    {
      id: 6,
      title: "Housing Support",
      subtitle: "Providing Shelter",
      description:
        "Assistance with housing repairs, construction support, and shelter for homeless families. We help with home repairs, provide construction materials, and support families in building safe and secure homes.",
      icon: FaHome,
      image: "/placeholder-housing.jpg", // Replace with your image path
      color: "#96ceb4",
      stats: "50+ Homes Repaired",
    },
    {
      id: 7,
      title: "Library Services",
      subtitle: "Knowledge Access",
      description:
        "Community libraries and reading programs to promote literacy and lifelong learning. We maintain community libraries, organize reading sessions, and provide books and educational materials to children and adults.",
      icon: FaBook,
      image: "/placeholder-library.jpg", // Replace with your image path
      color: "#feca57",
      stats: "3 Community Libraries",
    },
    {
      id: 8,
      title: "Child Development",
      subtitle: "Nurturing Young Minds",
      description:
        "Early childhood development programs, play activities, and child care support services. We focus on holistic child development through play-based learning, nutrition programs, and early intervention services.",
      icon: FaChild,
      image: "/placeholder-children.jpg", // Replace with your image path
      color: "#ff9ff3",
      stats: "300+ Children in Programs",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

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
    hover: {
      y: -15,
      scale: 1.08,
      rotateY: 8,
      rotateX: -5,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
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
              return (
                <motion.div
                  key={service.id}
                  className="services__tile"
                  variants={tileVariants}
                  whileHover="hover"
                  onClick={() => handleServiceClick(service)}
                  style={{ "--service-color": service.color }}
                >
                  <div className="services__tile-image">
                    <div
                      className="services__tile-bg"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundColor: service.color + "20", // Fallback color
                      }}
                    >
                      <div className="services__tile-overlay">
                        <div className="services__tile-icon">
                          <IconComponent />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="services__tile-content">
                    <h3 className="services__tile-title">{service.title}</h3>
                    <p className="services__tile-subtitle">
                      {service.subtitle}
                    </p>
                    <div className="services__tile-stats">{service.stats}</div>

                    <motion.div
                      className="services__tile-hover"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Click to learn more</span>
                    </motion.div>
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

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="services__modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="services__modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                style={{ "--service-color": selectedService.color }}
              >
                <button
                  className="services__modal-close"
                  onClick={() => setSelectedService(null)}
                >
                  ×
                </button>

                <div className="services__modal-image">
                  <div
                    className="services__modal-bg"
                    style={{
                      backgroundImage: `url(${selectedService.image})`,
                      backgroundColor: selectedService.color + "20",
                    }}
                  />
                </div>

                <div className="services__modal-content">
                  <div className="services__modal-icon">
                    {React.createElement(selectedService.icon)}
                  </div>
                  <h2>{selectedService.title}</h2>
                  <h3>{selectedService.subtitle}</h3>
                  <p>{selectedService.description}</p>
                  <div className="services__modal-stats">
                    {selectedService.stats}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;

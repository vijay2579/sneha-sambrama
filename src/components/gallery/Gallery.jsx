import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery data with images and messages
  const galleryItems = [
    {
      id: 1,
      image: "/src/assets/images/camp.jpeg",
      title: "Summer Camp 2023",
      message: "Empowering children through education and fun activities",
      category: "Education",
      date: "July 2023",
    },
    {
      id: 2,
      image: "/src/assets/images/kids.jpg",
      title: "Children's Day Celebration",
      message: "Spreading joy and creating lasting memories",
      category: "Events",
      date: "November 2023",
    },
    {
      id: 3,
      image: "/src/assets/images/girls.jpeg",
      title: "Women Empowerment Program",
      message: "Building confidence and skills for a brighter future",
      category: "Empowerment",
      date: "September 2023",
    },
    {
      id: 4,
      image: "/src/assets/images/king.jpeg",
      title: "Community Outreach",
      message: "Connecting with communities and understanding their needs",
      category: "Community",
      date: "August 2023",
    },
    {
      id: 5,
      image: "/src/assets/images/tej.jpeg",
      title: "Health Camp",
      message: "Providing healthcare services to underprivileged families",
      category: "Healthcare",
      date: "October 2023",
    },
    {
      id: 6,
      image: "/src/assets/images/sir.jpeg",
      title: "Teacher Training",
      message: "Enhancing teaching skills for better education delivery",
      category: "Education",
      date: "June 2023",
    },
    {
      id: 7,
      image: "/src/assets/images/stage1.jpeg",
      title: "Cultural Festival",
      message: "Celebrating diversity and promoting cultural understanding",
      category: "Culture",
      date: "December 2023",
    },
    {
      id: 8,
      image: "/src/assets/images/price.jpeg",
      title: "Award Ceremony",
      message: "Recognizing excellence and motivating students",
      category: "Recognition",
      date: "January 2024",
    },
    {
      id: 9,
      image: "/src/assets/images/QRCODE.jpeg",
      title: "Digital Literacy",
      message: "Bridging the digital divide through technology education",
      category: "Technology",
      date: "February 2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const tileVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <div className="gallery">
      <div className="container">
        {/* Header */}
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery__title">Our Gallery</h1>
          <p className="gallery__subtitle">
            Capturing moments of impact, joy, and transformation in our
            community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery__tile"
              variants={tileVariants}
              whileHover="hover"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery__tile-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery__tile-overlay">
                  <motion.div
                    className="gallery__tile-content"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <div className="gallery__tile-category">
                      {item.category}
                    </div>
                    <h3 className="gallery__tile-title">{item.title}</h3>
                    <p className="gallery__tile-message">{item.message}</p>
                    <div className="gallery__tile-date">{item.date}</div>
                    <div className="gallery__tile-cta">
                      <span>Click to view</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <motion.div
          className="gallery__modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedImage ? 1 : 0 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          style={{ pointerEvents: selectedImage ? "auto" : "none" }}
        >
          {selectedImage && (
            <motion.div
              className="gallery__modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery__modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <div className="gallery__modal-image">
                <img src={selectedImage.image} alt={selectedImage.title} />
              </div>

              <div className="gallery__modal-content">
                <div className="gallery__modal-category">
                  {selectedImage.category}
                </div>
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.message}</p>
                <div className="gallery__modal-date">{selectedImage.date}</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

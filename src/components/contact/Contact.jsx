import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Contact Information */}
          <motion.div
            className="contact__info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact__info-content">
                <h3>Our Location</h3>
                <p>123 Charity Street, Bangalore, Karnataka 560001</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">
                <FaPhone />
              </div>
              <div className="contact__info-content">
                <h3>Phone Number</h3>
                <p>+91 98765 43210</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">
                <FaEnvelope />
              </div>
              <div className="contact__info-content">
                <h3>Email Address</h3>
                <p>info@snehasambrama.org</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact__form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaUser className="contact__input-icon" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="contact__input"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaEnvelope className="contact__input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      required
                      className="contact__input"
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaPhone className="contact__input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="contact__input"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaEnvelope className="contact__input-icon" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="contact__input"
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-group">
                <div className="contact__input-wrapper">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    className="contact__textarea"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="contact__submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="contact__submit-loading">
                    <div className="contact__spinner"></div>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="contact__submit-success">
                    <FaCheckCircle />
                    Message Sent!
                  </span>
                ) : (
                  <span>
                    <FaPaperPlane />
                    Send Message
                  </span>
                )}
              </motion.button>
    </form>
          </motion.div>
        </div>
      </div>
  </section>
);
};

export default Contact;

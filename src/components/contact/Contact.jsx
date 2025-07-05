import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { ADDRESS, EMAIL, PHONE } from "../../utils";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      minLength: 10,
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
    },
  };

  // Validation messages
  const validationMessages = {
    name: {
      required: "Name is required",
      minLength: "Name must be at least 2 characters",
      maxLength: "Name must be less than 50 characters",
      pattern: "Name can only contain letters and spaces",
    },
    email: {
      required: "Email is required",
      pattern: "Please enter a valid email address",
    },
    phone: {
      required: "Phone number is required",
      pattern: "Please enter a valid phone number",
      minLength: "Phone number must be at least 10 digits",
    },
    subject: {
      required: "Subject is required",
      minLength: "Subject must be at least 5 characters",
      maxLength: "Subject must be less than 100 characters",
    },
    message: {
      required: "Message is required",
      minLength: "Message must be at least 10 characters",
      maxLength: "Message must be less than 1000 characters",
    },
  };

  // Validate single field
  const validateField = (name, value) => {
    const rules = validationRules[name];
    const messages = validationMessages[name];
    const fieldErrors = [];

    if (rules.required && !value.trim()) {
      fieldErrors.push(messages.required);
    }

    if (value && rules.minLength && value.length < rules.minLength) {
      fieldErrors.push(messages.minLength);
    }

    if (value && rules.maxLength && value.length > rules.maxLength) {
      fieldErrors.push(messages.maxLength);
    }

    if (value && rules.pattern && !rules.pattern.test(value)) {
      fieldErrors.push(messages.pattern);
    }

    return fieldErrors;
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const fieldErrors = validateField(field, formData[field]);
      if (fieldErrors.length > 0) {
        newErrors[field] = fieldErrors;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: [],
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    const fieldErrors = validateField(name, value);
    setErrors({
      ...errors,
      [name]: fieldErrors,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
      setTouched({});

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
                <p>{ADDRESS}</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">
                <FaPhone />
              </div>
              <div className="contact__info-content">
                <h3>Phone Number</h3>
                <p>{PHONE}</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">
                <FaEnvelope />
              </div>
              <div className="contact__info-content">
                <h3>Email Address</h3>
                <p>{EMAIL}</p>
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
                      onBlur={handleBlur}
                      placeholder="Your Full Name"
                      className={`contact__input ${
                        errors.name && touched.name
                          ? "contact__input--error"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.name && touched.name && (
                    <div className="contact__error-message">
                      <FaExclamationTriangle className="contact__error-icon" />
                      {errors.name[0]}
                    </div>
                  )}
                </div>

                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaEnvelope className="contact__input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email Address"
                      className={`contact__input ${
                        errors.email && touched.email
                          ? "contact__input--error"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="contact__error-message">
                      <FaExclamationTriangle className="contact__error-icon" />
                      {errors.email[0]}
                    </div>
                  )}
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
                      onBlur={handleBlur}
                      placeholder="Your Phone Number"
                      className={`contact__input ${
                        errors.phone && touched.phone
                          ? "contact__input--error"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="contact__error-message">
                      <FaExclamationTriangle className="contact__error-icon" />
                      {errors.phone[0]}
                    </div>
                  )}
                </div>

                <div className="contact__form-group">
                  <div className="contact__input-wrapper">
                    <FaEnvelope className="contact__input-icon" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Subject"
                      className={`contact__input ${
                        errors.subject && touched.subject
                          ? "contact__input--error"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.subject && touched.subject && (
                    <div className="contact__error-message">
                      <FaExclamationTriangle className="contact__error-icon" />
                      {errors.subject[0]}
                    </div>
                  )}
                </div>
              </div>

              <div className="contact__form-group">
                <div className="contact__input-wrapper">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows="6"
                    className={`contact__textarea ${
                      errors.message && touched.message
                        ? "contact__textarea--error"
                        : ""
                    }`}
                  />
                </div>
                {errors.message && touched.message && (
                  <div className="contact__error-message">
                    <FaExclamationTriangle className="contact__error-icon" />
                    {errors.message[0]}
                  </div>
                )}
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

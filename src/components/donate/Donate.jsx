import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaGlobe,
  FaHandHoldingHeart,
  FaHeart,
  FaMobile,
  FaQrcode,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import "./Donate.scss";

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [copiedField, setCopiedField] = useState(null);

  const paymentMethods = [
    {
      id: "bank",
      title: "Bank Transfer",
      icon: FaUniversity,
      color: "#4CAF50",
      details: {
        accountName: "Sneha Sambrama Charity Foundation",
        accountNumber: "1234567890",
        ifscCode: "SBIN0001234",
        bankName: "State Bank of India",
        branch: "Bangalore Main Branch",
      },
    },
    {
      id: "upi",
      title: "UPI Payment",
      icon: FaMobile,
      color: "#2196F3",
      details: {
        upiId: "snehasambrama@okicici",
        qrCode: "/qr-code-upi.png",
      },
    },
    {
      id: "gpay",
      title: "Google Pay",
      icon: FaMobile,
      color: "#4285F4",
      details: {
        phoneNumber: "+91 98765 43210",
        upiId: "snehasambrama@okicici",
      },
    },
    {
      id: "phonepay",
      title: "PhonePe",
      icon: FaMobile,
      color: "#5F259F",
      details: {
        phoneNumber: "+91 98765 43210",
        upiId: "snehasambrama@ybl",
      },
    },
  ];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
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
    <section id="donate" className="donate">
      <div className="container">
        <motion.div
          className="donate__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="donate__header-icon">
            <FaHeart />
          </div>
          <h2 className="donate__title">Support Our Cause</h2>
          <p className="donate__subtitle">
            Your generous donations help us create positive change in the
            community. Every contribution makes a difference in someone's life.
          </p>
        </motion.div>
        <motion.div
          className="donate__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="donate__methods">
            <h3 className="donate__methods-title">
              Choose Your Payment Method
            </h3>

            <div className="donate__methods-grid">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  className={`donate__method-card ${
                    selectedMethod === method.id
                      ? "donate__method-card--active"
                      : ""
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="donate__method-icon"
                    style={{ backgroundColor: method.color }}
                  >
                    <method.icon />
                  </div>
                  <h4>{method.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {selectedMethod && (
            <motion.div
              className="donate__details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="donate__details-header">
                <h3>
                  {paymentMethods.find((m) => m.id === selectedMethod)?.title}{" "}
                  Details
                </h3>
                <button
                  className="donate__close-btn"
                  onClick={() => setSelectedMethod(null)}
                >
                  ×
                </button>
              </div>

              <div className="donate__details-content">
                {selectedMethod === "bank" && (
                  <div className="donate__bank-details">
                    <div className="donate__detail-item">
                      <label>Account Name</label>
                      <div className="donate__detail-value">
                        <span>Sneha Sambrama Charity Foundation</span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              "Sneha Sambrama Charity Foundation",
                              "accountName"
                            )
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "accountName" ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="donate__detail-item">
                      <label>Account Number</label>
                      <div className="donate__detail-value">
                        <span>1234567890</span>
                        <button
                          onClick={() =>
                            copyToClipboard("1234567890", "accountNumber")
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "accountNumber" ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="donate__detail-item">
                      <label>IFSC Code</label>
                      <div className="donate__detail-value">
                        <span>SBIN0001234</span>
                        <button
                          onClick={() =>
                            copyToClipboard("SBIN0001234", "ifscCode")
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "ifscCode" ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="donate__detail-item">
                      <label>Bank Name</label>
                      <span>State Bank of India</span>
                    </div>

                    <div className="donate__detail-item">
                      <label>Branch</label>
                      <span>Bangalore Main Branch</span>
                    </div>
                  </div>
                )}

                {selectedMethod === "upi" && (
                  <div className="donate__upi-details">
                    <div className="donate__qr-section">
                      <div className="donate__qr-code">
                        <FaQrcode />
                        <p>Scan QR Code</p>
                      </div>
                    </div>

                    <div className="donate__detail-item">
                      <label>UPI ID</label>
                      <div className="donate__detail-value">
                        <span>snehasambrama@okicici</span>
                        <button
                          onClick={() =>
                            copyToClipboard("snehasambrama@okicici", "upiId")
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "upiId" ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {(selectedMethod === "gpay" ||
                  selectedMethod === "phonepay") && (
                  <div className="donate__mobile-details">
                    <div className="donate__detail-item">
                      <label>Phone Number</label>
                      <div className="donate__detail-value">
                        <span>+91 98765 43210</span>
                        <button
                          onClick={() =>
                            copyToClipboard("+91 98765 43210", "phoneNumber")
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "phoneNumber" ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="donate__detail-item">
                      <label>UPI ID</label>
                      <div className="donate__detail-value">
                        <span>
                          {selectedMethod === "gpay"
                            ? "snehasambrama@okicici"
                            : "snehasambrama@ybl"}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              selectedMethod === "gpay"
                                ? "snehasambrama@okicici"
                                : "snehasambrama@ybl",
                              "mobileUpiId"
                            )
                          }
                          className="donate__copy-btn"
                        >
                          {copiedField === "mobileUpiId" ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="donate__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="donate__stat-item" variants={itemVariants}>
            <FaUsers className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>10,000+</h3>
              <p>Lives Impacted</p>
            </div>
          </motion.div>

          <motion.div className="donate__stat-item" variants={itemVariants}>
            <FaHandHoldingHeart className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>₹50L+</h3>
              <p>Funds Raised</p>
            </div>
          </motion.div>

          <motion.div className="donate__stat-item" variants={itemVariants}>
            <FaGlobe className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>25+</h3>
              <p>Communities Served</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;

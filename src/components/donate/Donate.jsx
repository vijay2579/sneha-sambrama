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
import { BANK_DETAILS } from "../../utils";
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
        accountName: BANK_DETAILS.bank_account_holder_name,
        accountNumber: BANK_DETAILS.bank_account_number,
        ifscCode: BANK_DETAILS.bank_ifsc_code,
        bankName: BANK_DETAILS.bank_name,
        branch: BANK_DETAILS.bank_branch,
      },
    },
    {
      id: "upi",
      title: "UPI Payment",
      icon: FaMobile,
      color: "#2196F3",
      details: {
        upiId: BANK_DETAILS.bank_upi_id,
        qrCode: BANK_DETAILS.bank_qr_code,
      },
    },
    {
      id: "gpay",
      title: "Google Pay",
      icon: FaMobile,
      color: "#4285F4",
      details: {
        phoneNumber: BANK_DETAILS.bank_phone_number,
        upiId: BANK_DETAILS.bank_gpay_id,
      },
    },
    {
      id: "phonepay",
      title: "PhonePe",
      icon: FaMobile,
      color: "#5F259F",
      details: {
        phoneNumber: BANK_DETAILS.bank_phone_number,
        upiId: BANK_DETAILS.bank_phonepay_id,
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
                              BANK_DETAILS.bank_account_holder_name
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
                        <span>{BANK_DETAILS.bank_account_number}</span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              BANK_DETAILS.bank_account_number,
                              "accountNumber"
                            )
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
                        <span>{BANK_DETAILS.bank_ifsc_code}</span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              BANK_DETAILS.bank_ifsc_code,
                              "ifscCode"
                            )
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
                      <span>{BANK_DETAILS.bank_name}</span>
                    </div>

                    <div className="donate__detail-item">
                      <label>Branch</label>
                      <span>{BANK_DETAILS.bank_branch}</span>
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
                        <span>{BANK_DETAILS.bank_upi_id}</span>
                        <button
                          onClick={() =>
                            copyToClipboard(BANK_DETAILS.bank_upi_id, "upiId")
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
                        <span>{BANK_DETAILS.bank_phone_number}</span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              BANK_DETAILS.bank_phone_number,
                              "phoneNumber"
                            )
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
                            ? BANK_DETAILS.bank_gpay_id
                            : BANK_DETAILS.bank_phonepay_id}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              selectedMethod === "gpay"
                                ? BANK_DETAILS.bank_gpay_id
                                : BANK_DETAILS.bank_phonepay_id,
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
              <h3>10,00+</h3>
              <p>Lives Impacted</p>
            </div>
          </motion.div>

          <motion.div className="donate__stat-item" variants={itemVariants}>
            <FaHandHoldingHeart className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>₹5L+</h3>
              <p>Funds Raised</p>
            </div>
          </motion.div>

          <motion.div className="donate__stat-item" variants={itemVariants}>
            <FaGlobe className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>10+</h3>
              <p>Communities Served</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;

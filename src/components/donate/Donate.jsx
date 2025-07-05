import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaGlobe,
  FaHandHoldingHeart,
  FaHeart,
  FaMobile,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { BANK_DETAILS } from "../../utils";
import "./Donate.scss";

const Donate = () => {
  const [expandedMethod, setExpandedMethod] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [statsHovered, setStatsHovered] = useState(false);

  // Set stats to hovered state after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsHovered(true);
    }, 1000); // Apply hover effects 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  const paymentMethods = [
    {
      id: "bank",
      title: "Bank Transfer",
      subtitle: "Direct bank transfer",
      icon: FaUniversity,
      gradient: "linear-gradient(135deg, #4CAF50, #45a049)",
      details: {
        accountName: BANK_DETAILS.bank_account_holder_name,
        accountNumber: BANK_DETAILS.bank_account_number,
        ifscCode: BANK_DETAILS.bank_ifsc_code,
        bankName: BANK_DETAILS.bank_name,
        branch: BANK_DETAILS.bank_branch,
      },
    },
    {
      id: "digital",
      title: "Digital Payments",
      subtitle: "UPI, Google Pay & PhonePe",
      icon: FaMobile,
      gradient: "linear-gradient(135deg, #2196F3, #5F259F)",
      details: {
        upiId: BANK_DETAILS.bank_upi_id,
        qrCode: BANK_DETAILS.bank_qr_code,
        phoneNumber: BANK_DETAILS.bank_phone_number,
        gpayId: BANK_DETAILS.bank_gpay_id,
        phonepayId: BANK_DETAILS.bank_phonepay_id,
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
    hovered: {
      opacity: 1,
      y: -5,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const renderPaymentDetails = (method) => {
    switch (method.id) {
      case "bank":
        return (
          <div className="donate__method-details">
            <div className="donate__detail-item">
              <label>Account Name</label>
              <div className="donate__detail-value">
                <span>Sneha Sambrama Charity Foundation</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      BANK_DETAILS.bank_account_holder_name,
                      "accountName"
                    )
                  }
                  className="donate__copy-btn"
                >
                  {copiedField === "accountName" ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="donate__detail-row">
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
                    {copiedField === "accountNumber" ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>

              <div className="donate__detail-item">
                <label>IFSC Code</label>
                <div className="donate__detail-value">
                  <span>{BANK_DETAILS.bank_ifsc_code}</span>
                  <button
                    onClick={() =>
                      copyToClipboard(BANK_DETAILS.bank_ifsc_code, "ifscCode")
                    }
                    className="donate__copy-btn"
                  >
                    {copiedField === "ifscCode" ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>
            </div>

            <div className="donate__detail-row">
              <div className="donate__detail-item">
                <label>Bank Name</label>
                <span>{BANK_DETAILS.bank_name}</span>
              </div>

              <div className="donate__detail-item">
                <label>Branch</label>
                <span>{BANK_DETAILS.bank_branch}</span>
              </div>
            </div>
          </div>
        );

      case "digital":
        return (
          <div className="donate__method-details">
            {/* <div className="donate__qr-section">
              <div className="donate__qr-code">
                <FaQrcode />
                <p>Scan QR Code</p>
              </div>
            </div> */}

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
                  {copiedField === "phoneNumber" ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="donate__detail-row">
              <div className="donate__detail-item">
                <label>Google Pay ID</label>
                <div className="donate__detail-value">
                  <span>{BANK_DETAILS.bank_gpay_id}</span>
                  <button
                    onClick={() =>
                      copyToClipboard(BANK_DETAILS.bank_gpay_id, "gpayId")
                    }
                    className="donate__copy-btn"
                  >
                    {copiedField === "gpayId" ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>

              <div className="donate__detail-item">
                <label>PhonePe ID</label>
                <div className="donate__detail-value">
                  <span>{BANK_DETAILS.bank_phonepay_id}</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        BANK_DETAILS.bank_phonepay_id,
                        "phonepayId"
                      )
                    }
                    className="donate__copy-btn"
                  >
                    {copiedField === "phonepayId" ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
          <div className="donate__methods-grid">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                className="donate__method-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="donate__method-header">
                  <div
                    className="donate__method-icon"
                    style={{ background: method.gradient }}
                  >
                    <method.icon />
                  </div>
                  <div className="donate__method-info">
                    <h4>{method.title}</h4>
                    <p>{method.subtitle}</p>
                  </div>
                  <div className="donate__method-arrow">
                    <FaArrowRight />
                  </div>
                </div>

                <div className="donate__method-content">
                  {renderPaymentDetails(method)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="donate__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className={`donate__stat-item ${
              statsHovered ? "donate__stat-item--hovered" : ""
            }`}
            variants={itemVariants}
            animate={statsHovered ? "hovered" : "visible"}
          >
            <FaUsers className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>1,000+</h3>
              <p>Lives Impacted</p>
            </div>
          </motion.div>

          <motion.div
            className={`donate__stat-item ${
              statsHovered ? "donate__stat-item--hovered" : ""
            }`}
            variants={itemVariants}
            animate={statsHovered ? "hovered" : "visible"}
          >
            <FaHandHoldingHeart className="donate__stat-icon" />
            <div className="donate__stat-content">
              <h3>₹5L+</h3>
              <p>Funds Raised</p>
            </div>
          </motion.div>

          <motion.div
            className={`donate__stat-item ${
              statsHovered ? "donate__stat-item--hovered" : ""
            }`}
            variants={itemVariants}
            animate={statsHovered ? "hovered" : "visible"}
          >
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

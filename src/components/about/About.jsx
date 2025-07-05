import { motion } from "framer-motion";
import React from "react";
import {
  FaBullseye,
  FaEye,
  FaGem,
  FaHandshake,
  FaHeart,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import "./About.scss";
// Team images imports
import director1 from "../../assets/images/directors/person1.jpeg";
import director10 from "../../assets/images/directors/person10.jpeg";
import director2 from "../../assets/images/directors/person2.jpeg";
import director3 from "../../assets/images/directors/person3.jpeg";
import director4 from "../../assets/images/directors/person4.jpeg";
import director5 from "../../assets/images/directors/person5.jpeg";
import director6 from "../../assets/images/directors/person6.jpeg";
import director7 from "../../assets/images/directors/person7.jpeg";
import director8 from "../../assets/images/directors/person8.jpeg";
import director9 from "../../assets/images/directors/person9.jpeg";
import tejasvi from "../../assets/images/directors/tejasvi.jpeg";

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      description:
        "We serve with genuine care and empathy for every individual we help.",
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "We maintain the highest standards of transparency and ethical practices.",
    },
    {
      icon: FaUsers,
      title: "Community",
      description:
        "We believe in the power of collective action and community support.",
    },
    {
      icon: FaStar,
      title: "Excellence",
      description:
        "We strive for excellence in all our programs and initiatives.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Children Educated" },
    { number: "1000+", label: "Families Supported" },
    { number: "50+", label: "Communities Served" },
    { number: "10+", label: "Years of Service" },
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Main Content */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about__header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="about__title">About Sneha Sambrama</h1>
            <div className="about__subtitle">
              Charity Foundation (R.), Bhanuvalli
            </div>
          </motion.div>

          <motion.div
            className="about__main-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="about__intro">
              <strong>
                Sneha Sambrama Charity Foundation (R.), Bhanuvalli
              </strong>{" "}
              is built on the values of
              <span className="highlight"> selfless service</span> and{" "}
              <span className="highlight">community care</span>. Established in
              2010, our foundation has been actively involved in empowering
              underprivileged children with education, healthcare support, food
              distribution, and various social welfare activities.
            </p>

            <p className="about__mission">
              Our mission is driven by a spirit of{" "}
              <span className="highlight">compassion</span> and
              <span className="highlight"> dedication</span> to uplift society.
              We believe that every child deserves access to quality education,
              healthcare, and basic necessities. Through our comprehensive
              programs, we work tirelessly to create opportunities for growth,
              development, and a brighter future for the communities we serve.
            </p>
          </motion.div>

          {/* Mission, Vision, Values Section */}
          <motion.div
            className="about__mvp"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="about__mvp-grid">
              {/* Mission */}
              <motion.div
                className="about__mvp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="about__mvp-icon">
                  <FaBullseye />
                </div>
                <h3 className="about__mvp-title">Our Mission</h3>
                <p className="about__mvp-description">
                  To empower underprivileged children and families through
                  quality education, healthcare, and comprehensive support
                  programs, creating lasting positive change in communities.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="about__mvp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="about__mvp-icon">
                  <FaEye />
                </div>
                <h3 className="about__mvp-title">Our Vision</h3>
                <p className="about__mvp-description">
                  A world where every child has access to education, healthcare,
                  and opportunities to reach their full potential, building
                  stronger, more inclusive communities.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div
                className="about__mvp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="about__mvp-icon">
                  <FaGem />
                </div>
                <h3 className="about__mvp-title">Our Values</h3>
                <p className="about__mvp-description">
                  Compassion, integrity, community, and excellence guide
                  everything we do, ensuring we serve with genuine care while
                  maintaining the highest standards of ethical practices.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="about__values"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="about__section-title">Our Core Values</h2>
            <div className="about__values-grid">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="about__value-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="about__value-icon">
                      <IconComponent />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Meet Our Team Section */}
          <motion.div
            className="about__team"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="about__section-title">Meet Our Team</h2>
            <div className="about__team-featured-vertical">
              {/* Large tile for Tejasvi */}
              <motion.div
                className="about__team-tile about__team-tile--large"
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1, y: 0 },
                  hover: {
                    scale: 1.04,
                    y: -8,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <div className="about__team-img-wrapper about__team-img-wrapper--large">
                  <img src={tejasvi} alt="Tejasvi" />
                </div>
                <div className="about__team-info about__team-info--large">
                  <div className="about__team-name">
                    Shri Tejasvi Kattimani T R
                  </div>
                  <div className="about__team-role">President</div>
                </div>
              </motion.div>
              {/* Grid of smaller directors below */}
              <div className="about__team-small-grid">
                {[
                  { img: director1, name: "Director 1", role: "Board Member" },
                  { img: director2, name: "Director 2", role: "Board Member" },
                  { img: director3, name: "Director 3", role: "Board Member" },
                  { img: director4, name: "Director 4", role: "Board Member" },
                  { img: director5, name: "Director 5", role: "Board Member" },
                  { img: director6, name: "Director 6", role: "Board Member" },
                  { img: director7, name: "Director 7", role: "Board Member" },
                  { img: director8, name: "Director 8", role: "Board Member" },
                  { img: director9, name: "Director 9", role: "Board Member" },
                  {
                    img: director10,
                    name: "Director 10",
                    role: "Board Member",
                  },
                ].map((member, idx) => (
                  <motion.div
                    className="about__team-tile"
                    key={idx}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{
                      rest: { scale: 1, y: 0 },
                      hover: {
                        scale: 1.04,
                        y: -8,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                      },
                    }}
                  >
                    <div className="about__team-img-wrapper">
                      <img src={member.img} alt={member.name} />
                    </div>
                    <div className="about__team-info">
                      <div className="about__team-name">{member.name}</div>
                      <div className="about__team-role">{member.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

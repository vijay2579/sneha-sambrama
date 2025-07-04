import React from "react";
import "./Contact.scss";

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Us</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;

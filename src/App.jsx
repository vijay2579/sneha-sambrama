import React from "react";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Donate from "./components/donate/Donate";
import DonateFloat from "./components/donate/DonateFloat";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

const App = () => {
  const scrollToDonate = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          )
        ) || 80;
      const elementPosition = donateSection.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="gallery" className="section">
          <Gallery />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
        <section id="donate" className="section">
          <Donate />
        </section>
      </main>
      <DonateFloat onDonateClick={scrollToDonate} />
    </div>
  );
};

export default App;

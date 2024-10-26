import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(".icon-center");
      const scrollPosition = window.scrollY;
      logo.style.transform = `translateX(-50%) rotate(${scrollPosition}deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Welcome to Tech Fest 2024</h1>
          <p>Discover innovation and creativity!</p>
          <a href="#register" className="cta-button">
            Register Now
          </a>
        </div>
      </section>

      <section className="scrolling-text-container">
        <div className="horizontal-line"></div>
        <div className="scrolling-text">
          <div className="scrolling-text-item">Techyon!</div>
          <div className="scrolling-text-item">Techyon!</div>{" "}
          <div className="scrolling-text-item">Techyon!</div>
          <div className="scrolling-text-item">Techyon!</div>{" "}
          <div className="scrolling-text-item">Techyon!</div>
          <div className="scrolling-text-item">Techyon!</div>{" "}
          <div className="scrolling-text-item">Techyon!</div>
          <div className="scrolling-text-item">Techyon!</div>
        </div>
        <div className="horizontal-line">
          <img src="/icon.jpg" alt="Icon" className="icon-center" />
        </div>
      </section>
    </>
  );
};

export default Hero;

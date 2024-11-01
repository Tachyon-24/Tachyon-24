import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Hero.css";
import playButton from "../assests/playButton.svg";
import temple from "../assests/japanese-temple.png";

Modal.setAppElement("#root");

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = scrollPosition * 0.5; // Adjust the multiplier to control rotation speed
      document.documentElement.style.setProperty(
        "--rotation-angle",
        `${rotation}deg`
      );
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
          <div className="hero-buttons">
            <button
              className="lightbox-trailer"
              onClick={openModal}
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <div className="wrap-play-button position-relative">
                <div className="play-button border-light rounded-circle d-flex justify-content-center align-items-center">
                  <img
                    src={playButton}
                    alt="Play Button"
                    className="icon-play-button"
                  />
                </div>
                <div className="play-text text-light">WATCH PREVIOUS EVENT</div>
              </div>
            </button>
          </div>
          <h1 className="hero-title">Welcome!</h1>
          <p className="hero-subtitle">
            Welcome to the TechFest 2024 - The Tachyon!
          </p>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <iframe
            className="video-iframe"
            width="940"
            height="528"
            src="https://www.youtube.com/embed/jkM9uayDQfE?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </section>

      <section className="scrolling-text-container">
        <div className="horizontal-line"></div>
        <div className="scrolling-text">
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
        </div>
        <div className="horizontal-line"></div>
        <div className="icon-show">
        
            <img src={temple} alt="Icon" className="icon-center" />
          
        
        </div>
       
      </section>
    </>
  );
};

export default Hero;

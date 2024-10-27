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
          <div className="hero-buttons">
            <a
              href="#"
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
            </a>
          </div>
          <h1 className="hero-title">Welcome!</h1>
          <p className="hero-subtitle">
            Tachyon is Central India's largest technical fest. It is an endeavor
            to provide an outstanding platform for students to showcase their
            talent and skill sets in the fiercest of competitions.
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
          <div className="scrolling-text-item">Tachyon!</div>{" "}
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>{" "}
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>{" "}
          <div className="scrolling-text-item">Tachyon!</div>
          <div className="scrolling-text-item">Tachyon!</div>
        </div>
        <div className="horizontal-line">
          <img src="/icon.jpg" alt="Icon" className="icon-center" />
        </div>
      </section>
    </>
  );
};

export default Hero;

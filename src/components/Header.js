import React, { useState, useEffect } from "react";
import "./Header.css";
import headerLogo from "../assests/header-logo.png";

const Header = () => {
  const [fireActive, setFireActive] = useState(false);

  useEffect(() => {
    const fireTriggered = sessionStorage.getItem("fireTriggered");
    if (fireTriggered) {
      setFireActive(false); // Reset if already triggered in session
    }
  }, []);

  const handleDoubleClick = () => {
    if (!fireActive) {
      setFireActive(true); // Activate the fire effect
      sessionStorage.setItem("fireTriggered", "true");
      setTimeout(() => {
        setFireActive(false); // Stop the effect after 3 seconds
      }, 3000);
    }
  };

  return (
    <header className="header">
      <div className="logo" onDoubleClick={handleDoubleClick}>
        <img
          src={headerLogo}
          alt="Tachyon24"
          className={fireActive ? "fire-animation" : ""}
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useRef } from "react";
import "./FlipCard.css";

const FlipSlider = () => {
  const [activeTab, setActiveTab] = useState("CSE"); // Default active tab
  const marqueeRef = useRef(null); // Reference for the CSE card container

  const tabs = [
    {
      name: "CSE",
      content: [
        {
          imgSrc: "/1.jpeg",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/2.jpeg",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/3.jpeg",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/4.jpg",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/5.png",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/15.jpg",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        { imgSrc: "/6.jpg", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/8.jpg",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/14.jpg", logoSrc: "gg.png", title: "GFG", club: "GFG" },
        {
          imgSrc: "/1.jpeg",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/2.jpeg",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/3.jpeg",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/4.jpg",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/5.png",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/15.jpg",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        { imgSrc: "/6.jpg", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/8.jpg",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/14.jpg", logoSrc: "gg.png", title: "GFG", club: "GFG" },
      ],
    },
    {
      name: "CIVIL",
      content: [{ imgSrc: "/10.jpg", logoSrc: "/Civil.png", title: "CE" }],
    },
    {
      name: "CHEMICAL",
      content: [
        { imgSrc: "/11.webp", logoSrc: "CHEMICAL LOGO.png", title: "CHE" },
      ],
    },
    {
      name: "MECHANICAL",
      content: [{ imgSrc: "/12.jpg", logoSrc: "mes.png", title: "MES" }],
    },
    {
      name: "ELECTRONICS",
      content: [{ imgSrc: "/13.jpg", logoSrc: "Isf.png", title: "ISF" }],
    },
  ];

  const handleTabClick = (tabName) => setActiveTab(tabName);

  return (
    <div id="characters-section" className="characters_section">
      <div className="container">
        <div className="wrap_tabs_characters_home">
          <div className="tabs_menu_characters_home" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`item_tabs_characters_home ${
                  activeTab === tab.name ? "active" : ""
                }`}
                role="tab"
                aria-selected={activeTab === tab.name}
              >
                <div>{tab.name}</div>
              </button>
            ))}
          </div>

          <div className="tabs_content_characters_home">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`tab-pane ${activeTab === tab.name ? "active" : ""}`}
                role="tabpanel"
              >
                <h2 className="tab-title">{tab.name}</h2>
                <div
                  className={`card-container ${
                    tab.name === "CSE" ? "cse-marquee" : ""
                  }`}
                  ref={tab.name === "CSE" ? marqueeRef : null} // Only assign ref to CSE tab
                >
                  {tab.content.map((character, index) => (
                    <div key={index} className={`card card${index + 1}`}>
                      <a
                        href={`/events?branch=${tab.name}&club=${character.club}`}
                        className="card-link"
                      >
                        <div className="logo-box">
                          <img
                            src={character.logoSrc}
                            alt="Logo"
                            className="logo-image"
                          />
                        </div>
                        <div className="wrap_image_character_tabs">
                          <img
                            alt="character"
                            src={character.imgSrc}
                            className="image_character_tabs"
                          />
                        </div>
                        {character.title && (
                          <h3 className="card-title">{character.title}</h3>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipSlider;

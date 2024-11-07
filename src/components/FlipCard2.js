import React, { useState, useRef } from 'react';
import './FlipCard.css';

const FlipSlider = () => {
  const [activeTab, setActiveTab] = useState('CSE'); // Default active tab
  const marqueeRef = useRef(null); // Reference for the CSE card container

  const tabs = [
    {
      name: 'CSE',
      content: [
        { href: "/characters/tanjiro", imgSrc: "/1.jpeg", logoSrc: "dev.png", title: "CSI DEVELOPMENT" },
        { href: "/characters/tanjiro2", imgSrc: "/2.jpeg", logoSrc: "bitwise.png", title: "CSI BITWISE" },
        { href: "/characters/tanjiro3", imgSrc: "/3.jpeg", logoSrc: "botnet.png", title: "CSI BOTNET" },
        { href: "/characters/tanjiro4", imgSrc: "/4.jpg", logoSrc: "arvrmr.png", title: "VR AR MR " },
        { href: "/characters/tanjiro5", imgSrc: "/5.png", logoSrc: "MOZILLA.png", title: "MOZILLA" },
        { href: "/characters/tanjiro6", imgSrc: "/6.jpg", logoSrc: "rospinot.png", title: "ROSPINOT" },
        { href: "/characters/tanjiro7", imgSrc: "/14.jpg", logoSrc: "jdsc.png", title: "JDSC" },
        { href: "/characters/tanjiro6", imgSrc: "/8.jpg", logoSrc: "MMUIUX-BLACK.png", title: "CSI MULTIMEDIA" },
        { href: "/characters/tanjiro7", imgSrc: "/14.jpg", logoSrc: "gg.png", title: "GFG" },
        { href: "/characters/tanjiro", imgSrc: "/1.jpeg", logoSrc: "dev.png", title: "CSI DEVELOPMENT" },
        { href: "/characters/tanjiro2", imgSrc: "/2.jpeg", logoSrc: "bitwise.png", title: "CSI BITWISE" },
        { href: "/characters/tanjiro3", imgSrc: "/3.jpeg", logoSrc: "botnet.png", title: "CSI BOTNET" },
        { href: "/characters/tanjiro4", imgSrc: "/4.jpg", logoSrc: "arvrmr.png", title: "VR AR MR " },
        { href: "/characters/tanjiro5", imgSrc: "/5.png", logoSrc: "MOZILLA.png", title: "MOZILLA" },
        { href: "/characters/tanjiro6", imgSrc: "/6.jpg", logoSrc: "rospinot.png", title: "ROSPINOT" },
        { href: "/characters/tanjiro7", imgSrc: "/14.jpg", logoSrc: "jdsc.png", title: "JDSC" },
        { href: "/characters/tanjiro6", imgSrc: "/8.jpg", logoSrc: "MMUIUX-BLACK.png", title: "CSI MULTIMEDIA" },
        { href: "/characters/tanjiro7", imgSrc: "/14.jpg", logoSrc: "gg.png", title: "GFG" },
        
      ]
    },
    { name: 'CIVIL', content: [{ href: "/characters/zenitsu", imgSrc: "/10.jpg", logoSrc: "/Civil.png", title: "CE" }] },
    { name: 'CHEMICAL', content: [{ href: "/characters/inosuke", imgSrc: "/11.webp", logoSrc: "CHEMICAL LOGO.png", title: "CHE" }] },
    { name: 'MECHANICAL', content: [{ href: "/characters/tengen", imgSrc: "/12.jpg", logoSrc: "mes.png", title: "MES" }] },
    { name: 'ELECTRICAL', content: [{ href: "/characters/nezuko", imgSrc: "/13.jpg", logoSrc: "Isf.png", title: "ISF" }] },
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
                className={`item_tabs_characters_home ${activeTab === tab.name ? 'active' : ''}`}
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
                className={`tab-pane ${activeTab === tab.name ? 'active' : ''}`}
                role="tabpanel"
              >
                <h2 className="tab-title">{tab.name}</h2>
                <div
                  className={`card-container ${tab.name === 'CSE' ? 'cse-marquee' : ''}`}
                  ref={tab.name === 'CSE' ? marqueeRef : null} // Only assign ref to CSE tab
                >
                  {tab.content.map((character, index) => (
                    <div key={index} className={`card card${index + 1}`}>
                      <a href={character.href} className="card-link">
                        <div className="logo-box">
                          <img src={character.logoSrc} alt="Logo" className="logo-image" />
                        </div>
                        <div className="wrap_image_character_tabs">
                          <img alt="character" src={character.imgSrc} className="image_character_tabs" />
                        </div>
                        {character.title && <h3 className="card-title">{character.title}</h3>}
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

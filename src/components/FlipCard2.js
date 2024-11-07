import React, { useState, useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const [activeTab, setActiveTab] = useState('CSE'); // Default active tab
  const marqueeRef = useRef(null); // Reference for the CSE card container

  const tabs = [
    {
      name: 'CSE',
      content: [
        { href: "/characters/tanjiro", imgSrc: "/image13.png", logoSrc: "dev.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro2", imgSrc: "/image14.png", logoSrc: "CIVIL LOGO.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro3", imgSrc: "/image15.png", logoSrc: "csi-logo-white.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro4", imgSrc: "/image16.png", logoSrc: "arvrmr.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro5", imgSrc: "/image14.png", logoSrc: "MOZILLA.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro6", imgSrc: "/image13.png", logoSrc: "rospinot_logo.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro7", imgSrc: "/image12.png", logoSrc: "gdsc.png",title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro", imgSrc: "/image13.png", logoSrc: "dev.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro2", imgSrc: "/image14.png", logoSrc: "CIVIL LOGO.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro3", imgSrc: "/image15.png", logoSrc: "csi-logo-white.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro4", imgSrc: "/image16.png", logoSrc: "arvrmr.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro5", imgSrc: "/image14.png", logoSrc: "MOZILLA.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro6", imgSrc: "/image13.png", logoSrc: "rospinot_logo.png", title: "Tanjiro Kamado" },
        { href: "/characters/tanjiro7", imgSrc: "/image12.png", logoSrc: "gdsc.png", title: "Tanjiro Kamado" },
      ]
    },
    { name: 'CIVIL', content: [{ href: "/characters/zenitsu", imgSrc: "/image12.png", logoSrc: "/CIVIL LOGO.png", title: "Zenitsu Agatsuma" }] },
    { name: 'CHEMICAL', content: [{ href: "/characters/inosuke", imgSrc: "/image12.png", logoSrc: "CHEMICAL LOGO.png", title: "Inosuke Hashibira" }] },
    { name: 'MECHANICAL', content: [{ href: "/characters/tengen", imgSrc: "/image12.png", logoSrc: "mes.png", title: "Tengen Uzui" }] },
    { name: 'ELECTRICAL', content: [{ href: "/characters/nezuko", imgSrc: "/image12.png", logoSrc: "ELECTRICAL LOGO.png", title: "Nezuko Kamado" }] },
  ];

  const handleTabClick = (tabName) => setActiveTab(tabName);

  // Scroll functionality logic here (same as provided)

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
                        {/* Ensure title is conditionally rendered */}
                        {character.title && <h3 className="card-title">{character.title}</h3>}
                        <p className="about_character_tabs_home">{character.about}</p>
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

export default Slider;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Footer from "../components/Footer";
import groupImg from "../assests/last-techfest-group.jpeg";
import ImageSlider from "./AboutPagecomponents/ImageSlider";

const AboutPage = () => {
  const slides = [
    { url: "http://localhost:3000/image1.jpeg", title: "last-techfest-1" },
    { url: "http://localhost:3000/image2.jpeg", title: "last-techfest-2" },
    { url: "http://localhost:3000/image3.jpeg", title: "last-techfest-3" },
  ];

  // State to toggle Read More for each section
  const [readMoreState, setReadMoreState] = useState({
    detailsBox1: false,
    detailsBox2: false,
    detailsBox3: false
  });

  // Function to toggle Read More for a specific section
  const toggleReadMore = (section) => {
    setReadMoreState((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <>
      <section className='aboutpage'>
        <div className='details-box-1'>
          <div className='details-box-1-txt'>
            <span>About Tachyon24</span>
            <p>
              JUET's annual techfest, running from March 25th to 28th, invites bright minds and future leaders to explore this year's theme, "Future Frontiers." 
              {/* <span className="dots">{readMoreState.detailsBox1 ? '' : '...'}</span>
              <span className="more-text" style={{ display: readMoreState.detailsBox1 ? 'inline' : 'none' }}>
                {' '}The festival will feature hands-on workshops, exhibitions, and talks by industry leaders, focusing on innovations in AI, sustainable tech, and more. Whether you're a student, innovator, or enthusiast, join us to push boundaries, connect with others, and shape the future together!
              </span> */}
            </p>
            {/* <button onClick={() => toggleReadMore("detailsBox1")} id="read-more-btn">
              {readMoreState.detailsBox1 ? "Read Less" : "Read More"}
            </button> */}
          </div>
          <div className='details-box-1-img'>
            <img id="details-box-1-img" src={groupImg} alt="Group from last techfest" />
          </div>
        </div>
        
        <div className='details-box-2'>
          <div className='details-box-2-bubbles'>
            <div className='bubbles-top'>
              <div className='num-txt'>50+</div>
              <div className='type-txt'>Events</div>
            </div>
            <div className='bubbles-middle'>
              <div className='num-txt'>100+</div>
              <div className='type-txt'>Speakers</div>
            </div>
            <div className='bubbles-bottom'>
              <div className='num-txt'>10,000+</div>
              <div className='type-txt'>Participants</div>
            </div>
          </div>
          <div className='details-box-2-txt'>
            <span>Further Details</span>
            <p>
            &#x2022; Open For All, Registor now !!<br></br> 
            &#x2022; Main Highlights : <br></br>
              &nbsp;&nbsp;&nbsp; &#x2022; XYZ Speaker at Tagor Hall on 15th October <br></br>
              &nbsp;&nbsp;&nbsp; &#x2022; Robot Creation at AB Coridor on 16th October <br></br>
              {/* <span className="dots">{readMoreState.detailsBox2 ? '' : '...'}</span>
              <span className="more-text" style={{ display: readMoreState.detailsBox2 ? 'inline' : 'none' }}>
                {' '}The festival will feature hands-on workshops, exhibitions, and talks by industry leaders, focusing on innovations in AI, sustainable tech, and more. Whether you're a student, innovator, or enthusiast, join us to push boundaries, connect with others, and shape the future together!
              </span> */}
            </p>
            {/* <button onClick={() => toggleReadMore("detailsBox2")} id="read-more-btn">
              {readMoreState.detailsBox2 ? "Read Less" : "Read More"}
            </button> */}
          </div>
        </div>
        
        <div className='details-box-3'>
          <div className='details-box-3-image-slider'>
            <span>Memories</span>
            <div className="containerStyles">
              <ImageSlider slides={slides} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;

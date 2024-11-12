import React, { useState } from "react";
import "./speakerspage.css";
import Footer from "../components/Footer";

const SpeakerSpage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleInfo = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <>
      <section className="speakerspage">
        <div className="title">Our Speakers</div>
        <div className="carddiv">
          <div className="contentdiv">
            <div className="halfspeakercard1"></div>

            <div className="speakercard1" onClick={() => toggleInfo(1)}>
              {activeCard === 1 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./bhoomiksharma.jpg" alt="speakerimg1" />
                  <span>Bhoomik Sharma</span>
                  <span>Team Lead @Wipro</span>
                  <a href="https://www.linkedin.com/in/bhoomik-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="speakercard1" onClick={() => toggleInfo(2)}>
              {activeCard === 2 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./shubhangi.jpg" alt="speakerimg1" />
                  <span>shubhangi Bhargava</span>
                  <span>Manager @HSBC</span>
                  <a href="https://www.linkedin.com/in/shubhangi-bhargava-3270a7125?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(3)}>
              {activeCard === 3 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="halfspeakercard2"></div>
          </div>

          <div className="contentdiv">
            <div className="speakercard2" onClick={() => toggleInfo(4)}>
              {activeCard === 4 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./AAGAMJAIN.jpg" alt="speakerimg1" />
                  <span>Aagam jain</span>
                  <span>Software Engineer @Goldman Sachs</span>
                  <a href="https://www.linkedin.com/in/aagam-jain-a47144176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard2" onClick={() => toggleInfo(5)}>
              {activeCard === 5 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp2.png" alt="speakerimg1" />
                  <span>Jane Doe</span>
                  <span>AI Engineer @Meta</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard2" onClick={() => toggleInfo(6)}>
              {activeCard === 6 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp2.png" alt="speakerimg1" />
                  <span>Jane Doe</span>
                  <span>AI Engineer @Meta</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="contentdiv">
            <div className="halfspeakercard1"></div>

            <div className="speakercard1" onClick={() => toggleInfo(7)}>
              {activeCard === 7 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./riteshyadav.jpg" alt="speakerimg1" />
                  <span>Ritesh Yadav</span>
                  <span>Data Scientist @Intellectai</span>
                  <a href="https://www.linkedin.com/in/ritesh-yadav2011?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="speakercard1" onClick={() => toggleInfo(8)}>
              {activeCard === 8 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(9)}>
              {activeCard === 9 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="halfspeakercard2"></div>
          </div>

          <div className="contentdivmobile">
            <div className="halfspeakercard1"></div>
            <div className="speakercard1" onClick={() => toggleInfo(1)}>
              {activeCard === 1 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(2)}>
              {activeCard === 2 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(3)}>
              {activeCard === 3 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(4)}>
              {activeCard === 4 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(5)}>
              {activeCard === 5 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(6)}>
              {activeCard === 6 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(7)}>
              {activeCard === 7 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(8)}>
              {activeCard === 8 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="speakercard1" onClick={() => toggleInfo(9)}>
              {activeCard === 9 ? (
                <div className="sessioninfo">
                  <span>This is what will be done</span>
                </div>
              ) : (
                <div className="personinfo">
                  <img src="./pfp1.png" alt="speakerimg1" />
                  <span>Andrew Hubert</span>
                  <span>MLops @Google</span>
                  <a href="https://www.linkedin.com/in/pushkar-chaturvedi-a83778284/">
                    <img
                      id="linkdinlogo"
                      src="./linkdinlogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              )}
            </div>

            <div className="halfspeakercard2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SpeakerSpage;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import { MapPin ,Clock4} from 'lucide-react';
import Footer from "../components/Footer";

const eventsData = { 
  "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Bazzinga", description: "Rospinot fun maze solving challenge for robots", venue: "AB Corridor" , image: "./eventgame1.jpeg" , time:"17th,  10:00 AM " },
      { id: 2, name: "Cicada 036", description: "A mysterious online puzzle, with complex cryptography and intelligence clues", venue: "LT-2", image: "./eventgame2.jpeg", time:"16th , 2:00 PM - 6:00 PM"},
      { id: 3, name: "Robo Soccer", description: "Robots compete to score goals on the field", venue: "AB Corridor", image: "/eventgame.png" ,time:"16th, 6:00 PM - 8:00 PM" },
      { id: 4, name: "The Escape Room", description: "Robots race to solve clues and escape", venue: "AB Corridor", time:"17th, 10:00 AM" },
    ],
    "CSI-Bitwise": [
      { id: 5, name: "Blind Code", description: "Test your coordination in a challenging blindfolded coding relay", venue: "CL-3 & CL-5", image: "./eventgame3.jpeg", time: "16th, 2:00 PM - 4:00 PM" },
      { id: 6, name: "Code Mania", description: "Multiple round coding event", venue: "Online", image: "./eventgame4.jpeg", time: "15th, 7:00 PM - 10:00 PM" },
      { id: 7, name: "Newbie Code", description: "Kodeathon for freshman year", venue: "CL (ALL)", time: "17th, 10:00 AM - 12:00 PM" },
    ],
    "CSI-Development": [
      { id: 8, name: "Hack Sprint", description: "Code against the clock to solve real-world problems (Hackathon)", venue: "MPH", image: "./eventgame5.jpeg", time: "16th, 9:00 PM - 12:00 AM" },
      { id: 9, name: "Code Relay", description: "Collaborate seamlessly to tackle coding challenges in relay style", venue: "LT-1", image: "./eventgame1.jpeg", time: "17th, 4:00 PM - 6:00 PM" },
      { id: 10, name: "Smash Kart.io", description: "Gaming event", venue: "LT-2", time: "15th, 7:00 PM - 8:00 PM" },
    ],
    "CSI-Botnet": [
      { id: 11, name: "Cryptic Hunt", description: "Decode and debug your way through a cryptic, beginner-friendly hunt", venue: "CL-4", image: "./eventgame2.jpeg", time: "17th, 3:00 PM - 4:00 PM" },
      { id: 12, name: "Chakravyuh - CTF", description: "Puzzle event based on cyber security", venue: "Online", image: "./eventgame3.jpeg", time: "15th, 9:00 PM - 11:00 PM" },
      { id: 13, name: "Phishers", description: "Breaking the code", venue: "Lab 2" },
    ],
    "CSI-MM&UI/UX": [
      { id: 14, name: "GLITCH", description: "E-sports zone", venue: "LT-5", image: "./eventgame5.jpeg", time: "17th, 12:00 PM" },
      { id: 15, name: "ARCADE BOX", description: "A fun retro game base console system for reliving the old games era", venue: "Nehru Plaza", image: "./eventgame4.jpeg", time: "16th, 1:00 PM - 4:00 PM" },
      { id: 16, name: "TYPOLYMPICS", description: "Speed typing event in which various body parts are used for typing sentences", venue: "CL-3", time: "16th, 4:00 PM -  5:00 PM" },
      { id: 17, name: "COMICSTER", description: "Quick development challenge", venue: "Lab 2" },
    ],
    "JDSC": [
      { id: 18, name: "CSS Lottery", description: "Showcase your CSS skills in a fast-paced digital lottery", venue: "LT-1", image: "./eventgame1.jpeg", time: "16th, 2:00 PM - 3:00 PM" },
      { id: 19, name: "Steganofy", description: "Hide and uncover secret messages using steganography techniques", venue: "LT-3", image: "./eventgame2.jpeg", time: "15th, 8:00 PM - 9:00 PM" },
      { id: 20, name: "Image Imagine", description: "Generate and transform images based on unique prompts", venue: "LT-1", time: "17th, 12:00 PM" }
    ],
    "VR AR MR": [
      { id: 21, name: "Cow Boy Shooter", description: "VR shooting game", venue: "VR Lab", image: "./eventgame3.jpeg" },
      { id: 22, name: "AR Treasure Hunt", description: "AR-based treasure hunt", venue: "Campus Wide", image: "./eventgame4.jpeg" },
      { id: 23, name: "2D-Game", description: "VR pong game", venue: "VR Lab" },
    ],
    "GFG": [
      { id: 24, name: "Query Quest", description: "SQL query challenge", venue: "LT-6", image: "./eventgame1.jpeg", time: "17th, 3:30 PM - 5:00 PM" },
      { id: 25, name: "Brain Teaser", description: "Aptitude test and quiz", venue: "LT-1", image: "./eventgame2.jpeg", time: "16th, 6:00 PM - 7:30 PM" },
      { id: 26, name: "Spot The Brand", description: "Quiz competition", venue: "Lab 3" },
    ],
    "Mozilla": [
      { id: 27, name: "War For Trezor", description: "Web security challenge", venue: "Online", image: "./eventgame3.jpeg", time: "16th, 9:00 PM - 11:00 PM" },
      { id: 28, name: "Website Pixel Art", description: "Fun event where students have to find correct answers for problems", venue: "Online", image: "./eventgame4.jpeg", time: "15th, 9:00 PM - 11:00 PM" },
      { id: 29, name: "Hack in a Box", description: "Online coding challenge for beginners with a virtual 'mystery box' of prompts, APIs, and fun twists", venue: "Online", image: "./eventgame5.jpeg", time: "17th, 9:00 PM - 11:00 PM" }
    ]
  },
  "ECE": [
    { id: 30, name: "Robo War", description: "Robot combat challenge", venue: "Arena", image: "./eventgame5.jpeg" },
    { id: 31, name: "Laser Tag", description: "Event in dark where you have to find the right path for your laser", venue: "In front of ISF Room", image: "./eventgame1.jpeg" },
    { id: 32, name: "Robo Race", description: "A high-speed race where robots navigate challenging tracks to the finish line", venue: "Chhota Mandir" },
    { id: 33, name: "Maze Bot", description: "Navigate unseen twists in the ultimate maze challenge", venue: "In front of Tuck 1" },
    { id: 34, name: "Pinball", description: "Robotics challenge", venue: "Arena" },
    { id: 35, name: "Junkyard War", description: "Treasure hunt to create something unique by finding hidden tools", venue: "In front of ISF room" },
    { id: 36, name: "Exhibition", description: "Robotics challenge", venue: "Arena" },
  ],
  "MECHANICAL": [
    { id: 37, name: "Hawkeye Bow", description: "Mechanical bow design", venue: "Workshop", image: "./eventgame2.jpeg" },
    { id: 38, name: "Hydraulic Arms", description: "Hydraulic system design", venue: "Lab", image: "./eventgame3.jpeg" },
    { id: 39, name: "Assembling Gear", description: "A speed test competition for assembling and de-assembling of gearbox", venue: "MES Club" },
    { id: 40, name: "Waterjet", description: "Mechanical bow design", venue: "Workshop" },
    { id: 41, name: "Spring Suspension Car", description: "Event in which basic principles of elasticity will be used to make cars", venue: "MES Club" },
    { id: 42, name: "DIY Engineering Competition", description: "Showcasing your coordination and engineering skills", venue: "MES Club" },
    { id: 43, name: "Making Traffic Lights with Arduino + Hydraulic Arm", description: "Science Exhibition", venue: "AB Corridor" },
  ],
  "CIVIL": [
    { id: 44, name: "BOB the Builder", description: "Construction challenge", venue: "Field", image: "./eventgame4.jpeg" },
    { id: 45, name: "TIC TAC TOE", description: "Strategic building game", venue: "Lab", image: "./eventgame5.jpeg" },
    { id: 46, name: "Float The Ball", description: "A team event to create a seamless pathway for a ball using coordinated pipe movements.", venue: "Nehru Plaza" },
    { id: 47, name: "Clay Modelling", description: "Craft and shape unique designs with clay this artistic challenge", venue: "CE Dept" },
    { id: 48, name: "DEFYROULETTE", description: "Scan Virtual card in AR to complete thrilling real-world dare", venue: "Nehru Plaza" },
  ],
  "CHEMICAL": [
    { id: 49, name: "Flame Fun", description: "Colourful flames from different salts", venue: "AB Corridor", image: "./eventgame1.jpeg" },
    { id: 50, name: "Litmus Art", description: "Using the properties of turmeric powder, letting people draw on plain canvas", venue: "AB Corridor", image: "./eventgame2.jpeg" },
    { id: 51, name: "Non-Newtonian Fluid", description: "Your force matters", venue: "Lab" },
    { id: 52, name: "Chemical Chameleon", description: "Color change automation by titration", venue: "Lab" },
    { id: 53, name: "Lava Lamp", description: "Miniature volcano by different chemicals", venue: "Lab" },
    { id: 54, name: "Racing Car", description: "Fun event in which chemical compounds will be used as fuel for racing cars", venue: "In front of Tuck-2" },
  ]
};

const branchIcons = {
  'CSE': '💻',
  'ECE': '⚡',
  'MECHANICAL': '⚙️',
  'CIVIL': '🏗️',
  'CHEMICAL': '🧪'
};

const extendedDescriptions = { 
  1: "Test your skills in communicating ideas without words in this unique Robot Charades event, where robots mimic actions for participants to guess.",
  2: "A fast-paced Robo Soccer competition where bots collide on the field for victory. Navigate, tackle, and score in a challenging arena.",
  // More extended descriptions...
};

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const branch = params.get('branch');
    const club = params.get('club');
    const eventId = params.get('event');

    if (branch) {
      setSelectedBranch(branch);
      if (club) {
        setSelectedClub(club);
        if (eventId) {
          const branchData = eventsData[branch];
          let event;
          if (club && branchData[club]) {
            event = branchData[club].find(e => e.id === parseInt(eventId));
          } else if (Array.isArray(branchData)) {
            event = branchData.find(e => e.id === parseInt(eventId));
          }
          setSelectedEvent(event || null);
        } else {
          setSelectedEvent(null);
        }
      } else {
        setSelectedClub(null);
        setSelectedEvent(null);
      }
    } else {
      setSelectedBranch(null);
      setSelectedClub(null);
      setSelectedEvent(null);
    }
  }, [location.search]);

  const updateHistory = (branch, club = null, event = null) => {
    const params = new URLSearchParams();
    if (branch) params.set('branch', branch);
    if (club) params.set('club', club);
    if (event) params.set('event', event.id.toString());
    navigate(`?${params.toString()}`, { replace: false });
  };

  const handleBranchClick = (branch) => {
    if (branch === selectedBranch) {
      setSelectedBranch(null);
      setSelectedClub(null);
      setSelectedEvent(null);
      navigate('', { replace: false });
    } else {
      setSelectedBranch(branch);
      setSelectedClub(null);
      setSelectedEvent(null);
      updateHistory(branch);
    }
  };

  const handleClubClick = (club) => {
    if (club === selectedClub) {
      setSelectedClub(null);
      setSelectedEvent(null);
      updateHistory(selectedBranch);
    } else {
      setSelectedClub(club);
      setSelectedEvent(null);
      updateHistory(selectedBranch, club);
    }
  };

  const toggleCardFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderBranches = () => (
    <div className="branches-container">
      {Object.keys(eventsData).map((branch) => (
        <div
          key={branch}
          className="branch-card"
          onClick={() => handleBranchClick(branch)}
        >
          <h2>{branch}</h2>
          <div>{branchIcons[branch]}</div>
          <p>{Array.isArray(eventsData[branch]) ? `${eventsData[branch].length} Events` : `${Object.keys(eventsData[branch]).length} Clubs`}</p>
        </div>
      ))}
    </div>
  );

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className={`event-card main-event ${flippedCards[event.id] ? 'flipped' : ''}`}
      onClick={() => toggleCardFlip(event.id)}
    >
      <div className="card-front">
        <img src={event.image} alt={event.name} />
        <h3>{event.name}</h3>
        <p>{event.venue}</p>
      </div>
      <div className="card-back">
      <h3>{event.name}</h3>
      <p className='event-p'>{event.venue}</p>
        <p><strong>Description:</strong>{extendedDescriptions[event.id] || event.description}</p>
      </div>
    </div>
  );

  const renderEventsBox = (events) => (
    <div className="events-box">
      <h3 className="other-events" style={{marginBottom:'-0.5%'}}>Other Events</h3>
      <hr style={{width:'100%'}}></hr>
      <div className="event-boxes-container">
        {events.length === 0 ? (
          <p>No upcoming events available at the moment.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-box">
              <div className="event-box-header">
                <h4>{event.name}</h4>
              </div>
              <p style={{marginTop:'-10%'}}><strong>Description:</strong> {event.description || 'No description available.'}</p>
              <p><strong><MapPin/></strong> {event.venue || 'Venue details unavailable.'}</p>
              <span className="event-time" ><Clock4/><span style={{marginLeft:'10px'}}>{event.time || 'TBA'}</span></span>
          
            </div>
          ))
        )}
      </div>
    </div>
  );
  

  const renderEvents = (events) => {
    const mainEvents = events.slice(0, 2);
    const remainingEvents = events.slice(2);

    return (
      <div className="events-container">
        <h2>
          {selectedEvent
            ? `Event: ${selectedEvent.name}`
            : selectedClub
            ? `Club: ${selectedClub}`
            : `${selectedBranch} Events`}
        </h2>
        <div className="events-grid">
          {mainEvents.map(renderEventCard)}
        </div>
        {remainingEvents.length > 0 && renderEventsBox(remainingEvents)}
      </div>
    );
  };

  const renderContent = () => {
    if (!selectedBranch) return renderBranches();
    const branchData = eventsData[selectedBranch];
    if (Array.isArray(branchData)) return renderEvents(branchData);

    if (!selectedClub) {
      return (
        <div className="clubs-container">
          {Object.keys(branchData).map((club) => (
            <div
              key={club}
              className="club-card"
              onClick={() => handleClubClick(club)}
            >
              <h3>{club}</h3>
              <p>{branchData[club].length} Events</p>
            </div>
          ))}
        </div>
      );
    }

    const events = branchData[selectedClub];
    return renderEvents(events);
  };

  return (
    <div className="events-page">
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Events;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import Footer from "../components/Footer";

const eventsData = { 
  "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Charades", description: "Interactive robot charades competition", venue: "Lab 1", image: "/eventgame.png" },
      { id: 2, name: "Robo War", description: "Robot combat challenge", venue: "Arena", image: "/eventgame.png" },
      { id: 3, name: "Robo Bazzinga", description: "Robot rally challenge", venue: "Arena" },
      { id: 4, name: "The Escape Room", description: "Robot basketball challenge", venue: "Arena" },
      { id: 5, name: "Simulation Gaming Tournament", description: "Robot soccer challenge", venue: "Arena" },
    ],
    "CSI-Bitwise": [
      { id: 6, name: "Blind Code", description: "Coding without seeing the output", venue: "Lab 1", image: "/eventgame.png"  },
      { id: 7, name: "Code Mania", description: "Competitive coding event", venue: "Lab 1", image: "/eventgame.png" },
      { id: 8, name: "Newbie Code", description: "Code golf challenge", venue: "Lab 1" },
    ],
    "CSI-Development": [
      { id: 9, name: "Hack Sprint", description: "Quick development challenge", venue: "Lab 2", image: "/eventgame.png"  },
      { id: 10, name: "Code Relay", description: "Team coding relay", venue: "Lab 2", image: "/eventgame.png" },
      { id: 11, name: "Smash Kart.io", description: "Quick development challenge", venue: "Lab 2"},
    ],
    "CSI-Botnet": [
      { id: 12, name: "Cryptic Hunt", description: "Cryptography challenge", venue: "Lab 2", image: "/eventgame.png" },
      { id: 13, name: "CTF", description: "Capture The Flag security event", venue: "Lab 2", image: "/eventgame.png" },
      { id: 14, name: "Phishers", description: "Breaking the code", venue: "Lab 2" },
    ],
    "CSI-MM&UI/UX": [
      { id: 15, name: "GLITCH", description: "UI/UX design challenge", venue: "Design Lab", image: "/eventgame.png" },
      { id: 16, name: "ARCADE BOX", description: "Interactive design competition", venue: "Lab 2", image:"/eventgame.png" },
      { id: 17, name: "TYPOLYMPICS", description: "UI/UX design competition", venue: "Lab 2" },
      { id: 18, name: "COMICSTER", description: "Quick development challenge", venue: "Lab 2" },
    ],
    "JDSC": [
      { id: 19, name: "CSS Lottery", description: "CSS styling challenge", venue: "Lab 3", image: "/eventgame.png"  },
      { id: 20, name: "Steganofy", description: "Steganography event", venue: "Lab 3", image:"/eventgame.png" },
      { id: 21, name: "Image Imagine", description: "UI/UX design competition", venue: "Lab 3"}
    ],
    "VR AR MR": [
      { id: 22, name: "Cow Boy Shooter", description: "VR shooting game", venue: "VR Lab", image: "/eventgame.png" },
      { id: 23, name: "AR Treasure Hunt", description: "AR-based treasure hunt", venue: "Campus Wide", image: "/eventgame.png" },
      { id: 24, name: "2D-Game", description: "VR pong game", venue: "VR Lab"},
    ],
    "GFG": [
      { id: 25, name: "Query Quest", description: "Database query challenge", venue: "Lab 3", image: "/eventgame.png"  },
      { id: 26, name: "Brain Teaser", description: "Logic puzzle competition", venue: "Lab 3", image: "/eventgame.png" },
      { id: 27, name: "Spot The Brand", description: "Quiz competition", venue: "Lab 3" },
      
    ],
    "Mozilla": [
      { id: 28, name: "War For Trezor", description: "Web security challenge", venue: "Lab 3", image: "/eventgame.png" },
      { id: 29, name: "Website Pixel Art", description: "Web design competition", venue: "Lab 3", image:"/eventgame.png" }
    ]
  },
  "ECE": [
    { id: 30, name: "Robo War", description: "Robot combat challenge", venue: "Arena",image: "/eventgame.png" },
    { id: 31, name: "Laser Tag", description: "Electronic laser tag game", venue: "Field", image: "/eventgame.png" },
    { id: 32, name: "Robo Race", description: "Block-based game", venue: "Arena" },
    { id: 33, name: "Maze Bot", description: "Electronic laser tag game", venue: "Field"},
    { id: 34, name: "Pinball", description: "Robotics challenge", venue: "Arena" },
    { id: 35, name: "Junkyar War", description: "Robot racing challenge", venue: "Arena"},
    { id: 36, name: "Exibition", description: "Robotics challenge", venue: "Arena"},
   
  ],
  "MECHANICAL": [
    { id: 37, name: "Hawkeye Bow", description: "Mechanical bow design", venue: "Workshop", image: "/eventgame.png"  },
    { id: 38, name: "Hydraulic Arms", description: "Hydraulic system design", venue: "Lab", image: "/eventgame.png" },
    { id: 39, name: "Assembling Gear", description: "Mechanical challenge", venue: "Arena"},
    { id: 40, name: "Waterjet", description: "Mechanical bow design", venue: "Workshop"},
    { id: 41, name: "Spring Suspension Car", description: "Mechanical challenge", venue: "Arena"},
    { id: 42, name: "DIY Enfineering Competition", description: "Mechanical bow design", venue: "Workshop"},
    { id: 43, name: "Making Traffic Lights and with Arduino + train", description: "Hydraulic system design", venue: "Lab" },
   
  ],
  "CIVIL": [
    { id: 44, name: "BOB the Builder", description: "Construction challenge", venue: "Field", image:"/eventgame.png"  },
    { id: 45, name: "TIC TAC TOE", description: "Strategic building game", venue: "Lab", image: "/eventgame.png" },
    { id: 46, name: "Float The Ball", description: "Construction challenge", venue: "Field",  },
    { id: 47, name: "Clay Modelling", description: "Construction challenge", venue: "Field",  },
    { id: 48, name: "DEFYROUE", description: "Construction challenge", venue: "Field", },
  ],
  "CHEMICAL":[
      { id: 49, name: "Flame Fun", description: "Chemical reaction demonstration", venue: "Lab", image: "/eventgame.png" },
      { id: 50, name: "Litmus Art", description: "pH indicator art", venue: "Lab", image: "/eventgame.png" },
      { id: 51, name: "Non-Newtonian Fluid", description: "Chemical reaction demonstration", venue: "Lab" },
      { id: 52, name: "Chemical Chameleon", description: "pH indicator art", venue: "Lab" },
      { id: 53, name: "Lava Lamp", description: "Chemical reaction demonstration", venue: "Lab" },
      { id: 54, name: "Racing Car", description: "pH indicator art", venue: "Lab" },

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
        <p>{extendedDescriptions[event.id] || event.description}</p>
      </div>
    </div>
  );

  const renderEventsBox = (events) => (
    <div className="events-box">
      <h3 className="Other-Event">Other Events</h3>
      <div className="event-boxes-container">
        {events.map((event) => (
          <div key={event.id} className="event-box">
            <h4>{event.name}</h4>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Time:</strong> {event.time || 'TBA'}</p>
          </div>
        ))}
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

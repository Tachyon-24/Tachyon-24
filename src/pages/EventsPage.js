import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import Footer from "../components/Footer";




const eventsData = {
  "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Charades", description: "Interactive robot charades competition", venue: "Lab 101", image: "/ayanokoji.png" },
      { id: 2, name: "Robo-war", description: "Robot combat challenge", venue: "Arena", image: "/robowar.webp" },
      { id: 3, name: "Robo Bazzinga", description: "Robot innovation challenge", venue: "Main Hall", image: "/ayanokoji.png" },
      { id: 4, name: "The Escape Room", description: "Tech-based escape room challenge", venue: "Lab 102", image: "/api/placeholder/300/200" },
      { id: 5, name: "Simulation gaming tournament", description: "Virtual simulation competition", venue: "Lab 103", image: "/api/placeholder/300/200" }
    ],
    "CSI-Bitwise": [
      { id: 6, name: "Blind Code", description: "Coding without seeing the output", venue: "Lab 104", image: "/api/placeholder/300/200" },
      { id: 7, name: "Code Mania", description: "Competitive coding event", venue: "Lab 105", image: "/api/placeholder/300/200" },
      { id: 8, name: "Newbie Code", description: "Coding event for beginners", venue: "Lab 106", image: "/api/placeholder/300/200" }
    ],
    "CSI-Development": [
      { id: 9, name: "Hack Sprint", description: "Quick development challenge", venue: "Lab 201", image: "/api/placeholder/300/200" },
      { id: 10, name: "Code Relay", description: "Team coding relay", venue: "Lab 202", image: "/api/placeholder/300/200" },
      { id: 11, name: "Smash Kart.io", description: "Gaming development event", venue: "Lab 203", image: "/api/placeholder/300/200" }
    ],
    "CSI-Botnet": [
      { id: 12, name: "Cryptic Hunt", description: "Cryptography challenge", venue: "Lab 204", image: "/api/placeholder/300/200" },
      { id: 13, name: "CTF", description: "Capture The Flag security event", venue: "Lab 205", image: "/api/placeholder/300/200" },
      { id: 14, name: "Phishers", description: "Cybersecurity awareness challenge", venue: "Lab 206", image: "/api/placeholder/300/200" }
    ],
    "CSI-MM&UI/UX": [
      { id: 15, name: "GLITCH", description: "UI/UX design challenge", venue: "Design Lab", image: "/api/placeholder/300/200" },
      { id: 16, name: "ARCADE BOX", description: "Interactive design competition", venue: "Lab 207", image: "/api/placeholder/300/200" },
      { id: 17, name: "TYPOLYMPICS", description: "Typography competition", venue: "Lab 208", image: "/api/placeholder/300/200" },
      { id: 18, name: "Comicster", description: "Digital comic creation", venue: "Lab 209", image: "/api/placeholder/300/200" }
    ],
    "JDSC": [
      { id: 19, name: "CSS Lottery", description: "CSS styling challenge", venue: "Lab 301", image: "/api/placeholder/300/200" },
      { id: 20, name: "Steganofy", description: "Steganography event", venue: "Lab 302", image: "/api/placeholder/300/200" },
      { id: 21, name: "Image Imagine", description: "Image processing challenge", venue: "Lab 303", image: "/api/placeholder/300/200" }
    ],
    "VR AR MR": [
      { id: 22, name: "Cow Boy Shooter", description: "VR shooting game", venue: "VR Lab", image: "/api/placeholder/300/200" },
      { id: 23, name: "AR Treasure Hunt", description: "AR-based treasure hunt", venue: "Campus Wide", image: "/api/placeholder/300/200" },
      { id: 24, name: "2D Games", description: "Game development challenge", venue: "Lab 304", image: "/api/placeholder/300/200" }
    ],
    "GFG": [
      { id: 25, name: "Query Quest", description: "Database query challenge", venue: "Lab 305", image: "/api/placeholder/300/200" },
      { id: 26, name: "Brain Teaser", description: "Logic puzzle competition", venue: "Lab 306", image: "/api/placeholder/300/200" },
      { id: 27, name: "Spot the Brand", description: "Brand recognition challenge", venue: "Lab 307", image: "/api/placeholder/300/200" }
    ],
    "Mozilla": [
      { id: 28, name: "War For Trezor", description: "Web security challenge", venue: "Lab 308", image: "/api/placeholder/300/200" },
      { id: 29, name: "Website Pixel Art", description: "Web design competition", venue: "Lab 309", image: "/api/placeholder/300/200" }
    ]
  },
  "ECE": [
    { id: 30, name: "Robo War", description: "Robot combat challenge", venue: "Arena", image: "/api/placeholder/300/200" },
    { id: 31, name: "Laser Tag", description: "Electronic laser tag game", venue: "Field", image: "/api/placeholder/300/200" },
    { id: 32, name: "Robo Race", description: "Robot racing competition", venue: "Track", image: "/api/placeholder/300/200" },
    { id: 33, name: "Maze Bot", description: "Maze solving robot challenge", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 34, name: "Pinball", description: "Electronic pinball competition", venue: "Game Room", image: "/api/placeholder/300/200" },
    { id: 35, name: "Junkyar War", description: "Electronics from scrap", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 36, name: "Exhibition", description: "Project showcase", venue: "Exhibition Hall", image: "/api/placeholder/300/200" }
  ],
  "MECHANICAL": [
    { id: 37, name: "Hawkeye Bow", description: "Mechanical bow design", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 38, name: "Hydraulic Arms", description: "Hydraulic system design", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 39, name: "Assembling Gear", description: "Gear assembly challenge", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 40, name: "Waterjet", description: "Waterjet cutting competition", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 41, name: "Spring Suspension car", description: "Vehicle suspension design", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 42, name: "DIY Engineering Competition", description: "Creative engineering challenge", venue: "Main Hall", image: "/api/placeholder/300/200" },
    { id: 43, name: "Making Traffic Lights with arduino + maglev train", description: "Electronics integration project", venue: "Lab", image: "/api/placeholder/300/200" }
  ],
  "CIVIL": [
    { id: 44, name: "BOB the Builder", description: "Construction challenge", venue: "Field", image: "/api/placeholder/300/200" },
    { id: 45, name: "TIC TAC TOE", description: "Strategic building game", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 46, name: "Float the Ball", description: "Fluid dynamics challenge", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 47, name: "Clay Modelling", description: "Architectural modeling", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 48, name: "DEFYROUE", description: "Structural design challenge", venue: "Lab", image: "/api/placeholder/300/200" }
  ],
  "CHEMICAL":[
      { id: 49, name: "Flame Fun", description: "Chemical reaction demonstration", venue: "Lab", image: "/api/placeholder/300/200" },
      { id: 50, name: "Litmus Art", description: "pH indicator art", venue: "Lab", image: "/api/placeholder/300/200" },
      { id: 51, name: "Non-Newtonian Fluid", description: "Fluid dynamics experiment", venue: "Lab", image: "/api/placeholder/300/200" },
      { id: 52, name: "Chemical Chameleon", description: "Color-changing reactions", venue: "Lab", image: "/api/placeholder/300/200" },
      { id: 53, name: "Lava Lamp", description: "Density-based separation", venue: "Lab", image: "/api/placeholder/300/200" },
      { id: 54, name: "Racing Car", description: "Chemical-powered vehicle", venue: "Track", image: "/api/placeholder/300/200" }
    ]
};

const branchIcons = {
  'CSE': '💻',
  'ECE': '⚡',
  'MECHANICAL': '⚙️',
  'CIVIL': '🏗️',
  'CHEMICAL': '🧪'
};


const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);

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
    navigate(`?${params.toString()}`, { replace: false }); // Changed to false to maintain history
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

  const handleEventClick = (event) => {
    if (event === selectedEvent) {
      setSelectedEvent(null);
      updateHistory(selectedBranch, selectedClub);
    } else {
      setSelectedEvent(event);
      updateHistory(selectedBranch, selectedClub, event);
    }
  };

  const renderBranches = () => (
    <div className="branches-container">
      {Object.keys(eventsData).map((branch) => (
        <div
          key={branch}
          className="branch-card"
          data-branch={branch}
          onClick={() => handleBranchClick(branch)}
        >
          <div className="branch-header">
            <h2 className="branch-title">{branch}</h2>
            <div className="branch-icon">{branchIcons[branch]}</div>
          </div>
          <div className="branch-count">
            {Array.isArray(eventsData[branch])
              ? `${eventsData[branch].length} Events`
              : `${Object.keys(eventsData[branch]).length} Clubs`}
          </div>
        </div>
      ))}
    </div>
  );

  const renderEvents = (events) => (
    <div className="events-container">
      <h2>
        {selectedEvent
          ? `Event: ${selectedEvent.name}`
          : selectedClub
          ? `Club: ${selectedClub}`
          : `${selectedBranch} Events`}
      </h2>
      <div className="events-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleEventClick(event)}
          >
            <img src={event.image} alt={event.name} />
            <div className="event-content">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p className="event-details">Venue: {event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (!selectedBranch) {
      return renderBranches();
    }

    const branchData = eventsData[selectedBranch];
    if (Array.isArray(branchData)) {
      return renderEvents(branchData);
    }

    if (!selectedClub) {
      return (
        <div className="clubs-container">
          {Object.keys(branchData).map((club) => (
            <div
              key={club}
              className="club-card"
              onClick={() => handleClubClick(club)}
            >
              <h2>{club}</h2>
              <p>{branchData[club].length} Events</p>
            </div>
          ))}
        </div>
      );
    }

    return renderEvents(branchData[selectedClub]);
  };

  return (
    <div className="events-page">
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Events;
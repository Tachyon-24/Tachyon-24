import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import Footer from "../components/Footer";

const eventsData = {
 "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Charades", description: "Interactive robot charades competition", venue: "Lab 101", image: "/16.jpg" },
      { id: 2, name: "Robo Soccer", description: "Robot combat challenge", venue: "Arena", image: "/17.jpg" },
      { id: 3, name: "Robo Bazzinga", description: "Robot innovation challenge", venue: "Main Hall", image: "/api/placeholder/300/200" },
      { id: 4, name: "The Escape Room", description: "Tech-based escape room challenge", venue: "Lab 102", image: "/api/placeholder/300/200" },
      { id: 5, name: "Simulation gaming tournament", description: "Virtual simulation competition", venue: "Lab 103", image: "/api/placeholder/300/200" }
    ],
    "CSI-Bitwise": [
      { id: 6, name: "Blind Code", description: "Coding without seeing the output", venue: "Lab 104", image: "/16.jpg"  },
      { id: 7, name: "Code Mania", description: "Competitive coding event", venue: "Lab 105", image: "/17.jpg" },
      { id: 8, name: "Newbie Code", description: "Coding event for beginners", venue: "Lab 106", image: "/api/placeholder/300/200" }
    ],
    "CSI-Development": [
      { id: 9, name: "Hack Sprint", description: "Quick development challenge", venue: "Lab 201", image: "/16.jpg"  },
      { id: 10, name: "Code Relay", description: "Team coding relay", venue: "Lab 202", image: "/17.jpg" },
      { id: 11, name: "Smash Kart.io", description: "Gaming development event", venue: "Lab 203", image: "/api/placeholder/300/200" }
    ],
    "CSI-Botnet": [
      { id: 12, name: "Cryptic Hunt", description: "Cryptography challenge", venue: "Lab 204", image: "/16.jpg" },
      { id: 13, name: "CTF", description: "Capture The Flag security event", venue: "Lab 205", image: "/17.jpg" },
      { id: 14, name: "Phishers", description: "Cybersecurity awareness challenge", venue: "Lab 206", image: "/api/placeholder/300/200" }
    ],
    "CSI-MM&UI/UX": [
      { id: 15, name: "GLITCH", description: "UI/UX design challenge", venue: "Design Lab", image: "/16.jpg" },
      { id: 16, name: "ARCADE BOX", description: "Interactive design competition", venue: "Lab 207", image:"/17.jpg" },
      { id: 17, name: "TYPOLYMPICS", description: "Typography competition", venue: "Lab 208", image: "/api/placeholder/300/200" },
      { id: 18, name: "Comicster", description: "Digital comic creation", venue: "Lab 209", image: "/api/placeholder/300/200" }
    ],
    "JDSC": [
      { id: 19, name: "CSS Lottery", description: "CSS styling challenge", venue: "Lab 301", image: "/16.jpg"  },
      { id: 20, name: "Steganofy", description: "Steganography event", venue: "Lab 302", image:"/17.jpg" },
      { id: 21, name: "Image Imagine", description: "Image processing challenge", venue: "Lab 303", image: "/api/placeholder/300/200" }
    ],
    "VR AR MR": [
      { id: 22, name: "Cow Boy Shooter", description: "VR shooting game", venue: "VR Lab", image: "/16.jpg" },
      { id: 23, name: "AR Treasure Hunt", description: "AR-based treasure hunt", venue: "Campus Wide", image: "/17.jpg" },
      { id: 24, name: "2D Games", description: "Game development challenge", venue: "Lab 304", image: "/api/placeholder/300/200" }
    ],
    "GFG": [
      { id: 25, name: "Query Quest", description: "Database query challenge", venue: "Lab 305", image: "/16.jpg"  },
      { id: 26, name: "Brain Teaser", description: "Logic puzzle competition", venue: "Lab 306", image: "/17.jpg" },
      { id: 27, name: "Spot the Brand", description: "Brand recognition challenge", venue: "Lab 307", image: "/api/placeholder/300/200" }
    ],
    "Mozilla": [
      { id: 28, name: "War For Trezor", description: "Web security challenge", venue: "Lab 308", image: "/16.jpg" },
      { id: 29, name: "Website Pixel Art", description: "Web design competition", venue: "Lab 309", image:"/17.jpg" }
    ]
  },
  "ECE": [
    { id: 30, name: "Robo War", description: "Robot combat challenge", venue: "Arena",image: "/16.jpg" },
    { id: 31, name: "Laser Tag", description: "Electronic laser tag game", venue: "Field", image: "/17.jpg" },
    { id: 32, name: "Robo Race", description: "Robot racing competition", venue: "Track", image: "/api/placeholder/300/200" },
    { id: 33, name: "Maze Bot", description: "Maze solving robot challenge", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 34, name: "Pinball", description: "Electronic pinball competition", venue: "Game Room", image: "/api/placeholder/300/200" },
    { id: 35, name: "Junkyar War", description: "Electronics from scrap", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 36, name: "Exhibition", description: "Project showcase", venue: "Exhibition Hall", image: "/api/placeholder/300/200" }
  ],
  "MECHANICAL": [
    { id: 37, name: "Hawkeye Bow", description: "Mechanical bow design", venue: "Workshop", image: "/16.jpg"  },
    { id: 38, name: "Hydraulic Arms", description: "Hydraulic system design", venue: "Lab", image: "/17.jpg" },
    { id: 39, name: "Assembling Gear", description: "Gear assembly challenge", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 40, name: "Waterjet", description: "Waterjet cutting competition", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 41, name: "Spring Suspension car", description: "Vehicle suspension design", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 42, name: "DIY Engineering Competition", description: "Creative engineering challenge", venue: "Main Hall", image: "/api/placeholder/300/200" },
    { id: 43, name: "Making Traffic Lights with arduino + maglev train", description: "Electronics integration project", venue: "Lab", image: "/api/placeholder/300/200" }
  ],
  "CIVIL": [
    { id: 44, name: "BOB the Builder", description: "Construction challenge", venue: "Field", image:"/16.jpg"  },
    { id: 45, name: "TIC TAC TOE", description: "Strategic building game", venue: "Lab", image: "/17.jpg" },
    { id: 46, name: "Float the Ball", description: "Fluid dynamics challenge", venue: "Lab", image: "/api/placeholder/300/200" },
    { id: 47, name: "Clay Modelling", description: "Architectural modeling", venue: "Workshop", image: "/api/placeholder/300/200" },
    { id: 48, name: "DEFYROUE", description: "Structural design challenge", venue: "Lab", image: "/api/placeholder/300/200" }
  ],
  "CHEMICAL":[
      { id: 49, name: "Flame Fun", description: "Chemical reaction demonstration", venue: "Lab", image: "/16.jpg" },
      { id: 50, name: "Litmus Art", description: "pH indicator art", venue: "Lab", image: "/17.jpg" },
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

const extendedDescriptions = {
  // CSE > Rospinot
  1: "Test your skills in communicating ideas without words in this unique Robot Charades event, where robots mimic actions for participants to guess.",
  2: "A fast-paced Robo Soccer competition where bots collide on the field for victory. Navigate, tackle, and score in a challenging arena.",
  3: "Innovate and showcase unique robotics projects in Robo Bazzinga. Bring your ideas to life and compete for the title of top innovator.",
  4: "A tech-infused escape room challenge where participants solve puzzles and complete tasks with the aid of technology to escape in time.",
  5: "Compete in a virtual environment in this Simulation Gaming Tournament, testing reflexes and strategies in realistic simulations.",

  // CSE > CSI-Bitwise
  6: "Take on the Blind Code challenge where coding is done without an immediate output display, testing your problem-solving skills and memory.",
  7: "Participate in Code Mania, a competitive coding event designed to challenge coders with unique problems and algorithms.",
  8: "A welcoming event for beginners to code and learn in a supportive environment, focusing on foundational coding challenges.",

  // CSE > CSI-Development
  9: "Race against time in Hack Sprint, where participants must create functional applications within a limited time frame.",
  10: "In Code Relay, teams code in segments, passing projects between members. Coordination and teamwork are key in this relay coding challenge.",
  11: "Game developers join in the Smash Kart.io challenge, where skills in gaming and development are put to the test.",

  // CSE > CSI-Botnet
  12: "Decrypt puzzles and follow cryptic clues in this Cryptography Hunt, testing participants' knowledge of cryptographic methods.",
  13: "Capture The Flag (CTF) focuses on cybersecurity skills, with participants identifying vulnerabilities and capturing 'flags' hidden in systems.",
  14: "Raise awareness about phishing and cybersecurity with Phishers, an event focused on recognizing and preventing cyber threats.",

  // CSE > CSI-MM&UI/UX
  15: "Showcase your UI/UX design talents in GLITCH, where designers must create solutions for real-world problems.",
  16: "Participate in ARCADE BOX, a design competition that pushes creative boundaries with interactive and user-centered designs.",
  17: "Compete in Typolympics, where participants show off typography skills in unique and imaginative ways.",
  18: "Digital comic creation competition Comicster lets you bring your story and art to life in comic format.",

  // CSE > JDSC
  19: "Show off your CSS skills in CSS Lottery, where participants create visually appealing styles in real-time.",
  20: "Uncover hidden messages in Steganofy, a steganography challenge focusing on data hiding techniques in images and text.",
  21: "Test image manipulation skills in Image Imagine, an event based on advanced image processing techniques.",

  // CSE > VR AR MR
  22: "Experience the thrill of VR in Cow Boy Shooter, where players participate in an immersive VR shooting challenge.",
  23: "Engage in AR Treasure Hunt, where participants use augmented reality to find hidden treasures across campus.",
  24: "Create 2D games and showcase creativity and technical prowess in this game development event.",

  // CSE > GFG
  25: "Compete in Query Quest, where participants solve complex database challenges with optimized SQL queries.",
  26: "Brain Teaser focuses on logic puzzles, encouraging problem-solving skills and quick thinking.",
  27: "Identify and recognize famous brands in Spot the Brand, testing participants’ marketing and branding knowledge.",

  // CSE > Mozilla
  28: "A security challenge focusing on web security concepts and vulnerabilities, War For Trezor challenges participants’ hacking skills.",
  29: "Design unique pixel art for web projects in Website Pixel Art, blending creativity with web-based designs.",

  // ECE
  30: "Witness thrilling robot combats in Robo War, where participants engage in a high-energy bot-to-bot battle.",
  31: "Laser Tag combines electronics and fun in this thrilling laser game experience on the field.",
  32: "Robo Race is all about speed, where participants race custom-built robots on a set track.",
  33: "Maze Bot challenges participants to build robots that navigate mazes autonomously.",
  34: "Showcase your skills in electronic design and control in this Pinball competition with a twist.",
  35: "Create functional electronic devices using scrap materials in Junkyar War, a test of creativity and ingenuity.",
  36: "Display and present projects in the Exhibition, where participants showcase innovative electronic ideas and solutions.",

  // MECHANICAL
  37: "Hawkeye Bow lets participants showcase their mechanical design skills in creating functional bows.",
  38: "Demonstrate knowledge in hydraulics by designing functional Hydraulic Arms, testing power and control.",
  39: "Assembling Gear is a hands-on event focusing on precise gear assembly and understanding mechanical systems.",
  40: "Waterjet competition involves using waterjet technology to perform cutting tasks, focusing on precision and technique.",
  41: "Design a spring suspension system for cars in the Spring Suspension Car event, balancing performance with durability.",
  42: "Unleash your creativity in DIY Engineering Competition, where participants create engineering solutions from scratch.",
  43: "Design an integrated traffic light and maglev train system using Arduino in this electronics-mechanical project event.",

  // CIVIL
  44: "Take part in BOB the Builder, a construction challenge focused on problem-solving in civil engineering.",
  45: "A strategic building game where participants compete in the classic game of TIC TAC TOE with a civil engineering twist.",
  46: "Float the Ball is a fluid dynamics event, testing participants' knowledge of forces and pressure.",
  47: "Explore architectural creativity in Clay Modelling, a hands-on modeling event with clay.",
  48: "Design and test small structures in DEFYROUE, a structural engineering competition emphasizing stability and innovation.",

  // CHEMICAL
  49: "Flame Fun involves chemical reactions demonstrating combustion and heat, blending chemistry with visual appeal.",
  50: "Create art using pH indicators in Litmus Art, showcasing creativity with color-changing reactions.",
  51: "Explore the unique properties of non-Newtonian fluids in this hands-on event.",
  52: "Chemical Chameleon focuses on color-changing reactions and chemical demonstrations.",
  53: "Build a working lava lamp using chemical separation principles in this density-based experiment.",
  54: "Design a chemical-powered vehicle for Racing Car, focusing on efficiency and performance in a race setup."
};

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [flippedCards, setFlippedCards] = useState(new Set());

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

  // const handleEventClick = (event) => {
  //   if (event === selectedEvent) {
  //     setSelectedEvent(null);
  //     updateHistory(selectedBranch, selectedClub);
  //   } else {
  //     setSelectedEvent(event);
  //     updateHistory(selectedBranch, selectedClub, event);
  //   }
  // };

  const handleCardFlip = (eventId, e) => {
    e.stopPropagation();
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(eventId)) {
        newFlipped.delete(eventId); // If already flipped, unflip it
      } else {
        newFlipped.add(eventId); // Flip the card
      }
      return newFlipped;
    });
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

  const renderEventCard = (event, isMainEvent = false) => {
    const isFlipped = flippedCards.has(event.id); // Check if the card is flipped
  
    return (
      <div
        key={event.id}
        className={`event-card ${isMainEvent ? 'main-event' : 'small-event'} ${isFlipped ? 'flipped' : ''}`}
        onClick={(e) => handleCardFlip(event.id, e)} // Flip the card when clicked
      >
        <div className="card-front">
          <img src={event.image} alt={event.name} />
          <h3>{event.name}</h3>
          <p>{event.venue}</p>
        </div>
        <div className="card-back">
          <p>{extendedDescriptions[event.id]}</p>
        </div>
      </div>
    );
  };
  
  const renderEvents = (events) => {
    const mainEvents = events.slice(0, 2);
    const otherEvents = events.slice(2);

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
          {mainEvents.map((event) => renderEventCard(event, true))}
          {otherEvents.map((event) => renderEventCard(event, false))}
        </div>
      </div>
    );
  };

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

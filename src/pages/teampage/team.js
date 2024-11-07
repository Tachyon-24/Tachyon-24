import React from 'react';
import "./team.css";

// Import images
import organizerImage from '../../assests/download (3).jpg';
import coOrganizerImage from '../../assests/download (3).jpg';
import aliceImage from '../../assests/download (3).jpg';
import bobImage from '../../assests/download (3).jpg';
import charlieImage from '../../assests/download (3).jpg';

const Team = () => {
  return (
    <div className="container">
        <div className='hostsection'>
        <div className="organizer-section">
        <img src={organizerImage} alt="Organizer" className="organizer-image" />
       
          <h2>Organiser</h2>
          <p>John Doe</p>
        
    </div>
    <div className="coorganizer-section">
        <img src={coOrganizerImage} alt="Co-organizer" className="co-organizer-image" />
          <h2>Co-organiser</h2>
          <p>Jane Smith</p>
       
      </div>

        </div>
    
      <div className="core-team-section">
        <div className="team-member">
          <img src={aliceImage} alt="Alice Johnson" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Alice Johnson</p>
        </div>
        <div className="team-member">
          <img src={bobImage} alt="Bob Williams" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Bob Williams</p>
        </div>
        <div className="team-member">
          <img src={charlieImage} alt="Charlie Davis" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Charlie Davis</p>
        </div>
      </div>
          
      <div className="core-team-section">
        <div className="team-member">
          <img src={aliceImage} alt="Alice Johnson" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Alice Johnson</p>
        </div>
        <div className="team-member">
          <img src={bobImage} alt="Bob Williams" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Bob Williams</p>
        </div>
        <div className="team-member">
          <img src={charlieImage} alt="Charlie Davis" className="team-member-image" />
          <h3>Core Team Lead</h3>
          <p>Charlie Davis</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

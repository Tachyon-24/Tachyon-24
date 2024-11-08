import React, { useState } from "react";
import "./team.css";

// Import images
import organizerImage from "../../assests/download (3).jpg";
import coOrganizerImage from "../../assests/download (3).jpg";
import aliceImage from "../../assests/download (3).jpg";
import bobImage from "../../assests/download (3).jpg";
import charlieImage from "../../assests/download (3).jpg";

// Organizer Modal Component
const OrganizerModal = ({ isOpen, onClose, organizerData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content organizer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="organizer-modal-content">
          <div className="organizer-header">
            <img
              src={organizerData.image}
              alt={organizerData.name}
              className="organizer-modal-image"
            />
            <h2 className="modal-title">{organizerData.role}</h2>
          </div>

          <div className="organizer-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{organizerData.name}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Designation:</span>
              <span className="detail-value">{organizerData.designation}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{organizerData.email}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{organizerData.phone}</span>
            </div>

            {organizerData.department && (
              <div className="detail-item">
                <span className="detail-label">Department:</span>
                <span className="detail-value">{organizerData.department}</span>
              </div>
            )}

            {organizerData.responsibilities && (
              <div className="detail-item">
                <span className="detail-label">Key Responsibilities:</span>
                <ul className="responsibilities-list">
                  {organizerData.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Modal Component (existing component)
const TeamModal = ({ isOpen, onClose, teamData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{teamData.title}</h2>

        <div className="team-section">
          <h3 className="section-title">Team Lead</h3>
          <div className="member-card">
            <img
              src={teamData.leadImage}
              alt={teamData.leadName}
              className="member-image"
            />
            <div className="member-info">
              <span className="member-name">{teamData.leadName}</span>
              <span className="member-role">{teamData.leadRole}</span>
            </div>
          </div>
        </div>

        {teamData.coLead && (
          <div className="team-section">
            <h3 className="section-title">Co-Lead</h3>
            <div className="member-card">
              <img
                src={teamData.coLead.image}
                alt={teamData.coLead.name}
                className="member-image"
              />
              <div className="member-info">
                <span className="member-name">{teamData.coLead.name}</span>
                <span className="member-role">{teamData.coLead.role}</span>
              </div>
            </div>
          </div>
        )}

        {teamData.members && teamData.members.length > 0 && (
          <div className="team-section">
            <h3 className="section-title">Team Members</h3>
            <div className="team-members-grid">
              {teamData.members.map((member, index) => (
                <div key={index} className="member-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-image"
                  />
                  <div className="member-info">
                    <span className="member-name">{member.name}</span>
                    <span className="member-role">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState(false);

  const organizersData = {
    organizer: {
      name: "Hardik Sharma",
      role: "Organiser",
      image: organizerImage,
      designation: "Senior Event Coordinator",
      email: "hardik.sharma@example.com",
      phone: "+91 98765 43210",
      department: "Event Management",
      responsibilities: [
        "Overall event coordination",
        "Strategic planning",
        "Team leadership",
        "Budget management",
      ],
    },
    coorganizer: {
      name: "Ali Shaharyar Abbas",
      role: "Co-organiser",
      image: coOrganizerImage,
      designation: "Assistant Event Coordinator",
      email: "ali.abbas@example.com",
      phone: "+91 98765 43211",
      department: "Event Management",
      responsibilities: [
        "Support event planning",
        "Team coordination",
        "Logistics management",
        "Vendor relations",
      ],
    },
  };

  const teamData = [
    {
      title: "Design & Social Media Team",
      leadName: "Saket Bagdi",
      leadRole: "Designing & Social Media Head",
      leadImage: aliceImage,
      coLead: {
        name: "Jane Smith",
        role: "Assistant Design Lead",
        image: bobImage,
      },
      members: [
        { name: "Member 1", role: "Designer", image: charlieImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
      ],
    },
    {
      title: "Core Team 1",
      leadName: "Bob Williams",
      leadRole: "Core Team Lead",
      leadImage: bobImage,
      members: [
        { name: "Member 3", role: "Developer", image: charlieImage },
        { name: "Member 4", role: "Developer", image: aliceImage },
      ],
    },
  ];

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setIsTeamModalOpen(true);
  };

  const handleOrganizerClick = (organizer) => {
    setSelectedOrganizer(organizer);
    setIsOrganizerModalOpen(true);
  };

  return (
    <div className="container">
      <div className="hostsection">
        <div
          className="organizer-section"
          onClick={() => handleOrganizerClick(organizersData.organizer)}
        >
          <img
            src={organizerImage}
            alt="Organizer"
            className="organizer-image"
          />
          <h2>Organiser</h2>
          <p>Hardik Sharma</p>
        </div>
        <div
          className="coorganizer-section"
          onClick={() => handleOrganizerClick(organizersData.coorganizer)}
        >
          <img
            src={coOrganizerImage}
            alt="Co-organizer"
            className="co-organizer-image"
          />
          <h2>Co-organiser</h2>
          <p>Ali Shaharyar Abbas</p>
        </div>
      </div>

      <div className="core-team-section">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="team-member"
            onClick={() => handleTeamClick(team)}
          >
            <img
              src={team.leadImage}
              alt={team.leadName}
              className="team-member-image"
            />
            <h3>{team.leadRole}</h3>
            <p>{team.leadName}</p>
          </div>
        ))}
      </div>

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        teamData={selectedTeam}
      />

      <OrganizerModal
        isOpen={isOrganizerModalOpen}
        onClose={() => setIsOrganizerModalOpen(false)}
        organizerData={selectedOrganizer}
      />
    </div>
  );
};

export default Team;

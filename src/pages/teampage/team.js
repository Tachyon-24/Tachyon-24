import React, { useState } from "react";
import "./team.css";

// Import images
import gauravbg from "../../assests/team/gauravSirBg.jpg";
import gaurav from "../../assests/team/IMG_2691 - GAURAV TIWARI.png";
import saketsirbg from "../../assests/team/draken.jpg";
import Saketsir from "../../assests/team/_CLG0484 - HIMANSHU KUMAR MAHTO.png";
import organizerImage from "../../assests/team/WhatsApp Image 2024-11-09 at 6.13.48 PM.png";
import coOrganizerImage from "../../assests/team/20241013_165421(2).png";
import aliceImage from "../../assests/download (3).jpg";
//import bobImage from "../../assests/download (3).jpg";
import shivani from "../../assests/team/IMG20240824173138.png";
import charlieImage from "../../assests/download (3).jpg";
import himanshuSir from "../../assests/team/himanshusir.png";
import himanshuSirBg from "../../assests/team/c6c2ceb6baa9990646e5466518b470da.png";
import hardikSirBg from "../../assests/team/main-qimg-e023e6d31c3f1dd8ad673464e1b52c08-lq.jpg";
import alisirbg from "../../assests/team/OIP.jpg";
import sampurn from "../../assests/team/sampurn1 - SAMPURN CHOUKSEY.png";
import sampurnbg from "../../assests/team/5e0a02131c0567d225ee1b2d5c25232b.jpg";
import yrichi from "../../assests/team/yorichi.jpg";
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
            <h2 className="modal-title">{organizerData.name}</h2>
            <span className="detail-value">{organizerData.role}</span>
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

const TeamModal = ({ isOpen, onClose, teamData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{teamData.title}</h2>

        <div className="modal-body">
          {/* Left Section - Team Leads */}
          <div className="leads-section">
            <div className="leads-container">
              {/* Team Lead */}
              <div className="lead-card">
                <h3>Team Lead</h3>
                <div className="lead-info">
                  <img
                    src={teamData.leadImage}
                    alt={teamData.leadName}
                    className="lead-image"
                  />
                  <h4>{teamData.leadName}</h4>
                  <p>{teamData.leadRole}</p>
                </div>
              </div>

              {/* Co-Lead if exists */}
              {teamData.coLead && (
                <div className="lead-card">
                  <h3>Co-Lead</h3>
                  <div className="lead-info">
                    <img
                      src={teamData.coLead.image}
                      alt={teamData.coLead.name}
                      className="lead-image"
                    />
                    <h4>{teamData.coLead.name}</h4>
                    <p>{teamData.coLead.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Team Members */}
          <div className="members-section">
            <h3>Team Members</h3>
            {teamData.members && teamData.members.length > 0 ? (
              <div className="members-list">
                {teamData.members.map((member, index) => (
                  <div key={index} className="member-item">
                    <p className="member-name">{member.name}</p>
                    <p className="member-designation">{member.role}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-members">No team members to display</p>
            )}
          </div>
        </div>
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
      backgroundImage: hardikSirBg,
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
      backgroundImage: alisirbg,
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
      title: "Development Team",
      leadName: "Himanshu Kumar Mahto",
      leadRole: "Development Team Head",
      leadImage: himanshuSir,
      backGroundImage: himanshuSirBg,
      coLead: {
        name: "Pritam Singh Shaktawat",
        role: "Co-Lead",
        image:
          "../../assests/team/WhatsApp Image 2024-11-09 at 15.07.03_a921caa5.png",
      },
      members: [
        { name: "Member 1", role: "Designer", image: charlieImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
      ],
    },
    {
      title: "Sponsorship",
      leadName: "Sampurn Chouksey",
      leadRole: "Sponsorship Head and Treasurer",
      leadImage: sampurn,
      backGroundImage: sampurnbg,
      members: [
        { name: "Member 3", role: "Developer", image: charlieImage },
        { name: "Member 4", role: "Developer", image: aliceImage },
      ],
    },
    {
      title: "Management ",
      leadName: "Gaurav Tiwari",
      leadRole: "Management Lead",
      leadImage: gaurav,
      backGroundImage: gauravbg,
      coLead: {
        name: "Pritam Singh Shakhtawat",
        role: "Co-Lead",
        image:
          "../../assests/team/WhatsApp Image 2024-11-09 at 15.07.03_a921caa5.png",
      },
      members: [
        { name: "Member 1", role: "Designer", image: charlieImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
      ],
    },
    {
      title: "Designing and Social Media",
      leadName: "Saket Bagdi",
      leadRole: "Designing & Social Media Head",
      leadImage: Saketsir,
      backGroundImage: saketsirbg,
      coLead: {
        name: "Pritam Singh Shakhtawat",
        role: "Co-Lead",
        image:
          "../../assests/team/WhatsApp Image 2024-11-09 at 15.07.03_a921caa5.png",
      },
      members: [
        { name: "Member 1", role: "Designer", image: charlieImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
      ],
    },
    {
      title: "Hospitality ",
      leadName: "Shivani Singh",
      leadRole: "Hospitality Lead",
      leadImage: shivani,
      backGroundImage: yrichi,
      coLead: {
        name: "Pritam Singh Shakhtawat",
        role: "Co-Lead",
        image:
          "../../assests/team/WhatsApp Image 2024-11-09 at 15.07.03_a921caa5.png",
      },
      members: [
        { name: "Member 1", role: "Designer", image: charlieImage },
        { name: "Member 2", role: "Social Media", image: aliceImage },
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
    <div className="container" style={{ marginTop: "10vw" }}>
      <div className="hostsection">
        <div
          className="organizer-section"
          onClick={() => handleOrganizerClick(organizersData.organizer)}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url(${organizersData.organizer.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
              transform: "scale(1.1)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={organizerImage}
              alt="Organizer"
              className="organizer-image"
              style={{ width: "100%" }}
            />
            <div
              style={{
                backgroundColor: "black",
                Width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px",
                borderRadius: "15px",
              }}
            >
              <h2>Organiser</h2>
              <p>Hardik Sharma</p>
            </div>
          </div>
        </div>
        <div
          className="coorganizer-section"
          onClick={() => handleOrganizerClick(organizersData.coorganizer)}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url(${organizersData.coorganizer.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
              transform: "scale(1.1)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={coOrganizerImage}
              alt="Organizer"
              className="organizer-image"
            />
            <div
              style={{
                backgroundColor: "black",
                Width: "100%",
                paddingLeft: "70px",
                paddingRight: "70px",
                borderRadius: "15px",
              }}
            >
              <h2>CoOrganiser</h2>
              <p>Ali Shaharyar Abbas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* ... (previous hostsection remains the same) */}
        <div className="core-team-section">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleTeamClick(team)}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background div with blur effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: team.backGroundImage
                    ? `url(${team.backGroundImage})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "blur(2px)",
                  transform: "scale(1.1)", // Prevents blur edges from showing
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "150px",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "150px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              {/* Content div */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: adds a slight overlay
                }}
              >
                <img
                  src={team.leadImage}
                  alt={team.leadName}
                  className="team-member-image"
                />
                <div
                  style={{
                    backgroundColor: "black",
                    Width: "100%",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    borderRadius: "15px",
                  }}
                >
                  <h3>{team.leadRole}</h3>
                  <p>{team.leadName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... (modals remain the same) */}
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

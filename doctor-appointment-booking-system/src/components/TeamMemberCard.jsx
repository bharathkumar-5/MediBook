import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-member-card">
      <img src={member.image} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
};

export default TeamMemberCard;
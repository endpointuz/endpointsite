import React from 'react';

const AboutTeamCard = (
  {
    name,
    description,
    photo,
  },
) => (
  <div className="team-card">
    <img src={photo} alt="фото участника команды" className="w-100 team-card-img" />
    <div className="team-card-wrapper">
      <h5 className="team-card-name">{name}</h5>
      <p className="team-card-subtitle">{description}</p>
    </div>
  </div>
);

export default AboutTeamCard;

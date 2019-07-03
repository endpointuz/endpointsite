import React from 'react';

const ServicesCard = ({ title, icon, text }) => (
  <div className="services-card">
    <div className="services-card-header">
      <div className="services-card-icon">
        <i className={icon} style={{
          display: 'inline-block',
          fontSize: 36,
        }} />
      </div>
      <h3 className="services-card-title">{title}</h3>
    </div>
    <div className="services-card-body">
      {text}
    </div>
  </div>
);

export default ServicesCard;

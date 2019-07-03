import React from 'react';

const NavbarMenuFooterInfo = ({ label, children }) => (
  <div className="navigator-footer-info">
    <p className="navigator-footer-label">{label}</p>
    {children}
  </div>
);

export default NavbarMenuFooterInfo;

import React from 'react';
import backgroundImage from '../image/buildings-1850129.jpg';
import '../index.css';

function AppWrapper({ children }) {
  return (
    <div className="fixed inset-0  md:flex-row items-center justify-center space-y-40 md:space-y-0 md:space-x-4">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AppWrapper;

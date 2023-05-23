import React from 'react';
import './AppWrapper.css';

function AppWrapper({ children }) {
  return <div className="app-wrapper">{children}</div>;
}

export default AppWrapper;

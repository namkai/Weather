import React from 'react';
import SideBar from './features/SideBar';
import Weather from './features/Weather';

export const App = () => (
  <div className="container">
    <div className="row">
      <SideBar />
      <Weather />
    </div>
  </div>
);

export default App;

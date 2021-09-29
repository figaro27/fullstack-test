import React from 'react';
import Availability from './components/Availability';
import AvailabilityProvider from "./contexts/availability";
import './App.css';

function App() {
  return (
    <div className="App">
      <AvailabilityProvider>
        <Availability />
      </AvailabilityProvider>
    </div>
  );
}

export default App;

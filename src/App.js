import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage'
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />  
    </div>
  );
}

export default App;

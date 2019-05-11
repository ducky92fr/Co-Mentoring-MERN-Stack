import React from 'react';
import LandingPage from './pages/landingPage'
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/user-dasboard" />
    </div>
  );
}

export default App;

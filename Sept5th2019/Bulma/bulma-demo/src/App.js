import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import routes from './Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Bulma a modular css framework with no js </h1>
      <Navigation />
      <Router>
        {routes.map(route => (
          <Route
            path={route.path}
            render={route.component}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;

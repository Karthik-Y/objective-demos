import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import routes from './Routes';
import "bulma/bulma.sass";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>
      <Router>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={route.component}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;

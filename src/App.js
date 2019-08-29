import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import routes from './Routes';
import "bulma/bulma.sass";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <p class="title">
              Fullheight hero with navbar
            </p>
          </div>
        </div>
      </section>
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

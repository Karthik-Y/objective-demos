import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={true}
              render={route.component}
            />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Register from './Register';
import Success from './Success';

function App() {
  return (
    <Router>
      <div>
        <h1>Dinosaur App</h1>
        <h2>By Chingu Voyage 48 tier 3 team 22</h2>
      </div>
     <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Success" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
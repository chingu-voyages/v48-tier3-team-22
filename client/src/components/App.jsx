import Header from './Header/Header';
import Footer from './Footer/Footer';
import DinosaurPage from './Dinosaurs/DinosaurPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Register from '../Register';
import Success from '../Success';

function App() {
  return (
    <Router>
    <div className="appContainer">
      <Header />
      <DinosaurPage />
      <Footer />
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

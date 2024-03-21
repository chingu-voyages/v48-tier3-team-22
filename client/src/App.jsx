import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DinosaurPage from './components/Dinosaurs/DinosaurPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Success from './components/Success';

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

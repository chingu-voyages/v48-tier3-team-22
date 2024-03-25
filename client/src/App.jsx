import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Success" component={Success} />
          <Route path="/">
            <div>
              <h1>Dinosaur App</h1>
              <h2>By Chingu Voyage 48 tier 3 team 22</h2>
            </div>
            <div>
              <Header />
              <DinosaurPage />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

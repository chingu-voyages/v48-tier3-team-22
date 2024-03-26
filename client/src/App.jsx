import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Success from "./components/Success";
import Chart from "./components/Chart/Chart";
import DinosaurLocation from "./components/Dinosaurs/DinosaurLocation";

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
              <Header />
              <DinosaurPage />
              <Chart />
              <DinosaurLocation />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import NewsPage from "./components/News/NewsPage";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Success from "./components/Success";
import Chart from "./components/Chart/Chart";
import DinosaurLocation from "./components/Dinosaurs/DinosaurLocation";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dinosaurs" element={<DinosaurPage />} />
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/location" element={<DinosaurLocation />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

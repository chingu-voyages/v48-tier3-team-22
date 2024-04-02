import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import NewsPage from "./components/News/NewsPage";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthRoute from "./components/auth/authRoute";
import Chart from "./components/Chart/Chart";
import DinosaurLocation from "./components/Dinosaurs/DinosaurLocation";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="appContainer font-roboto">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthRoute />}>
            <Route path="dinosaurs" element={<DinosaurPage />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/logout" element={<HomePage />} />
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/location" element={<DinosaurLocation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <DinosaurPage />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;

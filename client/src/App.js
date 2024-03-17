import styles from "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DinosaurPage from "./components/Dinosaurs/DinosaurPage";

console.log(import.meta.env);

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <DinosaurPage />
      <Footer />
    </div>
  );
}

export default App;

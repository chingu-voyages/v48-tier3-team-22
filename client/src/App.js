import styles from "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

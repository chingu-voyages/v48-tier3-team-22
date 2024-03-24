import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <p className={styles.header}>Dinosaur App</p>
        <Link to="/Login" className={styles.button}>
          <button className={styles.button}>Sign In</button>
        </Link>
        <Link to="/Register">
          <button className={styles.button}>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

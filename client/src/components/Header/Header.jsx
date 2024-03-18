import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <p className={styles.header}>Dinosaur App</p>
      </div>
    </header>
  );
};

export default Header;

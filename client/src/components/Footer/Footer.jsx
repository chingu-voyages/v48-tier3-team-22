import styles from "./Footer.module.css";

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className={styles.repoLink}>
        Developed by {}
        <a
          href="https://github.com/chingu-voyages/v48-tier3-team-22"
          target="_blank"
          rel="noreferrer"
          data-title="External github repo link will open on a new tab"
        >
          Tier3-Team-22 github repository
        </a>
        <span className={styles.text}> &copy; {currentYear} </span>
      </p>
    </footer>
  );
};

export default Footer;

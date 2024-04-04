import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/light.css";

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex justify-center items-center border-2 border-solid	border-[#b7b3b3] p-8 font-bold">
      <Tippy
        animation="perspective"
        theme={"dark"}
        content={
          <h1 className="font-bold">
            External github repo link will open in a new tab
          </h1>
        }
      >
        <p className="text-emerald-500">
          Developed by {}
          <a
            className="text-emerald-500 underline"
            href="https://github.com/chingu-voyages/v48-tier3-team-22"
            target="_blank"
            rel="noreferrer"
          >
            Tier3-Team-22 github repository
          </a>
          <span> &copy; {currentYear} </span>
        </p>
      </Tippy>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { MediaPlayer } from "./ShowHistPlayer";
import "../styles/navMenu.css";

const navLogoSrc = "../../assets/icons/icon_bbb-red.png";

export const NavRollout = () => {
  const navOps = [
    "index",
    "home",
    "pics",
    "mp3s",
    "notes",
    "articles",
    "inspo",
    "settings",
  ];

  return (
    <div className="nav-deck">
      <a href="https://burnthis.space" target="_blank" rel="noreferrer">
        <img src={navLogoSrc} className="logo react" alt="React logo" />
      </a>

      <ul className="nav-btns">
        {/* <JustPickOne /> */}
        {navOps.map((op, idx) => {
          return (
            <li key={idx}>
              <Link to={`/${op}`} className="nav-links">
                {op}
              </Link>
            </li>
          );
        })}
      </ul>

      <MediaPlayer />
    </div>
  );
};

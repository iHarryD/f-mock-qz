import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./css/headerStyle.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar --horizontal-flex">
        <Link to="/">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.312 20.112C12.92 20.112 14.192 19.416 15.128 18.024C16.064 16.608 16.532 14.652 16.532 12.156C16.532 9.804 16.064 7.968 15.128 6.648C14.192 5.328 12.92 4.668 11.312 4.668C9.704 4.668 8.432 5.328 7.496 6.648C6.56 7.968 6.092 9.804 6.092 12.156C6.092 14.652 6.56 16.608 7.496 18.024C8.432 19.416 9.704 20.112 11.312 20.112ZM19.052 30.552C16.58 30.552 14.48 29.94 12.752 28.716C11.024 27.516 9.74 26.004 8.9 24.18C6.404 23.652 4.4 22.344 2.888 20.256C1.4 18.168 0.656 15.468 0.656 12.156C0.656 9.588 1.1 7.416 1.988 5.64C2.9 3.84 4.148 2.472 5.732 1.536C7.34 0.575999 9.2 0.0959988 11.312 0.0959988C13.424 0.0959988 15.272 0.575999 16.856 1.536C18.464 2.472 19.712 3.84 20.6 5.64C21.512 7.44 21.968 9.612 21.968 12.156C21.968 15.3 21.296 17.904 19.952 19.968C18.608 22.008 16.796 23.352 14.516 24C15.068 24.816 15.812 25.404 16.748 25.764C17.708 26.124 18.68 26.304 19.664 26.304C20.168 26.304 20.636 26.256 21.068 26.16C21.524 26.088 21.92 26.004 22.256 25.908L23.192 29.76C22.76 29.976 22.184 30.156 21.464 30.3C20.768 30.468 19.964 30.552 19.052 30.552ZM24.1614 15V13.488L28.6974 6.696H24.5934V4.632H31.7934V6.12L27.2334 12.936H31.8174V15H24.1614Z"
              fill="#2D76AC"
            />
          </svg>
        </Link>
        <ul className="navlinks-container --horizontal-flex --has-gap">
          <li>
            <button className="btn --icon-only-btn" onClick={() => {}}>
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </li>
          <li>
            <button className="btn --icon-only-btn">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

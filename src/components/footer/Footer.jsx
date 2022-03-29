import "./css/footerStyle.css";

export default function Footer() {
  return (
    <footer className="footer --has-padding">
      <ul id="social-media-tab">
        <li>
          <a
            className="social-media-links"
            href="https://github.com/iHarryD"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="social-media-links"
            href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p id="portfolio-link">
        Developed by
        <a
          href="https://iharryd.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Harry
        </a>
      </p>
    </footer>
  );
}

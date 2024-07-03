import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header-card">
        <h1>Dave Greenland</h1>
        <div className="job-title-container">
          <img
            className="profile-image"
            src="/dev-images/web-developer.svg"
            alt="Web Developer"
          />
          <p>software developer</p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/david-greenland-360aba291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={38} />
          </a>
          <a
            href="https://github.com/CoupDeWhoop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={38} />
          </a>
          <a href="mailto:greenlanddev01@gmail.com">
            <FaEnvelope size={38} />
          </a>
        </div>
      </div>
    </header>
  );
}

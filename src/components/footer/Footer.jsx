// Footer.jsx
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your Name</p>
        <div className="footer-links">
          <Link to="#Homepage">Homepage</Link>
          <Link to="#Services">Services</Link>
          <Link to="#Portfolio">Portfolio</Link>
          <Link to="#Contact">Contact</Link>
          <Link to="#About">About</Link>
        </div>
      </div>
      <div className="social">
        <a href="#">
          <img src="/facebook.png" alt="" />
        </a>
        <a href="#">
          <img src="/instagram.png" alt="" />
        </a>
        <a href="#">
          <img src="/youtube.png" alt="" />
        </a>
        <a href="#">
          <img src="/dribbble.png" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

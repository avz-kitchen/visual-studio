// Footer.jsx
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content"></div>

      {/* Sitemap Grid */}
      <div className="sitemap">
        {/* Column 1: Projects */}
        <div className="sitemap-category">
          <p>Scroll Up</p>
        </div>
        {/* Column 2: Projects */}
        <div className="sitemap-category">
          <h3>Portfolio</h3>
          <Link to="/portfolio/#branding">Branding</Link>
          <Link to="/portfolio/#uxui">UX/UI Design</Link>
          <Link to="/portfolio/#webdev">Web Development</Link>
        </div>

        {/* Column 3: Company */}
        <div className="sitemap-category">
          <h3>Visual Studio</h3>
          <Link to="/about">About</Link>
        </div>

        {/* Column 4: Contact */}
        <div className="sitemap-category">
          <h3>Contact</h3>
          <Link to="/contact">Contact Us</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <section className="copyright">
        <img src="public/placeholder-footer.png" />
        <p>
          © <span>@artichoke.vz</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;

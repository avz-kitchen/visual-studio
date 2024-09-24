import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>

        <Portfolio />
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        {/* Framer Motion Crash Course */}
        {/* <Test/> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

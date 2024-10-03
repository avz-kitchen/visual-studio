import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Parallax from "../components/parallax/Parallax";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return (
    <div>
      <section id="Homepage">
        <Hero />
      </section>

      <section id="Portfolio">
        <Portfolio isHomepage={true} />
      </section>

      <section id="SeeMore">
        <Parallax type="portfolio" />
      </section>

      <section id="Services">
        <Services />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;

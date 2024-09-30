import Portfolio from "../components/portfolio/Portfolio";
import Parallax from "../components/parallax/Parallax";
import Logo from "../components/project/Logo";

const PortfolioPage = () => {
  return (
    <section id="Portfolio">
      <Portfolio />
      <Parallax type="portfolio" />
      <Logo />
    </section>
  );
};

export default PortfolioPage;

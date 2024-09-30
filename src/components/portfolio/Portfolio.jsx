import { useRef } from "react";
import { button } from "framer-motion/client";
import { motion, useScroll, useSpring } from "framer-motion";
import Featured from "./Featured";
import BrandingCard from "./BrandingCard";
import portfolioItems from "../../data/portfolio";
import "./portfolio.scss";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 10,
  });

  const featuredItems = portfolioItems.filter(
    (item) => item.type === "Case Study"
  );
  const brandingItems = portfolioItems.filter(
    (item) => item.type === "Branding"
  );

  const scrollToNextSection = () => {
    const nextSection = ref.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (e) => {
    if (e.deltaY > 3) {
      scrollToNextSection();
    }
  };

  return (
    <>
      <div className="portfolio" ref={ref} onWheel={handleScroll}>
        <div className="progress">
          <h1>Featured Projects</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>

        {featuredItems.map((item) => (
          <Featured item={item} key={item.id} />
        ))}
      </div>
      <div className="branding">
        <div className="branding-grid">
          <div className="grid-info">
            <h1>Logo</h1>
            <p>Some short description of the branding projects goes here.</p>
            <button>View All Logos</button>
          </div>
          <div className="project-preview">
            {brandingItems.map((item, index) =>
              index < 2 ? ( // Show only the first two branding items here
                <BrandingCard
                  logoSrc={item.img}
                  title={item.title}
                  projectLink={item.projectLink}
                  key={item.id}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="branding-bottom-grid">
          <div className="grid-item logo-large">
            <img src="public/avz-logo-s.png" alt="Large Branding Logo" />
          </div>
          <div className="grid-item text-link">
            <h2>Furniture icon set </h2>
            <a href="/portfolio/branding">View all Icons</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

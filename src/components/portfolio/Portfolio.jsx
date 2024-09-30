import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Featured from "./Featured";
import Branding from "./Branding"; // Import the branding work component
import portfolioItems from "../../data/portfolio"; // Portfolio data from external file
import "./portfolio.scss";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Filter portfolio items by type
  const featuredItems = portfolioItems.filter(
    (item) => item.type === "Case Study"
  );
  const brandingItems = portfolioItems.filter(
    (item) => item.type === "Branding"
  );

  return (
    <div className="portfolio" ref={ref}>
      {/* Progress bar for Featured Works */}
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {/* Featured Works */}
      {featuredItems.map((item) => (
        <Featured item={item} key={item.id} />
      ))}

      {/* Branding Section */}
      <div className="branding-section">
        <h1>Branding Projects</h1>
        <p>Some short description of the branding projects goes here.</p>
        {brandingItems.map((item) => (
          <Branding item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

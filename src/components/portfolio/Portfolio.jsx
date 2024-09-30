import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Featured from "./Featured";
import Branding from "./Branding";
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
    <div className="portfolio" ref={ref} onWheel={handleScroll}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {featuredItems.map((item) => (
        <Featured item={item} key={item.id} />
      ))}

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

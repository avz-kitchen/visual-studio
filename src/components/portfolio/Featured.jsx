import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./featured.scss"; // Ensure to add styling for this component
import { Link } from "react-router-dom";

const Featured = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <motion.div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <span>{item.skill}</span>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <p>{item.desc}</p>
            <Link to={`/portfolio/${item.id}`}>
              <button>Read {item.type}</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;

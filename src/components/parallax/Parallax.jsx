import { useRef } from "react";
import { Link } from "react-router-dom";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #293B3D, #488E8D)"
            : "linear-gradient(180deg, #293B3D, #D8C0CE)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? (
          "What's cooking?"
        ) : (
          <Link
            to="/portfolio"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            See More
          </Link>
        )}{" "}
      </motion.h1>
      {/*  <motion.div className="mountains"></motion.div> */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;

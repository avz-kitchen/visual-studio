import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "WDR Radio App",
    type: "Case Study",
    img: "public/Untitled1.png",
    desc: "Lorem ipsum dolor sit",
    skill: "UX/UI",
  },
  {
    id: 2,
    title: "Leo.org",
    type: "Case Study",
    img: "public/Untitled2.png",
    desc: "Was heisst das nochmal?",
    skill: "UX/UI",
  },
  {
    id: 3,
    title: "mokebo E-Commerce",
    type: "Case Study",

    img: "public/placeholder1.png",
    desc: "Lorem ipsum dolor sit",
    skill: "Digital Experience",
  },
  {
    id: 4,
    title: "Music App",
    type: "Case Study",

    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit",
    skill: "UX",
  },
];

const Single = ({ item }) => {
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

            <img src={item.img} alt="" />
          </div>
          <div className="textContainer" style={{ y }}>
            <p>{item.desc}</p>
            <button>See {item.type}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioItems from "../data/portfolio";
import "./projectDetails.scss";
import Finding from "../components/project/Finding";
const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = portfolioItems.find((item) => item.id === Number(projectId));

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <motion.div className="textContainer" variants={variants}>
        <p>{project.skill}</p>
        <hr />
        <p>{project.type}</p>
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {project.title}
            </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>{project.tag}</motion.b>{" "}
            / {project.subtitle}
          </h1>
          <button>Demo</button>
        </div>
      </motion.div>

      <div className="mainContent">
        <img src={project.img} alt={project.title} />
        <p>{project.desc}</p>
        <img src={project.img} alt={project.title} />

        <p>{project.desc}</p>
        <Finding></Finding>
      </div>
    </div>
  );
};

export default ProjectDetails;

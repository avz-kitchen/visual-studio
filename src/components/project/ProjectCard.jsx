// ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.scss";

const ProjectCard = ({ projectItem }) => {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={projectItem.img} alt={projectItem.title} />
      </div>
      <div className="project-details">
        <h2>{projectItem.title}</h2>
        <p>{projectItem.desc}</p>
        <Link to={`/projects/${projectItem.id}`}>
          <button>View Project</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

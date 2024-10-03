import { Link } from "react-router-dom";
import "./projectCard.scss"; // Ensure your CSS is properly imported

const ProjectCard = ({ projectItem }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h2>{projectItem.title || "Untitled Project"}</h2>
        <div className="image-wrapper">
          <img
            src={projectItem.img || "default-image.jpg"} // Fallback image
            alt={projectItem.title || "Project Image"} // Fallback alt text
            loading="lazy"
          />
        </div>
        <p>{projectItem.desc || "No description available."}</p>
        <Link to={`/portfolio/${projectItem.id}`}>
          <button>View Project</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

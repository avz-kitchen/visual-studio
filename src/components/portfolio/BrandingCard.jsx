import "./branding.scss"; // Import the SCSS file for this component
import { Link } from "react-router-dom";
import portfolioItems from "../../data/portfolio";

const BrandingCard = ({ title, description, logoSrc, id }) => {
  const project = portfolioItems.find((item) => item.id === Number(id));

  return (
    <div className="branding-card">
      <img src={logoSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      {project ? (
        <Link to={`/portfolio/${project.id}`}>View Project</Link>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default BrandingCard;

import "./branding.scss"; // Import the SCSS file for this component
import { Link } from "react-router-dom";
const BrandingCard = ({ title, description, logoSrc, id }) => {
  return (
    <div className="branding-card">
      <img src={logoSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <Link>
        <a href={id}>View</a>
      </Link>
    </div>
  );
};

export default BrandingCard;

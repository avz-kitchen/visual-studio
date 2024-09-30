import "./branding.scss"; // Import the SCSS file for this component

const BrandingCard = ({ title, description, logoSrc, projectLink }) => {
  return (
    <div className="branding-card">
      <img src={logoSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <a href={projectLink}>See Project</a>
    </div>
  );
};

export default BrandingCard;

import ProjectCard from "../components/project/ProjectCard"; // Correctly import the ProjectCard component
import portfolioItems from "../data/portfolio"; // Import portfolioItems data
import "../components/portfolio/portfolio.scss"; // Ensure to import your styles

const PortfolioPage = () => {
  return (
    <section id="Portfolio">
      <h1>Portfolio</h1>

      <div className="project-grid">
        {/* Grid container for project cards */}
        {portfolioItems.map((item) => (
          <ProjectCard projectItem={item} key={item.id} /> // Pass each project as a prop (corrected prop name)
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;

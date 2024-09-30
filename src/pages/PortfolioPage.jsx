import Parallax from "../components/parallax/Parallax";
import ProjectCard from "../components/project/ProjectCard";
import portfolioItems from "./../data/portfolio"; // Import portfolioItems data

const PortfolioPage = () => {
  return (
    <section id="Portfolio">
      {portfolioItems.map((item) => (
        <ProjectCard portfolioItem={item} key={item.id} /> // Pass each project as a prop
      ))}
    </section>
  );
};

export default PortfolioPage;

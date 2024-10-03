import { useParams } from "react-router-dom";
import portfolioItems from "./../data/portfolio";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Convert projectId to a number for comparison
  const project = portfolioItems.find((item) => item.id === Number(projectId));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.img} alt={project.title} />
      <p>{project.description}</p>
      {/* Render more details about the project */}
    </div>
  );
};

export default ProjectDetails;

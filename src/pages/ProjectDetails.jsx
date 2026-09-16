import { Link, useParams } from "react-router-dom";

import bakeryImage from "../assets/bakery.png";
import newsImage from "../assets/news.png";

function ProjectDetails() {

  const { projectId } = useParams();

  const projects = {

    bakery: {
      title: "Bakery Management System",
      image: bakeryImage,
      description:
        "A web-based management system designed to manage bakery products, sales, customers and business information efficiently.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      github:
        "https://github.com/zakirullahnaseri/Bakery-Management-System",
    },

    news: {
      title: "News Project",
      image: newsImage,
      description:
        "A responsive news web application designed to display news articles with a clean and user-friendly interface.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      github:
        "https://github.com/zakirullahnaseri/News-project",
    },

  };

  const project = projects[projectId];

  if (!project) {
    return (
      <main>

        <section
          className="section dark-section text-center"
          style={{
            paddingTop: "140px",
            minHeight: "100vh",
          }}
        >

          <div className="container">

            <h1 className="section-title">
              Project Not Found
            </h1>

            <p className="section-text">
              The project you are looking for does not exist.
            </p>

            <Link
              to="/projects"
              className="btn btn-primary mt-3"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Projects
            </Link>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main>

      <section
        className="section dark-section"
        style={{
          paddingTop: "140px",
          minHeight: "100vh",
        }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <p className="section-subtitle">
              PROJECT DETAILS
            </p>

            <h1 className="section-title">
              {project.title}
            </h1>

          </div>

          <div className="row align-items-center g-5">

            {/* IMAGE */}
            <div className="col-lg-6">

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-100"
                />

              </div>

            </div>

            {/* DETAILS */}
            <div className="col-lg-6">

              <h2 className="text-white mb-4">
                {project.title}
              </h2>

              <p className="section-text">
                {project.description}
              </p>

              <h4 className="text-white mt-4 mb-3">
                Technologies Used
              </h4>

              <div className="project-tech mb-4">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

              <div className="d-flex gap-3 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="bi bi-github me-2"></i>
                  View on GitHub
                </a>

                <Link
                  to="/projects"
                  className="btn btn-outline-light"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Projects
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;
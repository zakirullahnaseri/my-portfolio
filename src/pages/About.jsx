import { Link } from "react-router-dom";
import profileImage from "../assets/profile2.png";

function About() {
  return (
    <main className="page-section about-page">

      {/* Page Header */}
      <section className="container text-center mb-5">
        <span className="section-badge">ABOUT ME</span>

        <h1 className="display-5 fw-bold mt-3">
          Full-Stack Web Developer
        </h1>

        <p className="section-subtitle mx-auto">
          I build modern, responsive and user-friendly web applications
          with clean and maintainable code.
        </p>
      </section>

      {/* Introduction */}
      <section className="container mb-5">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-lg-5 text-center">
            <div className="about-image-wrapper">
              <img
                src={profileImage}
                alt="Zakirullah"
                className="about-image"
              />
            </div>
          </div>

          {/* Text */}
          <div className="col-lg-7">

            <span className="text-primary fw-semibold">
              WHO I AM
            </span>

            <h2 className="fw-bold mt-2 mb-4">
              Hi, I'm Zakirullah
            </h2>

            <p className="text-secondary">
              I am a Full-Stack Web Developer passionate about creating
              modern and responsive web applications. I enjoy turning ideas
              into practical digital solutions with clean, reusable and
              maintainable code.
            </p>

            <p className="text-secondary">
              My development experience includes frontend and backend
              technologies such as React, JavaScript, jQuery, PHP, Laravel,
              Bootstrap, MySQL and REST APIs.
            </p>

            <p className="text-secondary">
              I focus on responsive design, usability, performance and
              creating websites that work well across different devices.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/projects" className="btn btn-primary px-4">
                View My Projects
              </Link>

              <Link to="/contact" className="btn btn-outline-primary px-4">
                Contact Me
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="container mb-5">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="content-card h-100">

              <div className="about-section-icon">
                <i className="bi bi-code-slash"></i>
              </div>

              <h3 className="fw-bold mb-3">
                My Development Focus
              </h3>

              <p className="text-secondary">
                I focus on building websites and web applications that are
                responsive, easy to use and maintain. I believe good
                development combines clean code, thoughtful design and
                reliable functionality.
              </p>

              <ul className="about-list mt-4">
                <li>Responsive web design</li>
                <li>Reusable and maintainable components</li>
                <li>Modern frontend development</li>
                <li>Backend and database integration</li>
                <li>REST API integration</li>
                <li>Performance and usability</li>
              </ul>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="content-card h-100">

              <div className="about-section-icon">
                <i className="bi bi-person-workspace"></i>
              </div>

              <h3 className="fw-bold mb-3">
                What I Do
              </h3>

              <p className="text-secondary">
                I work across both frontend and backend development to create
                complete web solutions.
              </p>

              <ul className="about-list mt-4">
                <li>Frontend website development</li>
                <li>React applications</li>
                <li>PHP and Laravel development</li>
                <li>MySQL database management</li>
                <li>API integration</li>
                <li>Responsive Bootstrap interfaces</li>
              </ul>

            </div>
          </div>

        </div>
      </section>

      {/* Technical Skills */}
      <section className="container mb-5">

        <div className="text-center mb-5">
          <span className="section-badge">TECHNICAL SKILLS</span>

          <h2 className="fw-bold mt-3">
            Technologies I Work With
          </h2>
        </div>

        <div className="row g-4">

          {/* Frontend */}
          <div className="col-md-6 col-lg-4">
            <div className="content-card h-100">

              <i className="bi bi-window-stack about-skill-icon"></i>

              <h4 className="fw-bold">
                Frontend
              </h4>

              <p className="text-secondary">
                React, JavaScript, jQuery, HTML5, CSS3 and Bootstrap.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">jQuery</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Bootstrap</span>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="col-md-6 col-lg-4">
            <div className="content-card h-100">

              <i className="bi bi-server about-skill-icon"></i>

              <h4 className="fw-bold">
                Backend
              </h4>

              <p className="text-secondary">
                PHP, Laravel, SQL and MySQL for backend development and
                database management.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MySQL</span>
              </div>

            </div>
          </div>

          {/* APIs */}
          <div className="col-md-6 col-lg-4">
            <div className="content-card h-100">

              <i className="bi bi-plug about-skill-icon"></i>

              <h4 className="fw-bold">
                APIs & Integration
              </h4>

              <p className="text-secondary">
                Experience with REST APIs and connecting web applications
                with dynamic data and services.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <span className="skill-tag">REST API</span>
                <span className="skill-tag">API Integration</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Projects / Practical Experience */}
      <section className="container mb-5">

        <div className="content-card">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="text-primary fw-semibold">
                PRACTICAL EXPERIENCE
              </span>

              <h2 className="fw-bold mt-2 mb-3">
                Building Real Web Projects
              </h2>

              <p className="text-secondary mb-0">
                I have developed practical web projects that helped me build
                experience in frontend development, backend programming,
                database management and responsive web design.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">
              <Link
                to="/projects"
                className="btn btn-primary px-4"
              >
                Explore Projects
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* Education */}
      <section className="container mb-5">

        <div className="row">

          <div className="col-lg-8 mx-auto">

            <div className="content-card">

              <div className="about-section-icon">
                <i className="bi bi-mortarboard"></i>
              </div>

              <span className="text-primary fw-semibold">
                EDUCATION
              </span>

              <h3 className="fw-bold mt-2">
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-secondary mb-2">
                University of Paktia
              </p>

              <p className="text-secondary mb-0">
                In Progress — Expected Graduation 2027
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="container">

        <div className="about-cta text-center">

          <span className="section-badge">
            LET'S WORK TOGETHER
          </span>

          <h2 className="fw-bold mt-3">
            Have a project in mind?
          </h2>

          <p className="text-secondary mx-auto">
            I'm interested in building modern web applications and
            collaborating on useful digital projects.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary px-4 mt-3"
          >
            Get In Touch
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;
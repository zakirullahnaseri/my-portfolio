function Skills() {

  const skills = [
    {
      name: "HTML5",
      icon: "bi bi-filetype-html",
      description: "Semantic and structured web development.",
    },
    {
      name: "CSS3",
      icon: "bi bi-filetype-css",
      description: "Responsive layouts and modern styling.",
    },
    {
      name: "Bootstrap",
      icon: "bi bi-bootstrap",
      description: "Responsive and mobile-first UI development.",
    },
    {
      name: "JavaScript",
      icon: "bi bi-filetype-js",
      description: "Interactive and dynamic web applications.",
    },
    {
      name: "jQuery",
      icon: "bi bi-code-slash",
      description: "DOM manipulation and frontend functionality.",
    },
    {
      name: "React",
      icon: "bi bi-braces",
      description: "Modern component-based frontend applications.",
    },
    {
      name: "PHP",
      icon: "bi bi-filetype-php",
      description: "Backend development and server-side applications.",
    },
    {
      name: "Laravel",
      icon: "bi bi-layers",
      description: "Modern PHP framework for web applications.",
    },
    {
      name: "MySQL",
      icon: "bi bi-database",
      description: "Database design and data management.",
    },
    {
      name: "SQL",
      icon: "bi bi-database-check",
      description: "Queries, relationships and database operations.",
    },
  ];

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
              MY EXPERTISE
            </p>

            <h1 className="section-title">
              My Skills
            </h1>

            <p className="section-text mx-auto">
              I work with a range of frontend and backend technologies
              to build responsive, practical and user-friendly web
              applications.
            </p>

          </div>

          <div className="row g-4">

            {skills.map((skill) => (

              <div
                className="col-12 col-sm-6 col-lg-3"
                key={skill.name}
              >

                <div className="skill-card h-100 text-center">

                  <div className="skill-icon mb-3">
                    <i className={skill.icon}></i>
                  </div>

                  <h4 className="text-white">
                    {skill.name}
                  </h4>

                  <p className="section-text mb-0">
                    {skill.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Skills;
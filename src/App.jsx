
import bakeryImage from "./assets/bakery.png";
import newsImage from "./assets/news.png";


function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#home">
            ZAKIR<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="btn btn-primary px-4">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">

            <div className="col-lg-7">
              <p className="hero-small-text">
                👋 Hello, I'm
              </p>

              <h1 className="display-2 fw-bold text-white">
                Zakir Khan
              </h1>

             <h2 className="hero-title">
  Full-Stack Web Developer
</h2>

<p className="hero-description">
  I build modern, responsive and user-friendly web applications
  using frontend and backend technologies. I turn ideas into
  practical digital solutions with clean and maintainable code.
</p>

<div className="hero-tech mt-4">
  <span>HTML</span>
  <span>CSS</span>
  <span>Bootstrap</span>
  <span>JavaScript</span>
  <span>React</span>
  <span>PHP</span>
  <span>Laravel</span>
  <span>MySQL</span>
</div>


             <div className="d-flex gap-3 flex-wrap mt-4">
  <a
    href="#projects"
    className="btn btn-primary btn-lg px-4"
  >
    View My Projects
    <i className="bi bi-arrow-right ms-2"></i>
  </a>

  <a
    href="#contact"
    className="btn btn-outline-light btn-lg px-4"
  >
    Contact Me
  </a>

  <a
    href="#"
    className="btn btn-light btn-lg px-4"
  >
    <i className="bi bi-download me-2"></i>
    Download CV
  </a>
</div>

              <div className="social-links mt-5">
                <a href="https://github.com/zakirullahnaseri" target="_blank" 
                rel="noopener noreferrer" aria-label="GitHub">
                 <i className="bi bi-github"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                 <a href="#" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
                

                <a href="https:/www.facebook.com/Zakirullah Naseri" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="hero-image-wrapper">

                <div className="hero-image">
                  <i className="bi bi-person-fill"></i>
                </div>

                <div className="floating-card card-one">
                  <i className="bi bi-code-slash"></i>
                  React
                </div>

                <div className="floating-card card-two">
                  <i className="bi bi-database"></i>
                  MySQL
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <div className="container text-center">

          <p className="section-subtitle">
            ABOUT ME
          </p>

          <h2 className="section-title">
            Full-Stack Web Developer
          </h2>

          <p className="section-text mx-auto">
            I am a passionate Full-Stack Web Developer focused on
            building responsive, practical and user-friendly web
            applications. I work with frontend technologies such as
            HTML, CSS, Bootstrap, JavaScript, jQuery and React.
            I also have experience with PHP, Laravel and MySQL for
            backend development and database management.
          </p>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section dark-section">
        <div className="container">

          <div className="text-center mb-5">
            <p className="section-subtitle">
              MY SKILLS
            </p>

            <h2 className="section-title">
              Technologies I Work With
            </h2>
          </div>

          <div className="row g-4">

            {/* HTML */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-filetype-html"></i>
                <h5>HTML5</h5>
                <p>
                  Building structured and semantic web pages.
                </p>
              </div>
            </div>

            {/* CSS */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-filetype-css"></i>
                <h5>CSS3</h5>
                <p>
                  Creating responsive and modern interfaces.
                </p>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-bootstrap-fill"></i>
                <h5>Bootstrap</h5>
                <p>
                  Creating responsive layouts and components.
                </p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-filetype-js"></i>
                <h5>JavaScript</h5>
                <p>
                  Building interactive web applications.
                </p>
              </div>
            </div>

            {/* jQuery */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-code-square"></i>
                <h5>jQuery</h5>
                <p>
                  DOM manipulation and interactive features.
                </p>
              </div>
            </div>

            {/* React */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-braces"></i>
                <h5>React</h5>
                <p>
                  Building modern component-based applications.
                </p>
              </div>
            </div>

            {/* PHP */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-filetype-php"></i>
                <h5>PHP</h5>
                <p>
                  Developing server-side web applications.
                </p>
              </div>
            </div>

            {/* Laravel */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-terminal"></i>
                <h5>Laravel</h5>
                <p>
                  Building backend applications and APIs.
                </p>
              </div>
            </div>

            {/* MySQL */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-database"></i>
                <h5>MySQL</h5>
                <p>
                  Database design and data management.
                </p>
              </div>
            </div>

            {/* SQL */}
            <div className="col-md-6 col-lg-3">
              <div className="skill-card">
                <i className="bi bi-database-fill"></i>
                <h5>SQL</h5>
                <p>
                  Working with queries and relational databases.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <div className="container">

          <div className="text-center mb-5">
            <p className="section-subtitle">
              MY WORK
            </p>

            <h2 className="section-title">
              Featured Projects
            </h2>

            <p className="section-text mx-auto">
              Here are some of the projects I have developed while
              building my practical web development experience.
            </p>
          </div>

          <div className="row g-4">

            {/* ================= BAKERY PROJECT ================= */}
            <div className="col-md-6">
              <div className="project-card">
                  <img src={bakeryImage} alt="Bakery Management System"
                   className="project-image"
                       />
                <div className="project-icon">

                 
                  <i className="bi bi-shop"></i>
                </div>

                <h4>
                  Bakery Management System
                </h4>

                <p>
                  A web-based management system designed to manage
                  bakery products, sales, customers and business
                  information efficiently.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>

                <div className="project-buttons mt-4">
                  <a href="#" className="btn btn-primary">
                    <i className="bi bi-eye me-2"></i>
                    Live Demo
                  </a>

                 <a
                     href="https://github.com/zakirullahnaseri/Bakery-Management-System"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline-dark"
                    >
                  <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                </div>

              </div>
            </div>

            {/* ================= NEWS PROJECT ================= */}
            <div className="col-md-6">
              <div className="project-card">
              <img
                    src={newsImage}
                    alt="News Project"
                    className="project-image"
                      />
                <div className="project-icon">
                  
                  <i className="bi bi-newspaper"></i>
                </div>

                <h4>
                  News Project
                </h4>

                <p>
                  A responsive news web application designed to
                  display news articles with a clean and
                  user-friendly interface.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>

                <div className="project-buttons mt-4">
                  <a href="#" className="btn btn-primary">
                    <i className="bi bi-eye me-2"></i>
                    Live Demo
                  </a>
                  <a
                      href="https://github.com/zakirullahnaseri/News-project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                      >
                      <i className="bi bi-github me-2"></i>
                       GitHub
                      </a>

                 
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section dark-section">
        <div className="container text-center">

          <p className="section-subtitle">
            CONTACT
          </p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-text mx-auto">
            Have a project or idea? Feel free to get in touch with me.
          </p>

         <a
          href="mailto:zakirullahnaseri10203040@gmail.com"
            className="btn btn-primary btn-lg mt-3"
          >
         <i className="bi bi-envelope me-2"></i>
         Send Me an Email
        </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container text-center">
          <p>
            © 2026 Zakir Khan. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}


export default App
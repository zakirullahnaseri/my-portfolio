import { Link } from "react-router-dom";
import profileImage from "../assets/profile2.png";

function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            {/* LEFT */}
            <div className="col-lg-7">

              <p className="hero-small-text">
                Hello
              </p>

              <h1 className="display-3 fw-bold text-white">
                I'm  Zakirullah
              </h1>

              <h2 className="hero-title">
                Full Stack Developer | HTML,CSS,Bootstrap,JavaScript,Jquery,React,PHP Laravel,SQL,MySQL
              </h2>

              <p className="hero-description">
                Full Stack Developer specializing in JavaScript, React,Bootstrap ,CSS, HTML, and PHP, with a strong foundation in Data Structures and Algorithms (DSA) and API integration. Experienced in building production-ready, responsive, and accessible user interfaces and dashboards by consuming REST APIs, handling dynamic data, and optimizing performance. Skilled in component-based architecture, efficient state management, and WCAG-compliant accessibility.
                            
              </p>

           

              {/* BUTTONS */}
              <div className="d-flex gap-3 flex-wrap mt-4">

                <Link
                  to="/projects"
                  className="btn btn-primary btn-lg px-4"
                >
                  View My Projects
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Contact Me
                </Link>

                <a
                  href="/Zakir-khan-CV.pdf"
                  download="Zakir-Khan-CV.pdf"
                  className="btn btn-light btn-lg px-4"
                >
                  <i className="bi bi-download me-2"></i>
                  Download CV
                </a>

              </div>

              {/* SOCIAL */}
              <div className="social-links mt-5">

                <a
                  href="https://github.com/zakirullahnaseri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="#"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="col-lg-5 text-center mt-5 mt-lg-0">

              <div className="hero-image-wrapper">

                <div className="hero-profile">

                  <img
                    src={profileImage}
                    alt="Zakir Khan - Full-Stack Web Developer"
                    className="profile-image"
                  />

                </div>

                {/* <div className="floating-card card-one">
                  <i className="bi bi-code-slash"></i>
                  React
                </div>

                <div className="floating-card card-two">
                  <i className="bi bi-database"></i>
                  MySQL
                </div> */}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
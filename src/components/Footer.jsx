import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-5">

            <Link to="/" className="footer-brand">
              ZAKIR<span>.</span>
            </Link>

            <p className="footer-description">
              Full-Stack Web Developer crafting modern,
              responsive and user-friendly web applications.
            </p>

            <div className="footer-social">

              <a
                href="https://github.com/zakirullahnaseri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-3">

            <h5 className="footer-title">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/skills">Skills</Link>
              </li>

              <li>
                <Link to="/projects">Projects</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4">

            <h5 className="footer-title">
              Get In Touch
            </h5>

            <p className="footer-description">
              Have a project or collaboration in mind?
              Feel free to reach out.
            </p>

            <a
              href="mailto:zakirullahnaseri10203040@gmail.com"
              className="footer-contact"
            >
              <i className="bi bi-envelope me-1"></i>

              <span>
                zakirullahnaseri10203040@gmail.com
              </span>
            </a>

            <Link
              to="/contact"
              className="btn btn-primary footer-button mt-4"
            >
              Contact Me
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 <span>Zakirullah</span>. All Rights Reserved.
          </p>

          <p>
            Built with React & Bootstrap
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
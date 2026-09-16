import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-zk.png";
function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

      <Link className="navbar-brand logo-brand" to="/">
            <img
             src={logo}
             alt="Zakir Khan Logo"
             className="navbar-logo"
             />
              </Link>

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
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/skills") ? "active" : ""}`}
                to="/skills"
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/projects") ? "active" : ""}`}
                to="/projects"
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="btn btn-primary px-4">
                Hire Me
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
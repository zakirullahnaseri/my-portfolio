import { Link } from "react-router-dom";

import bakeryImage from "../assets/bakery.png";
import newsImage from "../assets/news.png";
import typingImage from "../assets/pashtotyping.png";
import porductImage from "../assets/productStore.png";

function Projects() {
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
              MY WORK
            </p>

            <h1 className="section-title">
              My Projects
            </h1>

            <p className="section-text mx-auto">
              Here are some of the projects I have developed using
              modern frontend and backend technologies.
            </p>

          </div>

          <div className="row g-4">

            {/* BAKERY */}
            <div className="col-lg-6">

              <div className="project-card h-100">

                <img
                  src={bakeryImage}
                  alt="Bakery Management System"
                  className="project-image w-100"
                />

                <div className="p-4">

                  <h3 className="text-white mb-3">
                    Bakery Management System
                  </h3>

                  <p className="section-text">
                    A web-based management system to manage bakery
                    products, sales, customers and business information
                    efficiently.
                  </p>

                  <div className="project-tech mb-4">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                    <span>PHP</span>
                    <span>MySQL</span>

                  </div>

                  <div className="d-flex gap-2 flex-wrap">

                    <Link
                      to="/projects/bakery"
                      className="btn btn-primary"
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

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

            </div>


            {/* NEWS */}
            <div className="col-lg-6">

              <div className="project-card h-100">

                <img
                  src={newsImage}
                  alt="News Project"
                  className="project-image w-100"
                />

                <div className="p-4">

                  <h3 className="text-white mb-3">
                    News Project
                  </h3>

                  <p className="section-text">
                    A responsive news web application to display news
                    articles with a clean and user-friendly interface.
                  </p>

                  <div className="project-tech mb-4">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                    <span>PHP</span>
                    <span>MySQL</span>

                  </div>

                  <div className="d-flex gap-2 flex-wrap">

                    <Link
                      to="/projects/news"
                      className="btn btn-primary"
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

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


            {/* Typing  */}
            <div className="col-lg-6">

              <div className="project-card h-100">

                <img
                  src={typingImage}
                  alt="pashto Typing template "
                  className="project-image w-100"
                />

                <div className="p-4">

                  <h3 className="text-white mb-3">
                    Pashto Typing Template 
                  </h3>

                  <p className="section-text">
                    A web-based Patho typing Template simple designIt is a simple and user-friendly template for typing in the Pashto language.
                  
                  </p>

                  <div className="project-tech mb-4">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                  
                  </div>

                  <div className="d-flex gap-2 flex-wrap">

                    <Link
                      to="/projects/Pashto"
                      className="btn btn-primary"
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                    <a
                      href="https://github.com/zakirullahnaseri/PashtoTypingTemplate"
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

        {/* Product store section  */}
            <div className="col-lg-6">

              <div className="project-card h-100">

                <img
                  src={porductImage}
                  alt="React-product-card-store"
                  className="project-image w-100"
                />

                <div className="p-4">

                  <h3 className="text-white mb-3">
                    React-product-card-store
                  </h3>

                  <p className="section-text ">
                    React e-commerce product store with product cards, category filtering, Context API, Axios, Bootstrap, and Fake Store API.
                
                  </p>

                  <div className="project-tech mb-4">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Context API</span>
                  
                  
                  </div>

                  <div className="d-flex gap-2 flex-wrap">

                    <Link
                      to="/projects/productStore"
                      className="btn btn-primary"
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                    <a
                      href="https://github.com/zakirullahnaseri/React-product-card-store"
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

        </div>

      </section>

    </main>
  );
}

export default Projects;
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xrpbzyno");

  if (state.succeeded) {
    return (
      <main>
        <section
          className="section dark-section"
          style={{
            paddingTop: "140px",
            minHeight: "100vh",
          }}
        >
          <div className="container text-center">

            <i
              className="bi bi-check-circle-fill text-success"
              style={{ fontSize: "70px" }}
            ></i>

            <p className="section-subtitle mt-4">
              MESSAGE SENT
            </p>

            <h1 className="section-title">
              Thank You!
            </h1>

            <p className="section-text mx-auto">
              Your message has been sent successfully.
              I will get back to you as soon as possible.
            </p>

            <Link
              to="/"
              className="btn btn-primary btn-lg mt-3"
            >
              <i className="bi bi-house me-2"></i>
              Back to Home
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
              CONTACT
            </p>

            <h1 className="section-title">
              Let's Work Together
            </h1>

            <p className="section-text mx-auto">
              Have a project, idea or question?
              Send me a message and I will get back to you.
            </p>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="project-card p-4 p-md-5">

                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="form-label text-white"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label text-white"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="form-label text-white"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Enter message subject"
                      required
                    />

                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label text-white"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="form-control"
                      placeholder="Write your message..."
                      required
                    ></textarea>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* General error */}
                  {state.errors && (
                    <ValidationError
                      errors={state.errors}
                    />
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>

                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>

                </form>

              </div>

            </div>
          </div>

          {/* Contact information */}
          <div className="row justify-content-center mt-5">

            <div className="col-lg-8">

              <div className="row g-4 text-center">

                <div className="col-md-6">
                  <div className="skill-card h-100">

                    <i
                      className="bi bi-envelope text-primary"
                      style={{ fontSize: "35px" }}
                    ></i>

                    <h5 className="text-white mt-3">
                      Email
                    </h5>

                    <a
                      href="mailto:zakirullahnaseri10203040@gmail.com"
                      className="text-decoration-none"
                    >
                      zakirullahnaseri10203040@gmail.com
                    </a>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="skill-card h-100">

                    <i
                      className="bi bi-github text-primary"
                      style={{ fontSize: "35px" }}
                    ></i>

                    <h5 className="text-white mt-3">
                      GitHub
                    </h5>

                    <a
                      href="https://github.com/zakirullahnaseri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      github.com/zakirullahnaseri
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

export default Contact;
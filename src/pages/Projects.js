import echologo from "../assets/echo-logo.png";
import lambo from "../assets/lambo.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-project">
          <h1>Echo Radio</h1>
          <hr />
          <img src={echologo} />
          <div className="icons-container">
            <div className="icons">
              <a target="_blank" href="https://echo-radio.herokuapp.com/">
                <i className="eye icon"></i>Preview
              </a>
              <a target="_blank" href="https://github.com/devluked/echo-radio">
                <i className="alternate github icon"></i>Github
              </a>
            </div>
          </div>
        </div>
        <div className="projects-project">
          <h1>SoCal Vinverify</h1>
          <hr />
          <img
            style={{ borderRadius: "10px", filter: "grayscale(100%)" }}
            src={lambo}
          />
          <div className="icons-container">
            <div className="icons">
              <a target="_blank" href="https://www.socalvinverify.com/">
                <i className="eye icon"></i>Preview
              </a>
              <a
                target="_blank"
                href="https://github.com/devluked/sheila-website"
              >
                <i className="alternate github icon"></i>Github
              </a>
            </div>
          </div>
        </div>

        <div className="projects-project">
          <h1>Echo Radio</h1>
          <hr />
          <img src={echologo} />
          <div className="icons-container">
            <div className="icons">
              <a target="_blank" href="https://echo-radio.herokuapp.com/">
                <i className="eye icon"></i>Preview
              </a>
              <a target="_blank" href="https://github.com/devluked/echo-radio">
                <i className="alternate github icon"></i>Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

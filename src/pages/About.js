function About() {
  return (
    <>
      <section id="about" className="about">
        <h1>I graduated from Cal State Fullerton in 2021.</h1>
        <h2>With a bachelors degree in Computer Science.</h2>
        <div className="jobs">
          <div className="job">
            <h3>July 2021 - Present</h3>
            <h4>Bridge Event Technology</h4>
            <h5>React Engineer</h5>
            <h4>
              • Started position as an intern working on small tickets in Trello
              board until moving into a Jr. position
              <br />• Worked on bug fixes and added new features to the front
              end such as bulk operations, UI improvement and flow
              <br />• Created new end points on the server for fetching data
              from the API and making POST requests to the database
              <br />• Refactored class components into functional components
              while also shifting components to styled components
              <br />• Created pull requests on GitLab for senior developers to
              review before merging into master
            </h4>
          </div>
        </div>

        <div className="jobs">
          <div className="job">
            <h3>Feb 2020 - Jan 2021</h3>
            <h4>Edwards Life Sciences</h4>
            <h5>Legal Ops Associate</h5>
            <h4>
              • Supported and managed technical side of legal department
              consisting of 20+ attorneys. <br />• Opened tickets in ServiceNow
              to resolve IT related issues out of my scope and to document
              changes made to SaaS solutions.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

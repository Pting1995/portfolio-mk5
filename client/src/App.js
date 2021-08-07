import React from "react";
import AboutMe from "./components/aboutMe.js"
import ProjectCard from "./components/projectCard.js"
import ProjectList from "./components/projectList.json"

function App() {
  return (
    <div className="App">
      <div className="background-slice" />
      <main>
        <section className="about-me">
          <AboutMe />
        </section>
        <section className="projects">
          {ProjectList.map((project, index) => {
            return (<ProjectCard
              key={index}
              projectName={project.projectName}
              skillsShowcased={project.skillsShowcased}
              projectDescription={project.projectDescription}
              imgName={project.imgName}
              gifName={project.gifName}
              deployedLink={project.deployedLink}
              gitHubLink={project.gitHubLink}
            />)
          })}
        </section>
      </main>
    </div>
  );
}

export default App;

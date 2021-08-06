import React from "react";
import AboutMe from "./components/aboutMe.js"
import Projects from "./components/featuredProjects.js"

function App() {
  return (
    <div className="App">
      <div className="background-slice" />
      <main>
        <section className="about-me">
          <AboutMe />
        </section>
        <section className="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;

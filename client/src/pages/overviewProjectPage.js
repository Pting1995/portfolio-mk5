import React from "react";
import ProjectCard from "../components/projectCard.js"
import AboutMe from "../components/aboutMe"

function Home(props) {
    console.log(props)
    return (
        <div className="App">
            <main className="has-two-col-1-3">
                <AboutMe />
                <section className="projects has-two-col">
                    {props.projectList.map((project, index) => {
                        return (<ProjectCard
                            key={index}
                            projectName={project.projectName}
                            url={project.url}
                            skillsShowcased={project.skillsShowcased}
                            techUsed={project.techUsed}
                            projectDescription={project.projectDescription}
                            imgName={project.imgName}
                            gifName={project.gifName}
                            deployedLink={project.deployedLink}
                            gitHubLink={project.gitHubLink}
                            className={project.className}
                        />)
                    })}
                </section>
            </main>
        </div>
    );
}

export default Home;

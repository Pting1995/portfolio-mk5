import React from "react";
import AboutMe from "../components/aboutMe.js"
import ProjectCard from "../components/projectCard.js"

function Home(props) {
    console.log(props)
    return (
        <div className="App">
            <div className="background-slice" />
            <main>
                <section className="projects has-two-col">
                    {props.projectList.map((project, index) => {
                        return (<ProjectCard
                            key={index}
                            projectName={project.projectName}
                            url={project.url}
                            skillsShowcased={project.skillsShowcased}
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

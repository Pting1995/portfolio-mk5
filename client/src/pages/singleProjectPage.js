import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDB from "../components/videoDB"
import AboutMe from "../components/aboutMe"

function SingleProjectPage(props) {

    const [projectIndex, setProjectIndex] = useState(0)

    let { projectName } = useParams()

    let projectList = props.projectList

    function findProject(projectName, projectList) {

        for (var i = 0; i < projectList.length; i++) {

            if (projectName == projectList[i].url) {
                return (i)
            }
        }
    }

    useEffect(() => {
        setProjectIndex(findProject(projectName, projectList))
        console.log(projectIndex)
    });

    return (

        <div className="App">

            <main className="project-single has-two-col-1-3">
                <AboutMe />
                <section className="project">
                    <VideoDB videoName={props.projectList[projectIndex].videoName} />
                    <section className="has-two-col">
                        <div>
                            <h3>{props.projectList[projectIndex].skillsShowcased}</h3>
                            <div className="btn-group" id="btn-grid">
                                <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].gitHubLink} target="_blank">GitHub Repo</a>
                                <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].deployedLink} target="_blank">Live Site</a>
                            </div>
                        </div>
                        <p>{props.projectList[projectIndex].projectDescription}</p>
                    </section>
                </section>
            </main>
        </div >
    );
}

export default SingleProjectPage;
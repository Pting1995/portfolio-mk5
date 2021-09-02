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
        <div className="single-project-container">
            <div className="App has-two-col-1-3">
                <AboutMe />
                <main className="project-single project">
                    <h2>{props.projectList[projectIndex].projectName}</h2>
                    <VideoDB videoName={props.projectList[projectIndex].videoName} />
                    <section className="project-details">
                        <h3>Skills Showcased: {props.projectList[projectIndex].skillsShowcased}</h3>
                        <h3>Technology Used: {props.projectList[projectIndex].techUsed}</h3>
                        <p>{props.projectList[projectIndex].projectDescription}</p>

                        <div className="btn-group" id="btn-grid">
                            <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].gitHubLink} target="_blank">GitHub Repo</a>
                            <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].deployedLink} target="_blank">Live Site</a>
                        </div>

                    </section>
                </main>
            </div >
        </div>
    );
}

export default SingleProjectPage;
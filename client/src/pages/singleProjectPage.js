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
    });

    return (
        <div className="single-project-container">
            <div className="App has-two-col-1-3">
                <AboutMe />
                <main className="project-single project">
                    <div>
                        <h2>{props.projectList[projectIndex].projectName}</h2>

                        <VideoDB videoName={props.projectList[projectIndex].videoName} />
                        <section className="has-two-col">
                            <div className="project-info-important">
                                <div className="btn-group" id="project-btn">
                                    <a className="btn has-light-text has-dark-bg-color" href={props.projectList[projectIndex].gitHubLink} target="_blank">GitHub Repo</a>
                                    <a className="btn has-light-text has-dark-bg-color" href={props.projectList[projectIndex].deployedLink} target="_blank">Live Site</a>
                                </div>
                                <h3>Skills Showcased: {props.projectList[projectIndex].skillsShowcased}</h3>
                                <h3>Technology Used: {props.projectList[projectIndex].techUsed}</h3>
                            </div>

                            <p>{props.projectList[projectIndex].projectDescription}</p>



                        </section>

                    </div>

                </main>
            </div >
        </div>
    );
}

export default SingleProjectPage;
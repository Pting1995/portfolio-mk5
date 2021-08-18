import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgDB from "../components/imgDB"

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
            <main>
                <section className="project">

                    <section>
                        <h3>{props.projectList[projectIndex].skillsShowcased}</h3>

                        <p>{props.projectList[projectIndex].projectDescription}</p>

                        <div className="btn-group" id="btn-grid">
                            <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].gitHubLink} target="_blank">GitHub Repo</a>
                            <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].deployedLink} target="_blank">Live Site</a>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default SingleProjectPage;
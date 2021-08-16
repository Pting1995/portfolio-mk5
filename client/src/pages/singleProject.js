import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutMe from "../components/aboutMe";
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
            <div className="background-slice" />
            <main>
                <section className="about-me">
                    <AboutMe />
                </section>

                <section className="project">
                    <figure>
                        <ImgDB imgName={props.projectList[projectIndex].gifName} />
                    </figure>
                    <h3>{props.projectList[projectIndex].skillsShowcased}</h3>
                    <section>
                        <p>{props.projectList[projectIndex].projectDescription}</p>
                    </section>
                    <div className="btn-group" id="btn-grid">
                        <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].gitHubLink}>GitHub Repo</a>
                        <a className="btn has-dark-text has-primary-bg-color" href={props.projectList[projectIndex].deployedLink}>Live Site</a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SingleProjectPage;
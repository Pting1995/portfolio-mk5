import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutMe from "../components/aboutMe";

function SingleProjectPage(props) {

    let { projectName } = useParams()
    // console.log(props)

    let projectList = props.projectList

    function findProject(projectName, projectList) {

        for (var i = 0; i < projectList.length; i++) {

            if (projectName == projectList[i].url) {
                return (i)
            }
        }
    }

    useEffect(() => {
        findProject(projectName, projectList);
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
                        {/* <ImgDB imgName={props.gifName} /> */}
                    </figure>
                    <h3>{props.skillsShowcased}</h3>
                    <section>
                        <p>{props.projectDescription}</p>
                    </section>
                    <div className="btn-group" id="btn-grid">
                        <a className="btn has-dark-text has-primary-bg-color" href={props.gitHubLink}>GitHub Repo</a>
                        <a className="btn has-dark-text has-primary-bg-color" href={props.deployedLink}>Live Site</a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SingleProjectPage;
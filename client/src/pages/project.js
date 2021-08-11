import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AboutMe from "../components/aboutMe";
import ProjectList from "../components/projectList.json";
import ImgDB from "../components/imgDB";

function ProjectPage(props) {
    console.log(props)
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

export default ProjectPage;
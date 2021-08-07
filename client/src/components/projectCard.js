import React from "react";
import ImgDB from "./imgDB"

function projectCard(props) {
    function hi() {
        console.log("hi")
    }
    return (
        <>
            <div className="card">
                <article className="project">
                    <figure>
                        <ImgDB imgName={props.imgName} />
                        <ImgDB imgName={props.gifName} />
                    </figure>
                    <div className="has-two-col">
                        <section>
                            <h2>{props.projectName}</h2>
                            <h3>{props.skillsShowcased}</h3>

                        </section>
                        <section>
                            <p>{props.projectDescription}</p>
                        </section>
                    </div>

                </article>
                <div className="btn-group" id="btn-grid">
                    <a className="btn has-dark-text has-primary-bg-color" href={props.gitHubLink}>GitHub Repo</a>
                    <a className="btn has-dark-text has-primary-bg-color" href={props.deployedLink}>Live Site</a>
                </div>
            </div>
        </>
    );
}

export default projectCard;
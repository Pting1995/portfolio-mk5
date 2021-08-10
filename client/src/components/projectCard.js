import React from "react";
import ImgDB from "./imgDB"

function projectCard(props) {
    return (
        <>
            <div>
                <div className="card">
                    <article className="project">
                        <h2>{props.projectName}</h2>
                        <figure>
                            <ImgDB imgName={props.imgName} />
                            {/* <ImgDB imgName={props.gifName} /> */}
                        </figure>
                        <div>
                            {/* <h3>{props.skillsShowcased}</h3> */}
                            {/* <section>
                                <p>{props.projectDescription}</p>
                            </section> */}
                        </div>

                    </article>
                    {/* <div className="btn-group" id="btn-grid">
                        <a className="btn has-dark-text has-primary-bg-color" href={props.gitHubLink}>GitHub Repo</a>
                        <a className="btn has-dark-text has-primary-bg-color" href={props.deployedLink}>Live Site</a>
                    </div> */}
                </div>
            </div>

        </>
    );
}

export default projectCard;
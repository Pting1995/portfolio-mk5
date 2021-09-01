import React from 'react';
import { Link } from "react-router-dom";
import ImgDB from "./imgDB"

function projectCard(props) {

    return (
        <>
            <div className={props.className}>
                <Link to={`/project/${props.url}`}>
                    <div className="card">
                        <article className="project">

                            <figure>
                                <ImgDB imgName={props.imgName} />
                                <div class="project-description">
                                    <h2 className="appear-on-hover">Project: {props.projectName}</h2>
                                    <p className="appear-on-hover">Technologies: {props.techUsed}</p>
                                </div>
                                <div className="see-more">
                                    <p className="appear-on-hover">Click to see full project</p>
                                </div>
                            </figure>
                        </article>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default projectCard;
import React from 'react';
import { Link } from "react-router-dom";
import ImgDB from "./imgDB"

function projectCard(props) {

    return (
        <>
            <div className={props.className}>
                <Link to={`project/${props.url}`}>
                    <article className="project">
                        <figure>
                            <ImgDB imgName={props.imgName} />
                            <div className="project-description">
                                <h2 className="appear-on-hover">Project: {props.projectName}</h2>
                                <p className="appear-on-hover hide-on-mobile">Technologies: {props.techUsed}</p>
                            </div>
                        </figure>
                    </article>
                </Link>
            </div>
        </>
    );
}

export default projectCard;
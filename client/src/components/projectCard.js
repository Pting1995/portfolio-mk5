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
                            <h2>Project: {props.projectName}</h2>
                            <figure>
                                <ImgDB imgName={props.imgName} />
                            </figure>
                        </article>
                    </div>
                </Link>

            </div>
        </>
    );
}

export default projectCard;
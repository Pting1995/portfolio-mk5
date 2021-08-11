import React, { useState, useEffect } from 'react';
import ImgDB from "./imgDB"

function projectCard(props) {
    const [project, setProject] = useState()

    useEffect(() => {
        return setProject(props)
    });

    console.log(project)
    return (
        <>
            <div className={props.className}>
                <div className="card">
                    <article className="project">
                        <h2>Project: {props.projectName}</h2>
                        <figure>
                            <ImgDB imgName={props.imgName} />


                        </figure>
                    </article>
                </div>
            </div>
        </>
    );
}

export default projectCard;
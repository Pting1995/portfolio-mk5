import React from "react";
import ImgDB from "./imgDB"

function AboutMe() {
    return (
        <>
            <section className="card">
                <figure>
                    <ImgDB imgName="itme" />
                </figure>
                <h1>Hey there, I'm Peter!</h1>
                <p>I recently earned a Certificate in UC Berkeley's Full Stack Web Development program, I am currently seeking full-time opportunities in web development. I have built multiple full stack projects in my portfolio, and the source code can be found in my GitHub.</p>
            </section>
        </>
    );
}

export default AboutMe;
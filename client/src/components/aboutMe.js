import React from "react";
import ImgDB from "./imgDB";

function AboutMe() {
    return (
        <>
            <section className="aboutMe">
                <figure>
                    <ImgDB imgName="itme" />
                </figure>
                <nav>
                    <a href="/">Project Overview</a>
                    <a href="https://github.com/Pting1995" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/pting002/" target="_blank">LinkedIn</a>
                    <a href="/assets/Resume.pdf" target="_blank">Resume</a>
                </nav>
                <h1>Hey there, I'm Peter!</h1>
                <p>I recently earned a Certificate in UC Berkeley's Full Stack Web Development program, I am currently seeking full-time opportunities in web development. If any of these projects interest you please contact me!</p>

            </section>
        </>
    );
}

export default AboutMe;
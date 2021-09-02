import React from "react";
import ImgDB from "./imgDB";

function AboutMe() {
    return (
        <>
            <div>
                <section className="aboutMe">
                    <figure>
                        <ImgDB imgName="itme" />
                    </figure>
                    <h1>Hey there, I'm Peter!</h1>
                    <p>I am currently seeking full-time opportunities in web development. Please contact me if any of my projects interest you!</p>
                    <nav>
                        <a href="/">Project Overview</a>
                        <a href="https://github.com/Pting1995" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/pting002/" target="_blank">LinkedIn</a>
                        <a href="/assets/Resume.pdf" target="_blank">Resume</a>
                    </nav>


                </section>
            </div>

        </>
    );
}

export default AboutMe;
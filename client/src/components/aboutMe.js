import React from "react";
import ImgDB from "./imgDB";

function AboutMe() {
    return (
        <>
            <div className="about-me-container">
                <section className="about-me">
                    <nav>
                        <a href="/">My Projects</a>
                        <a href="https://github.com/Pting1995" target="_blank">My Github</a>
                        <a href="https://www.linkedin.com/in/pting002/" target="_blank">My LinkedIn</a>
                        <a href="/assets/Resume.pdf" target="_blank">My Resume</a>
                    </nav>
                    <figure>
                        <ImgDB imgName="itme" />
                    </figure>
                    <h1>Hey there, I'm Peter!</h1>
                    <p>I am currently seeking full-time opportunities in web development. Please contact me if any of my projects interest you!</p>



                </section>
            </div>

        </>
    );
}

export default AboutMe;
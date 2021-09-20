import React from "react";
import ImgDB from "./imgDB";

function AboutMe() {
    return (
        <>
            <section className="about-me-slider-track">
                <div className="about-me-slider">
                    <div className="about-me">
                        <nav>
                            <a href="/portfolio-mk5">My Projects</a>
                            <a href="https://github.com/Pting1995" target="_blank">My Github</a>
                            <a href="https://www.linkedin.com/in/pting002/" target="_blank">My LinkedIn</a>
                            <a href="/portfolio-mk5/assets/Peter Ting's Resume.pdf" target="_blank">My Resume</a>
                        </nav>
                        <figure>
                            <ImgDB imgName="itme" />
                        </figure>
                        <h1>Hey there, I'm Peter!</h1>
                        <p>I am currently seeking full-time opportunities in web development. Please contact me if any of my projects interest you!</p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutMe;
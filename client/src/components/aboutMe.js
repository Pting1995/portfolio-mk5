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
                            <a href="https://github.com/Pting1995" target="_blank" rel="noreferrer">My Github</a>
                            <a href="https://www.linkedin.com/in/pting002/" target="_blank" rel="noreferrer">My LinkedIn</a>
                            <a href="/portfolio-mk5/assets/Resume-Peter-Ting.pdf" target="_blank">My Resume</a>
                        </nav>
                        <figure>
                            <ImgDB imgName="peter" />
                        </figure>
                        <h1>Hey there, I'm Peter!</h1>
                        <p>I fell in love with coding ever since my first "A-ha!" moment and am currently pursuing the next epiphany! Please contact me if any of my projects interest you.</p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutMe;
import React from "react";
import ImgDB from "./imgDB"

function AboutMe() {
    return (
        <>
            <section className="aboutMe">
                <figure>
                    <ImgDB imgName="itme" />
                </figure>
                <h1>Hey there, I'm Peter!</h1>
                <p>I recently earned a Certificate in UC Berkeley's Full Stack Web Development program, I am currently seeking full-time opportunities in web development. If any of these projects interest you please contact me!</p>
            </section>
        </>
    );
}

export default AboutMe;
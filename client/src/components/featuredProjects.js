import React from "react";
import ImgDB from "./imgDB"
import ProjectList from "./projectList.json"

function featuredProjects() {
    return (
        <>
            <div className="card">
                <article className="featured project">
                    <figure>
                        <ImgDB imgName="danielle" />
                    </figure>
                    <div className="has-two-col">
                        <section>
                            <h2>Project: Danielle</h2>
                            <h3>Skills Showcase: Full Stack Development, React, React State, Local Storage, Bootstrap, API, Sequelize, Stripe Integration</h3>

                        </section>
                        <section>
                            <p>This is a full-stack React application built for San Francisco-based baker Danielle M. Estrella. The application integrates e-commerce elements to give the site full functionality as a business development tool. There are two sides to the application, one for the shopper and one for the business owner. Guests to the site may view the complete menu, place orders, view her photo gallery, and more! Cart data persistence is accomplished using local storage and payments are processed using the Stripe payment API. Her menu is saved in a Sequelize database and is easily editable using the admin login which allows her to update, delete and create new menu items.</p>
                        </section>
                    </div>

                </article>
                <div className="btn-group" id="btn-grid">
                    <a className="btn has-dark-text has-primary-bg-color">GitHub Repo</a>
                    <a className="btn has-dark-text has-primary-bg-color">Live Site</a>
                </div>
            </div>
        </>
    );
}

export default featuredProjects;
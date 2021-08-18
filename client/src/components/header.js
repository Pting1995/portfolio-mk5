import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul className="navbar">
                        <li>
                            <a className="myName" href="/">
                                <span>Peter Ting</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar primary-nav">
                        <li>
                            <NavLink exact activeClassName="active" to="/">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/about">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <a href="/assets/Resume.pdf" target="_blank" rel="noreferrer">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";

// logos and nav
function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul className="navbar">
                        <li className="nav-logo">
                            <a className="logo" href="/">
                                <span>PinDrop Network</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar primary-nav">
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/tech">
                                Tech
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/et/overview">
                                ET
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
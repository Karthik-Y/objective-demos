import React from "react";

function burgerActive(e) {
    if (typeof window !== 'undefined' && document) {
        const navBurger = document.getElementById('navBurger');
        const navMenu = document.getElementById('navbarBasicExample');
        if (navBurger.classList.contains('is-active')) {
            navBurger.classList.remove('is-active');
            navMenu.classList.remove('is-active');
        } else {
            navBurger.classList.add('is-active');
            navMenu.classList.add('is-active');
        }
    }
}

const Navigation = () => {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                </a>

                <button id="navBurger" className="navbar-burger burger" aria-label="menu" data-target="navbarBasicExample" onClick={burgerActive}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href="/" className="navbar-item">
                        Home
                        </a>

                    <a href="/layouts" className="navbar-item">
                        Layouts
                        </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <button className="navbar-link">
                            More
                            </button>

                        <div className="navbar-dropdown">
                            <a href="/about" className="navbar-item">
                                About
                                </a>
                            <a href="/jobs" className="navbar-item">
                                Jobs
                                </a>
                            <a href="/contact" className="navbar-item">
                                Contact
                                </a>
                            <hr className="navbar-divider" />
                            <a href="/report-an-issue" className="navbar-item">
                                Report an issue
                                </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/signup" className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a href="/login" className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;

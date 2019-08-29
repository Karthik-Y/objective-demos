import React from "react";

const Navigation = () => {
    return (
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                </a>

                <a href="/" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a href="/" class="navbar-item">
                        Home
                        </a>

                    <a href="/layouts" class="navbar-item">
                        Layouts
                        </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <button class="navbar-link">
                            More
                            </button>

                        <div class="navbar-dropdown">
                            <a href="/about" class="navbar-item">
                                About
                                </a>
                            <a href="/jobs" class="navbar-item">
                                Jobs
                                </a>
                            <a href="/contact" class="navbar-item">
                                Contact
                                </a>
                            <hr class="navbar-divider" />
                            <a href="/report-an-issue" class="navbar-item">
                                Report an issue
                                </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a href="/signup" class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a href="/login" class="button is-light">
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

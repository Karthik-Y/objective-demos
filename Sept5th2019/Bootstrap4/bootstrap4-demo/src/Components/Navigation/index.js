import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://getbootstrap.com/">
                <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                &nbsp;Bootstrap
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/layouts">Layouts</a>
                    </li>
                    <li className="nav-item dropdown">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/about">About</a>
                            <a className="dropdown-item" href="/jobs">Jobs</a>
                            <a className="dropdown-item" href="/contact">Contact</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/report-an-issue">Report an issue</a>
                        </div>
                    </li>
                </ul>

                <button type="button" className="btn btn-primary">Signup</button>
                &nbsp;
                <button type="button" className="btn btn-primary">Login</button>

            </div>
        </nav>
    );
};

export default Navigation;
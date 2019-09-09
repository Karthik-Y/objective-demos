import React from "react";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://getbootstrap.com/">
                <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                Bootstrap
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/layouts">Layouts</a>
                    </li>
                    <li class="nav-item dropdown">
                        <button class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </button>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/about">About</a>
                            <a class="dropdown-item" href="/jobs">Jobs</a>
                            <a class="dropdown-item" href="/contact">Contact</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/report-an-issue">Report an issue</a>
                        </div>
                    </li>
                </ul>

                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary">Primary</button>

            </div>
        </nav>
    );
};

export default Navigation;
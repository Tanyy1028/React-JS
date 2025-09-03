import React, { useState } from 'react'

export default function Navbar() {

    const [show, setShow] = useState("");
    return (

<header data-bs-theme="dark">
    <div className={`text-bg-dark collapse ${show}`} id="navbarHeader" style={{}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                    <h4>About</h4>
                        <p className="text-body-secondary">
                            A newspaper about page typically refers to a newspaper page that contains information about the publication itself, such as its mission, history, and contact information, rather than news stories. It could also refer to the first page of a newspaper, which is the front page and serves to capture attention with the day's most significant headlines and stories.
                        </p>
                </div>
                    <div className="col-sm-4 offset-md-1 py-4"> </div>
            </div>
        </div>
    </div>

    <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
        <a href="#" className="navbar-brand d-flex align-items-center">
                  <strong>NewsPaper.com</strong></a>
                <button onClick={() => setShow(show == "" ? "show" : "")}className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-=""target="#navbarHeader"aria-controls="navbarHeader"aria-expanded="false"aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
        </div>
    </div>
</header>
    )
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap/dist/js"
export default function Nav(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Web-Maker
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Detial</a>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
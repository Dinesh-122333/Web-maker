import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"

export default function Titlepage(){
    return(
        <>
        <div className="d-flex justify-content-center flex-column align-items-center pad background">
        <h1 className="display-1 ">Welcome to Web-maker's</h1>
        <p className="text-center h3">An online website maker</p>
        </div>
        </>
    )
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import webimg from "./assets/Image/sampleweb.jpg"

export default function Aboutus(){
    return(
        <>
        <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
        <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="">
            <h2 className="fs-1">About Us</h2>
            </div>
        </div>
            <p className="fs-4" >
              Welcome to Web-maker's, your online destination for creating
              stunning websites with ease. Our mission is to empower users like
              you to bring your ideas to life by providing intuitive tools and
              expert recommendations.
            </p>
            <p className="fs-4">
              At Web-maker's, we understand that building a website can be
              daunting, especially for those new to the process. That's why we
              offer a user-friendly platform with step-by-step guidance to
              streamline the website creation process.
            </p>
          </div>
          <div className="col-lg-6">
            <img
            src={webimg}
            alt="About Us"
            className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
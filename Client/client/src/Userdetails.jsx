import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"

export default function Userdetails(){
    return(
        <>
        <div className="d-flex justify-content-center flex-column align-items-center detial-background p-5">
        <h1>Detials</h1>
        <div className="bg-light border p-5 ">
            <form>
                <label>Name </label>
                <input className="ps-2 ms-2 form-control"/>
                <label>Email id </label>
                <input className="ps-2 ms-2 form-control"/>
                <label>Social media </label>
                <input className="ps-2 ms-2 form-control"/>
                <label>Website Name </label>
                <input className="ps-2 ms-2 form-control"/>
                <label>Type of Bussiness</label>
                <input className="ps-2 ms-2 form-control"/>
                <label>Description / About company  </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <label for="formFile" className="form-label">Company Logo</label>
                <input className="form-control" type="file" id="formFile"/>
                <div className="d-grid gap-2 d-md-block p-3">
                    <button type="button" className="btn btn-outline-warning mx-3">Cancel</button>
                    <button type="button" className="btn btn-outline-secondary mx-3">Reset</button>
                    <button type="button" className="btn btn-outline-info mx-3">Success</button>
                </div>
                
                
            </form>
        </div>
        </div>
        
        </>
    )
}
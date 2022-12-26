import React from "react";
import portraitPhoto from "../img/profile.jpg"

export default function Info() {
    return (
        <div>
            <img src={portraitPhoto} className="portrait-photo" />
            <h1 className="title-1">Soham Datta</h1>
            <p className="title-2">Developer and student</p>
            <p className="web-subtitle">hey</p>
            <div className="buttons-container">
                <a href="mailto:sohamdatta34@gmail.com" target="_blank">
                    <button className="btn"><i class="fa-solid fa-envelope" />Email</button>
                </a>
                <a href="https://www.linkedin.com/in/sohamdata/" target="_blank">
                    <button className="btn btn-linkedin"><i class="fa-brands fa-linkedin" />LinkedIn</button>
                </a>

            </div>
        </div>

    )
}

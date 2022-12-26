import React from "react";
import faceLogo from "../img/social-icons/Facebook-Icon.png"
import githubLogo from "../img/social-icons/GitHub-Icon.png"
import instaLogo from "../img/social-icons/Instagram-Icon.png"
import twitterLogo from "../img/social-icons/Twitter-Icon.png"

export default function Footer() {

    return (
        <div className="footer">
            <div className="icons-container">
                <a href="https://github.com/sohamdata" target="_blank">
                    <img src={githubLogo} />
                </a>
                <a href="https://twitter.com/elonmusk" target="_blank">
                    <img src={twitterLogo} />
                </a>
                <a href="https://facebook.com/sohamdata" target="_blank">
                    <img src={faceLogo} />
                </a>
                <a href="https://instagram.com/sohamdata" target="_blank">
                    <img src={instaLogo} />
                </a>
            </div>
        </div>
    )

}
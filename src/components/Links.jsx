import React from "react";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const githubLink = "https://github.com/ipreencekmr";
const twitterLink = "https://twitter.com/ipreencekmr";

export const Links = () => {
    return (
        <div className="">
            <ul className="navbar-nav flex-row ml-md-auto d-md-flex">
                <li className="nav-item">
                    <a className="nav-link p-2" 
                        href={ githubLink } 
                        target="_blank"  aria-label="GitHub" rel="noreferrer" >
                        <FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-2" 
                        href={ twitterLink } 
                        target="_blank" 
                        aria-label="Twitter" rel="noreferrer" >
                        <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    );

};
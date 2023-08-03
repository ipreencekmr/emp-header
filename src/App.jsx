import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createRoot } from "react-dom/client";

const githubLink = "https://github.com/ipreencekmr";
const twitterLink = "https://twitter.com/ipreencekmr";

const App = () => {
    return (
        <header>
            <nav className="navbar navbar-expand flex-row navbar-light bg-light fixed-top">
                <div className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
                    <a className="navbar-brand ml-2 mr-0 mr-md-2" href="/" aria-label="Application">
                        <FontAwesomeIcon 
                            className="navbar-brand" 
                            style={{
                                width: "20px",
                                height: "20px"
                            }}
                            icon={ faAddressBook }></FontAwesomeIcon>
                    </a>
                    <div className="collapse navbar-collapse">
                      Employee Management System
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
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
                </div>
            </nav>
        </header>
    )
};

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;

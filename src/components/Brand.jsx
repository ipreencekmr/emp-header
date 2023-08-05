import React from "react";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Brand = () => {
    return (
        <div className="">
            <a className="navbar-brand ml-2 mr-0 mr-md-2" href="/" aria-label="Application">
                <FontAwesomeIcon 
                    className="navbar-brand" 
                    style={{
                        width: "20px",
                        height: "20px"
                    }}
                    icon={ faAddressBook }></FontAwesomeIcon>
            </a>
        </div>
    );
};
import React from "react";
import { Links } from "./Links";
import { Brand } from "./Brand";

export const Home = () => {

    return (
        <header>
            <nav className="d-flex p-2 justify-content-between  
            align-items-center navbar-light bg-light fixed-top">
                <Brand></Brand>
                <div data-testid="titleId">
                    Employee Management System
                </div>
                <Links></Links>
            </nav>
        </header>
    );
};
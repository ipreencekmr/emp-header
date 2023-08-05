import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../src/components/Home";

describe("Home", () => {
    it("should have valid title", () =>{
        render(<Home></Home>);
        expect(screen.getByTestId("titleId")).toHaveTextContent("Employee Management System");
    });
});
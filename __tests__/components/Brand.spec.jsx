import React from "react";
import { render, screen } from "@testing-library/react";
import { Brand } from "../../src/components/Brand";

describe("Brand", () => {
    it("should have link to home", () =>{
        render(<Brand></Brand>);
        expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    });
});

import React from "react";
import { render, screen } from "@testing-library/react"
import { Links } from "../../src/components/Links";

describe("Links", () => {
    it("should render as expected", () => {
        render(<Links></Links>);
    });

    it("should have github link", () => {
        render(<Links></Links>);
        const links = screen.getAllByRole("link");
        expect(links[0]).toHaveAttribute("aria-label", "GitHub");
    });

    it("should have twitter link", () => {
        render(<Links></Links>);
        const links = screen.getAllByRole("link");
        expect(links[1]).toHaveAttribute("aria-label", "Twitter");
    });
})
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeAboutSection from "./about";

describe("HomeAboutSection component", () => {
  test("renders section title", () => {
    render(<HomeAboutSection />);

    const sectionTitle = screen.getByText(/what is spread tech token/i);

    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders section text", () => {
    render(<HomeAboutSection />);

    const sectionText = screen.getByText(
      /Spread Tech Token \(SPTT\) a été créé/i
    );

    expect(sectionText).toBeInTheDocument();
  });

  test("renders join us buttons", () => {
    render(<HomeAboutSection />);

    const joinUsButtons = screen.getAllByText(/join us/i);

    joinUsButtons.forEach((joinUsButton) => {
      expect(joinUsButton).toBeInTheDocument();
    });
  });
});

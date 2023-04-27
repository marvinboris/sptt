import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import React from 'react';

import HomeFactorsSection from "./factors";
import SvgIcon from "@/components/ui/svg-icon";

describe("HomeFactorsSection component", () => {
  const factors = [
    <div key="1">Factor 1</div>,
    <div key="2">Factor 2</div>,
    <div key="3">Factor 3</div>,
  ];

  test("renders section title", () => {
    render(<HomeFactorsSection factors={factors} />);
    const sectionTitle = screen.getByText(
      /Les facteurs influents du prix du SPTT/i
    );
    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders factors", () => {
    render(<HomeFactorsSection factors={factors} />);
    factors.forEach((factor) => {
      const factorElement = screen.getByText(
        new RegExp(`${factor.props.children}`, "i")
      );
      expect(factorElement).toBeInTheDocument();
    });
  });

  test("renders svg icon", () => {
    render(
      <SvgIcon
        name="../home-grid-dots"
        className="absolute -left-16 top-28 hidden w-40 md:block"
      />
    );
    const svgIcon = screen.getByRole("img");
    expect(svgIcon).toBeInTheDocument();
  });
});

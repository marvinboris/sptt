import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomePacksSection from "./packs";

describe("HomePacksSection component", () => {
  const packs = [
    <div key="1">Pack 1</div>,
    <div key="2">Pack 2</div>,
    <div key="3">Pack 3</div>,
  ];

  test("renders section title", () => {
    const { getByText } = render(<HomePacksSection packs={packs} />);
    const sectionTitle = getByText(/Packs de formation/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders packs", () => {
    const { getAllByText } = render(<HomePacksSection packs={packs} />);
    packs.forEach((pack) => {
      const packElements = getAllByText(
        new RegExp(`${pack.props.children}`, "i")
      );
      packElements.forEach((packElement) => {
        expect(packElement).toBeInTheDocument();
      });
    });
  });

  test("renders owl carousel", () => {
    render(<HomePacksSection packs={packs} />);
    const owlCarousel = screen.getByRole("list");
    expect(owlCarousel).toBeInTheDocument();
  });
});

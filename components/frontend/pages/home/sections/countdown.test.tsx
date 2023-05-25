import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeCountdownSection from "./countdown";
import SvgIcon from "@/components/ui/svg-icon";

describe("HomeCountdownSection component", () => {
  test("renders section title", () => {
    render(<HomeCountdownSection />);
    const sectionTitle = screen.getByText(/Private sales starting in :/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders countdown values", () => {
    const countdownValues = [
      [178, "days"],
      [23, "hours"],
      [56, "minutes"],
      [23, "seconds"],
    ];
    render(<HomeCountdownSection />);
    countdownValues.forEach(([value, label]) => {
      const countdownValues = screen.getAllByText(new RegExp(`${value}`, "i"));
      const countdownLabels = screen.getAllByText(new RegExp(`${label}`, "i"));
      countdownValues.forEach((countdownValue) => {
        expect(countdownValue).toBeInTheDocument();
      });
      countdownLabels.forEach((countdownLabel) => {
        expect(countdownLabel).toBeInTheDocument();
      });
    });
  });

  test("renders dollar value", () => {
    render(<HomeCountdownSection />);
    const dollarValue = screen.getByText(/\$34,569\.93/i);
    const spttValue = screen.getByText(/193,943,348\.87 SPTT/i);
    expect(dollarValue).toBeInTheDocument();
    expect(spttValue).toBeInTheDocument();
  });

  test("renders month value", () => {
    render(<HomeCountdownSection />);
    const monthValue = screen.getByText(/December 2023/i);
    expect(monthValue).toBeInTheDocument();
  });

  test("renders svg icons", () => {
    render(<SvgIcon name="../home-grid-dots-1" />);
    render(<SvgIcon name="../home-polygon-1" />);
    const gridDotsIcon = screen.getByRole("img", { name: /home-grid-dots-1/i });
    const polygonIcon = screen.getByRole("img", { name: /home-polygon-1/i });
    expect(gridDotsIcon).toBeInTheDocument();
    expect(polygonIcon).toBeInTheDocument();
  });
});

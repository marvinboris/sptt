import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import HomeRoadmapSection from "./roadmap";

describe("HomeRoadmapSection", () => {
  const roadmapDates = <span>Test Roadmap Dates</span>;

  it("renders the section title", () => {
    const { getByText } = render(
      <HomeRoadmapSection roadmapDates={roadmapDates} />
    );
    const sectionTitle = getByText("Feuille de route");
    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the token distribution section", () => {
    const { getByText } = render(
      <HomeRoadmapSection roadmapDates={roadmapDates} />
    );
    const tokenDistributionTitle = getByText("Token distribution");
    expect(tokenDistributionTitle).toBeInTheDocument();
  });

  it("renders the roadmapDates prop", () => {
    const { getByText } = render(
      <HomeRoadmapSection roadmapDates={roadmapDates} />
    );
    const roadmapDatesText = getByText("Test Roadmap Dates");
    expect(roadmapDatesText).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeTeamSection from "./team";

describe("HomeTeamSection", () => {
  const team = [
    <div key="1">Team Member 1</div>,
    <div key="2">Team Member 2</div>,
    <div key="3">Team Member 3</div>,
  ];

  it("renders the section title", () => {
    const { getByText } = render(<HomeTeamSection team={team} />);
    const sectionTitle = getByText("Notre équipe");
    expect(sectionTitle).toBeInTheDocument();
  });

  it("renders the paragraph text", () => {
    const { getByText } = render(<HomeTeamSection team={team} />);
    const paragraphText = getByText(
      /En achetant un programme de formation chez Crypto Trading Solutions and Consulting Academy/
    );
    expect(paragraphText).toBeInTheDocument();
  });

  it("renders the team members in the grid when screen is wide enough", () => {
    const { container } = render(<HomeTeamSection team={team} />);
    const teamMembers = container.querySelectorAll(".container > div");
    expect(teamMembers).toHaveLength(3);
  });

  test("renders team members", () => {
    const { getAllByText } = render(<HomeTeamSection team={team} />);
    team.forEach((member) => {
      const memberElements = getAllByText(
        new RegExp(`${member.props.children}`, "i")
      );
      memberElements.forEach((memberElement) => {
        expect(memberElement).toBeInTheDocument();
      });
    });
  });

  test("renders owl carousel", () => {
    render(<HomeTeamSection team={team} />);
    const owlCarousel = screen.getByRole("list");
    expect(owlCarousel).toBeInTheDocument();
  });
});

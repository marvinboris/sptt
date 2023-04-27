import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import React from 'react';

import HomeHeader from "./header";

describe("HomeHeader", () => {
  it("renders the header title", () => {
    const { getByText } = render(<HomeHeader />);
    const headerTitle = getByText(/Learn crypto with/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it("renders the paragraph text", () => {
    const { getByText } = render(<HomeHeader />);
    const paragraphText = getByText(
      /Achetez vos formations crypto et obtenez un nombre de pièces en staking pouvant vous générer jusqu’a 20% de ROI./i
    );
    expect(paragraphText).toBeInTheDocument();
  });

  it("renders the download button", () => {
    const { getByRole } = render(<HomeHeader />);
    const downloadButton = getByRole("button", { name: "Download whitepaper" });
    expect(downloadButton).toBeInTheDocument();
  });

  it("renders the video button", () => {
    const { getByText } = render(<HomeHeader />);
    const videoButton = getByText("Watch video");
    expect(videoButton).toBeInTheDocument();
  });

  it("renders the hero cards", () => {
    const { getByText } = render(<HomeHeader />);
    const totalSupplyCard = getByText("Total supply");
    const totalHoldersCard = getByText("Total holders");
    const totalStakedCard = getByText("Total staked");
    expect(totalSupplyCard).toBeInTheDocument();
    expect(totalHoldersCard).toBeInTheDocument();
    expect(totalStakedCard).toBeInTheDocument();
  });
});

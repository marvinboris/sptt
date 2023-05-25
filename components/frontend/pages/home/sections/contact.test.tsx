import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import HomeContactSection from "./contact";

describe("HomeContactSection component", () => {
  test("renders section title", () => {
    render(<HomeContactSection />);

    const sectionTitle = screen.getByText(/contactez-nous/i);

    expect(sectionTitle).toBeInTheDocument();
  });

  test("renders section text", () => {
    render(<HomeContactSection />);

    const sectionText = screen.getByText(
      /Nous sommes disponibles pour vos suggestions et besoins/i
    );

    expect(sectionText).toBeInTheDocument();
  });

  test("renders map", () => {
    render(<HomeContactSection />);

    const map = screen.getByRole("iframe");

    expect(map).toHaveAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3613.8073542448806!2d55.1406664!3d25.0745178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1665798706407!5m2!1sen!2scm"
    );
  });

  test("renders contact information", () => {
    render(<HomeContactSection />);

    const email = screen.getByText(/info@spreadtt.io/i);
    const phone = screen.getByText(/\(\+237\) 691 000 019/i);
    const address = screen.getByText(
      /Douala - Cameroon, Bonapriso, au niveau du carrefour Eto’o./i
    );

    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  test("renders contact form", () => {
    render(<HomeContactSection />);

    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjectSelect = screen.getByPlaceholderText("Subject");
    const phoneInput = screen.getByPlaceholderText("Phone No");
    const messageInput = screen.getByPlaceholderText("Your message");
    const sendButton = screen.getByRole("button", { name: /send message/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectSelect).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });
});

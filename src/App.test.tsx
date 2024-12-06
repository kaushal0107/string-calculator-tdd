import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("String Calculator App", () => {
  test("renders the input, button, and initial UI", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    expect(input).toBeInTheDocument();

    const button = screen.getByText("Calculate");
    expect(button).toBeInTheDocument();

    expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Invalid format/)).not.toBeInTheDocument();
  });

  test("calculates the sum for valid input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("displays an error for invalid input format", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,,2" } });
    fireEvent.click(button);

    expect(
      screen.getByText("Invalid format. Use numbers separated by commas or newlines.")
    ).toBeInTheDocument();
  });

  test("handles negative numbers gracefully", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(button);

    expect(
      screen.getByText("Negative numbers not allowed: -2")
    ).toBeInTheDocument();
  });

  test("updates the history correctly", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,2" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "3,4,5" } });
    fireEvent.click(button);

    const historyItems = screen.getAllByRole("listitem");
    expect(historyItems).toHaveLength(2);
    expect(historyItems[0]).toHaveTextContent("1,2 = 3");
    expect(historyItems[1]).toHaveTextContent("3,4,5 = 12");
  });

  test("clears previous error messages when valid input is provided", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("e.g., 1,2,3");
    const button = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,,2" } });
    fireEvent.click(button);
    expect(
      screen.getByText("Invalid format. Use numbers separated by commas or newlines.")
    ).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "1,2" } });
    fireEvent.click(button);

    expect(
      screen.queryByText("Invalid format. Use numbers separated by commas or newlines.")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Result: 3")).toBeInTheDocument();
  });
});

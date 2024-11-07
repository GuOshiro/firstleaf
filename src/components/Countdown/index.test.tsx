import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Countdown from "./index";

describe("Countdown Component", () => {
  it("renders Countdown component", () => {
    render(<Countdown seconds={300} />);
    const labelElement = screen.getByText(/Reserving your wines for/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("displays correct initial time", () => {
    render(<Countdown seconds={300} />);
    const timeElement = screen.getByText(/05:00/i);
    expect(timeElement).toBeInTheDocument();
  });

  it("decrements time every second", async () => {
    jest.useFakeTimers();
    render(<Countdown seconds={5} />);

    const timeElement = screen.getByText(/00:05/i);
    expect(timeElement).toBeInTheDocument();

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/00:04/i)).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it("displays 'Time's up!' when countdown reaches zero", async () => {
    render(<Countdown seconds={3} />);
    jest.useFakeTimers();
    jest.advanceTimersByTime(3000);

    await waitFor(() => {
      const message = screen.getByText(/00:00/i);
      expect(message).toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import CounterDemo from "./App";

test("renders learn react link", () => {
  render(<CounterDemo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

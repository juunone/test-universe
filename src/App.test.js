import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react app", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "../Input";

describe("Input", () => {
  it("should render as long as the data", () => {
    render(<Input onChange={jest.fn()} />);
    const input = screen.getByTestId("todoInput");
    input.value = "lion";

    expect(input.value).toEqual("lion");
  });
});

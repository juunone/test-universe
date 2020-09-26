import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "../Input";

describe("Input", () => {
  it("should call onchange event and change value", () => {
    const mockFn = jest.fn();
    const changedValue = "lion";

    render(<Input onChange={mockFn} value="test" />);
    const input = screen.getByTestId("todoInput");

    fireEvent.change(input, {
      target: { value: changedValue }
    });
    input.value = "lion";

    expect(mockFn).toBeCalled();
    expect(input.value).toBe(changedValue);
  });
});

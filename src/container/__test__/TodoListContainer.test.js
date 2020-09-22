import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { create, act } from "react-test-renderer";

import TodoListContainer from "../TodoLIstContainer";

describe("TodoListContainer", () => {
  let root;
  act(() => {
    root = create(<TodoListContainer />);
  });

  it("renders correctly", () => {
    expect(root.toJSON()).toMatchSnapshot();
  });

  it("should add todo in list", () => {
    render(<TodoListContainer />);
    // expect(root.toJSON()).toMatchSnapshot();
    const input = screen.getByTestId("todoInput");
    const button = screen.getByTestId("todoButton");
    input.value = "lion";

    fireEvent.click(button);
    root.update(<TodoListContainer />);

    expect(root.toJSON()).toMatchSnapshot();
    expect(input.value).toEqual("");
  });
});

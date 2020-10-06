import React from "react";
import { create, act } from "react-test-renderer";

import { TodoListContainer } from "../TodoLIstContainer";

describe("TodoListContainer", () => {
  let root;
  act(() => {
    root = create(<TodoListContainer />);
  });

  it("renders correctly", () => {
    expect(root.toJSON()).toMatchSnapshot();
  });
});

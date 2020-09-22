import React from "react";
import { create, act } from "react-test-renderer";

import { List } from "../List";

describe("List", () => {
  let root;
  act(() => {
    root = create(<List data={["첫번째"]} deleteList={jest.fn()} />);
  });

  it("renders correctly", () => {
    expect(root.toJSON()).toMatchSnapshot();
  });

  it("should render as long as the data", () => {
    act(() => {
      root.update(<List data={["첫번째", "두번쨰"]} deleteList={jest.fn()} />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});

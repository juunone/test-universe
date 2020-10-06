import React from "react";
import { render, screen } from "@testing-library/react";

import { deleteOne } from "../../utils";
import { List } from "../List";

describe("List", () => {
  it("should render as long as the data", () => {
    const mockData = ["첫번째", "두번째"];

    render(<List data={mockData} deleteTodoList={deleteOne} />);

    const li = document.querySelectorAll("li");

    expect(li.length).toEqual(mockData.length);
  });
});

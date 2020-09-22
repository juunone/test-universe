import React from "react";
import { render, screen } from "@testing-library/react";

import { List } from "../List";

describe("List", () => {
  it("should render as long as the data", () => {
    render(<List data={["첫번째", "두번째"]} deleteTodoList={jest.fn()} />);
    expect(screen.getByText(/첫번째/i)).toBeInTheDocument();
  });
});

import React from "react";

import { render } from "tests/test.utils";

import Input from "./index";

describe("Input component", () => {
  it("should render correctly", () => {
    const { container } = render(<Input id="test-input" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render visible", () => {
    const { container } = render(<Input id="test-input" />);

    expect(container.firstChild).toBeVisible();
  });
});

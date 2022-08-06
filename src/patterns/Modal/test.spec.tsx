import React from "react";

import { render, fireEvent } from "tests/test.utils";

import Modal from "./index";

describe("Modal pattern", () => {
  it("should render correctly", () => {
    const { container } = render(<Modal />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

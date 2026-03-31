import React from "react";

import { render, fireEvent } from "tests/test.utils";

import Button from "./index";

describe("Button component", () => {
  it("should render correctly", () => {
    const { container } = render(<Button type="button" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render visible", () => {
    const { container } = render(<Button type="button" />);

    expect(container.firstChild).toBeVisible();
  });

  it("should call onClick function", () => {
    const mockedOnClick = jest.fn();

    const { getByText } = render(
      <Button type="button" label="jest button" onClick={mockedOnClick} />
    );

    fireEvent.click(getByText(/jest button/i));

    expect(mockedOnClick).toBeCalled();
  });

  it("should be able to submit a form", () => {
    const mockedOnSubmit = jest.fn((e) => e.preventDefault());

    const { getByText } = render(
      <form onSubmit={mockedOnSubmit}>
        <Button type="submit" label="jest button" />
      </form>
    );

    fireEvent.click(getByText(/jest button/i));

    expect(mockedOnSubmit).toBeCalled();
  });
});

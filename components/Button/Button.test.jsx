import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("should be focused after a click", () => {
    render(<Button text="Test" />);
    const button = screen.getByRole("button");
    expect(button).not.toHaveFocus();
    userEvent.click(button);
    expect(button).toHaveFocus();
  });
});

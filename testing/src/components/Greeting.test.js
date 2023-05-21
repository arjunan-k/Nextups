import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting /> Component", () => {
  test("renders Hello World! as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... Nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("check if button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("check if button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed");
    expect(outputElement).toBeInTheDocument();
  });

  test("check if button was clicked old para do not exist", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});

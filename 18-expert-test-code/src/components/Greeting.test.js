import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // arrangement
    render(<Greeting />);
    //act
    //assert
    const helloWorldEl = screen.getByText("Hello World!", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("renders let's test when state false", () => {
    render(<Greeting />);
    const LetsTestEl = screen.getByText("Let's Test", { exact: false });
    expect(LetsTestEl).toBeInTheDocument();
  });

  test("renders text changed when state true", () => {
    render(<Greeting />);

    //act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    //asserting
    const ChangedTextEl = screen.getByText("text changed", { exact: false });
    expect(ChangedTextEl).toBeInTheDocument();
  });

  test("Not render let's test if the button was clicked", () => {
    render(<Greeting />);

    //act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    //asserting
    const ChangedTextEl = screen.queryByText("Let's Test", { exact: false });
    expect(ChangedTextEl).toBeNull();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the app", () => {
    render(<App />);
    const appTitle = screen.getByText("Kevin Do - Reusable Dropdown");
    expect(appTitle).toBeInTheDocument();
  });

  it("should allow the user to select multiple options in the dropdown", () => {
    render(<App />);
    const multiSelectCheckbox = screen.getByLabelText("Multi-Select");
    fireEvent.click(multiSelectCheckbox);
    const dropdownButton = screen.getByRole("button", {
      name: "Dropdown",
    });
    fireEvent.click(dropdownButton);
    const option2 = screen.getByRole("option", { name: "Option 2" });
    const option3 = screen.getByRole("option", { name: "Option 3" });
    fireEvent.click(option2);
    fireEvent.click(option3);
    expect(option2).toHaveAttribute("aria-selected", "true");
    expect(option3).toHaveAttribute("aria-selected", "true");
    expect(dropdownButton).toHaveTextContent("Option 2, Option 3");
  });
});

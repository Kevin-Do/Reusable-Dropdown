/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const setSelectOptions = jest.fn();
  const selectedOptions = ["Option 1"];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the dropdown with a label", () => {
    const { getByLabelText } = render(
      <Dropdown
        name="Test dropdown"
        options={options}
        setSelectOptions={setSelectOptions}
        selectedOptions={selectedOptions}
      />
    );

    const label = getByLabelText("Test dropdown");
    expect(label).toBeInTheDocument();
  });

  it("should render the dropdown button with the selected option(s)", () => {
    const { getByText } = render(
      <Dropdown
        name="Test dropdown"
        options={options}
        setSelectOptions={setSelectOptions}
        selectedOptions={selectedOptions}
      />
    );

    const selectedOptionText = getByText("Option 1");
    expect(selectedOptionText).toBeInTheDocument();
  });

  it("should open the dropdown when the button is clicked", () => {
    const { getByRole, getByText } = render(
      <Dropdown
        name="Test dropdown"
        options={options}
        setSelectOptions={setSelectOptions}
        selectedOptions={selectedOptions}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    const option2 = getByText("Option 2");
    const option3 = getByText("Option 3");
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it("should close the dropdown when an option is selected", () => {
    const { getByRole, queryByText } = render(
      <Dropdown
        name="Test dropdown"
        options={options}
        setSelectOptions={setSelectOptions}
        selectedOptions={selectedOptions}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    const option1 = getByRole("option", { name: "Option 1" });
    fireEvent.click(option1);

    const dropdown = queryByText("Option 2");
    expect(dropdown).not.toBeInTheDocument();
  });

  it("should call setSelectOptions when an option is selected", () => {
    const { getByRole } = render(
      <Dropdown
        name="Test dropdown"
        options={options}
        setSelectOptions={setSelectOptions}
        selectedOptions={selectedOptions}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    const option2 = getByRole("option", { name: "Option 2" });
    fireEvent.click(option2);

    expect(setSelectOptions).toHaveBeenCalledWith(["Option 2"]);
  });
});

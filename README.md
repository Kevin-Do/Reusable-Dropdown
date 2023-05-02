# Reusable Dropdown Component

This project provides a reusable dropdown component that can be configured and styled to fit any project's needs. 
## Deployment
This project has been deployed using Vercel. You can view the deployed version here.

[![Deployment](https://vercel.com/button)](https://reusable-dropdown.vercel.app/)
## Features

- Customizable dropdown name
- Dark mode toggle
- Multi-select mode toggle
- Load more options button
- Clear selected options button
- Support for both single and multi-select modes
- Supports accessibility for key access

## Technologies Used

- React
- TypeScript
- Tailwind CSS

## How to Use

The dropdown component can be easily integrated into any React project by importing the `Dropdown` component and passing in the desired props:

```tsx
import { Dropdown } from "./Dropdown";

function MyComponent() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div>
      <Dropdown
        name="My Dropdown"
        options={options}
        selectedOptions={selectedOptions}
        setSelectOptions={setSelectedOptions}
        multiSelect={false}
      />
    </div>
  );
}

```
The Dropdown component takes in five props:

- `name`: a string that sets the name of the dropdown (default is "Dropdown")
- `options`: an array of strings representing the options to be displayed in the dropdown
- `selectedOptions`: an array of strings representing the currently selected options (empty by default)
- `setSelectedOptions`: a function that updates the `selectedOptions` array when an option is selected or deselected
- `multiSelect`: a boolean value that determines whether the dropdown allows for multiple selections (default is false)

Screenshots
-----------

Here are some screenshots of the app in action:
![Screen Shot 2023-05-01 at 10 56 37 PM](https://user-images.githubusercontent.com/18412636/235589958-8d277c53-a0a6-496c-b8df-caaecb04cbdd.png)
![Screen Shot 2023-05-01 at 10 56 24 PM](https://user-images.githubusercontent.com/18412636/235589959-29b38059-da39-490d-bbb2-165076731125.png)




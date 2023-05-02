import { useState } from "react";
import { Dropdown } from "./Dropdown";
import React from "react";

function App() {
  const [dropdownName, setDropdownName] = useState("Dropdown");
  const [multiSelect, setMultiSelect] = useState(false);
  const [options, setOptions] = useState<string[]>([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const generateMoreOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Since button is in a form, we need to prevent the default behavior of the form
    e.preventDefault();
    const newOptions = [];
    for (let i = options.length + 1; i < options.length + 10; i++) {
      newOptions.push(`Option ${i}`);
    }
    setOptions([...options, ...newOptions]);
  };

  const selectedOptionsPreview = selectedOptions.join(", ").slice(0, 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-semibold mb-10">
        Kevin Do - Reusable Dropdown
      </h1>
      <div className="flex justify-center w-full">
        <form className="flex flex-col justify-center rounded-lg shadow-lg w-1/4 h-1/2 space-y-4 p-10">
          <h2 className="text-lg font-semibold mb-2 ">Dropdown Controls</h2>
          <div className="flex items-center justify-between">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className=" rounded-lg p-2 border border-grey-800"
              placeholder="Dropdown Name"
              onChange={(e) => setDropdownName(e.currentTarget.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="name">Dark Theme</label>
            <input
              type="checkbox"
              id="theme"
              name="theme"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>
          <div className="flex items-start justify-between">
            <label htmlFor="multi-select">Multi-Select</label>
            <input
              type="checkbox"
              id="multi-select"
              name="multi-select"
              onChange={() => {
                setSelectedOptions([]);
                setMultiSelect(!multiSelect);
              }}
            />
          </div>
          <div className="flex items-start justify-between">
            <label htmlFor="load-more">Load More Options</label>
            <button
              className="p-2 border border-grey-800 rounded-lg hover:bg-slate-400 transition duration-200 active:scale-95"
              onClick={generateMoreOptions}
            >
              Load More
            </button>
          </div>
          <div className="flex items-start justify-between">
            <label htmlFor="multi-select">
              Selected Option{multiSelect && "s"}
            </label>
            <div className="max-w-[50%] whitespace-pre-wrap">
              {selectedOptionsPreview}
              {selectedOptionsPreview.length >= 100 && "..."}
            </div>
          </div>
        </form>
        <div className="w-1/4 h-1/2 p-10 shadow-lg mx-4">
          <Dropdown
            name={dropdownName}
            options={options}
            selectedOptions={selectedOptions}
            setSelectOptions={setSelectedOptions}
            multiSelect={multiSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

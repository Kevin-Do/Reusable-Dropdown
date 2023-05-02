import React from "react";
import { Arrow } from "./Arrow";
import useOnClickOutside from "./useOnClickOutside";
import { DropdownOption } from "./DropdownOption";

interface DropdownProps {
  name: string;
  options: string[];
  setSelectOptions: React.Dispatch<React.SetStateAction<string[]>>;
  multiSelect?: boolean;
  selectedOptions: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  setSelectOptions,
  multiSelect = false,
  selectedOptions,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const toggleDropdown = () => setOpen(!open);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  const handleSelect = (option: string) => {
    if (multiSelect) {
      if (selectedOptions.includes(option)) {
        setSelectOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectOptions([...selectedOptions, option]);
      }
    } else {
      setSelectOptions([option]);
      setOpen(false);
    }
  };

  let selectedOptionsText = multiSelect ? "Select options" : "Select an option";
  if (selectedOptions.length > 0) {
    selectedOptionsText = selectedOptions.join(", ") + " ";
  }

  const renderClearAllOrSelectAll = () => {
    const isSelectedAll = selectedOptions.length === options.length;
    const label = isSelectedAll ? "Clear all" : "Select all";
    const handleClearAllOrSelectAll = () => {
      if (selectedOptions.length === options.length) {
        setSelectOptions([]);
      } else {
        setSelectOptions(options);
      }
    };
    return (
      <DropdownOption
        key={"clear-all-or-select-all"}
        option={label}
        selected={false}
        multiSelect={false}
        onSelect={handleClearAllOrSelectAll}
        italic
      />
    );
  };

  const renderNoneOption = () => {
    return (
      <DropdownOption
        key={"none"}
        option={"None"}
        selected={false}
        multiSelect={false}
        onSelect={() => {
          setSelectOptions([]);
          toggleDropdown();
        }}
        italic
      />
    );
  };

  return (
    <div className="relative flex flex-col" ref={dropdownRef}>
      <label htmlFor="dropdown" className="mb-4 h-[1rem]">
        {name}
      </label>
      <button
        id="dropdown"
        className="flex justify-between rounded-lg bg-white p-4 border border-grey-800"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="text-start truncate dark:text-black">
          {selectedOptionsText}
        </span>
        <Arrow open={open} />
      </button>

      {open && (
        <div className="absolute top-24 z-20 w-full rounded-md bg-white shadow-lg">
          <ul
            tabIndex={-1}
            role="listbox"
            className="max-h-60 rounded-lg p-2 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
          >
            {multiSelect && renderClearAllOrSelectAll()}
            {!multiSelect && renderNoneOption()}
            {options.map((option) => (
              <DropdownOption
                key={option}
                option={option}
                selected={selectedOptions.includes(option)}
                multiSelect={multiSelect}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

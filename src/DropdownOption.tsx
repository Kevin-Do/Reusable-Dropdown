interface DropdownOptionProps {
  option: string;
  selected: boolean;
  multiSelect: boolean;
  onSelect: (option: string) => void;
  italic?: boolean;
}

export const DropdownOption: React.FC<DropdownOptionProps> = ({
  option,
  selected,
  multiSelect,
  onSelect,
  italic = false,
}) => {
  const handleSelect = () => {
    onSelect(option);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSelect(option);
    }
  };

  return (
    <li
      tabIndex={0}
      key={option}
      role="option"
      aria-selected={selected}
      className="flex p-2 items-center justify-between rounded-lg hover:bg-slate-400 transition duration-500 cursor-pointer"
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
    >
      <span
        className={`font-normal ml-3 block truncate dark:text-black ${
          italic ? "italic" : ""
        }`}
      >
        {option}
      </span>
      {multiSelect && (
        <span>
          <input type="checkbox" onChange={handleSelect} checked={selected} />
        </span>
      )}
    </li>
  );
};

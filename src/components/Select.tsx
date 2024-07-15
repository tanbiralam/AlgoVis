import { ChangeEvent } from "react";

export function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={label} className="text-gray-300 text-xs">
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-gray-700 cursor-pointer hover:bg-gray-800 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

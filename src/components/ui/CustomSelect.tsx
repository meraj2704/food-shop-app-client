// components/CustomSelect.tsx
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options?.find(option => option.value === value);

  return (
    <div className="mb-4">
      <label className="text-base text-textColor">{label}</label>
      <div ref={selectRef} className="relative mt-1">
        <button
          type="button"
          className={`block w-full pl-3 pr-10 py-2 text-base border border-borderColor 
            
           focus:outline-none focus:border-primary sm:text-sm rounded-md bg-bgColor text-textColor text-left`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : `Select ${label}`}
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-bgColor shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options?.map(option => (
              <li
                key={option.value}
                className={clsx(
                  "cursor-pointer select-none relative py-2 pl-3 pr-9 text-textColor",
                  {
                    "bg-bgGradientFinish": value === option.value
                
                  }
                )}
                onClick={() => handleOptionClick(option)}
              >
                <span className={clsx("block truncate", {
                  "font-semibold": value === option.value,
                  "font-normal": value !== option.value
                })}>
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;

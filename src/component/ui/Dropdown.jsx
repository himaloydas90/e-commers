import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  label,
  options,
  onSelect,
  className = "", // Button-er custom style
  menuClassName = "", // Menu-r custom style
  containerClass = "", // Puro box-er custom style
  disable = false, // Dropdown disable korte chaile
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    // containerClass diye apni puro dropdown-er position control korte parben
    <div
      className={`relative inline-block text-left ${containerClass}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center shadow-sm hover:bg-gray-50 focus:outline-none transition-all ${className}`}
      >
        <span className="text-[#424241]">
          {selectedOption ? selectedOption.label : label}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu - Ekhane 'menuClassName' add kora hoyeche */}
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200 ${menuClassName}`}
        >
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 text-[#424241] hover:bg-brand hover:text-white cursor-pointer transition-colors"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import { useState, useRef, useEffect } from "react";
import transLogo from "../assets/translator.png";

const Dropdown = () => {
  const options = ["English", "Russian"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        onClick={() => setIsOpen((prev) => !prev)}
        src={transLogo}
        alt="translator"
        className="cursor-pointer h-7 w-7"
      />

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-30 bg-white/30 backdrop-blur-md border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

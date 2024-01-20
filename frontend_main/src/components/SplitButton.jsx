import React, { useState, useRef, useEffect } from 'react';
// import './ButtonWithDropdown.css';

export default function SplitButton({options}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative inline-block">
      <button
        className="circle-btn"
        onClick={toggleDropdown}
      >
        <span>Username</span>
        <div className="arrow-down"></div>
      </button>
      {dropdownVisible && (
        <div ref={dropdownRef} className="dropdown">
          {options.map((option, index) => (
            <a key={index} href={option.url}>{option.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}

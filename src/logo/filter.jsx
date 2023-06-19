import React, { useState } from 'react';
import './filter.css';

export default function Filter() {
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState([]);
  const [showGuestButtons, setShowGuestButtons] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const searchOptions = ['Bolivia', 'Francia', 'Ecuador'];
    setOptions(searchOptions);
    setShowOptions(inputValue.length > 0);
  };

  const handleOptionClick = (option) => {
    console.log('Opción seleccionada:', option);
  };

  const handleGuestInputClick = () => {
    setShowGuestButtons(true);
  };

  const handleIncrementGuest = () => {
    setGuestCount((prevCount) => prevCount + 1);
  };

  const handleDecrementGuest = () => {
    if (guestCount > 0) {
      setGuestCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrementChild = () => {
    setChildCount((prevCount) => prevCount + 1);
  };

  const handleDecrementChild = () => {
    if (childCount > 0) {
      setChildCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div id='filtro' style={{ position: 'relative' }}>
        <input
          id='destiny'
          placeholder='Place'
          onClick={() => setShowOptions(true)}
          onChange={handleInputChange}
        />
        {showOptions && options.length > 0 && (
          <ul className="search-options" style={{ position: 'absolute', top: '100%', left: 0 }}>
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id='filtroB' style={{ position: 'relative' }}>
        <input
          id='people'
          placeholder='Add guest'
          onClick={handleGuestInputClick}
        />
        {showGuestButtons && (
          <div className="guest-counter" style={{ position: 'absolute', top: '100%', left: 0 }}>
            <h2 id='name'>Adults</h2>
            <p id='old'>Ages 13 or above</p>
            <button id='less' onClick={handleDecrementGuest}>-</button>
            <span>{guestCount}</span>
            <button id='more' onClick={handleIncrementGuest}>+</button>
          </div>
        )}
        {showGuestButtons && (
          <div className="guest-counter" style={{ position: 'absolute', top: '100%', left: '50%' }}>
            <h2 id='name'>Children</h2>
            <p id='old'>Ages 2 - 12</p>
            <button id='less' onClick={handleDecrementChild}>-</button>
            <span>{childCount}</span>
            <button id='more' onClick={handleIncrementChild}>+</button>
          </div>
        )}
      </div>
      <button id='find'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bii bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        Search
      </button>
    </>
  );
}







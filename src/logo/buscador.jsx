import React, { useState } from 'react';
import './buscador.css'

function Buscador() {

  const [window, setWindow] = useState(false);

  const toggleWindow = () => {
    setWindow(!window);
  };

  const handleOutsideClick = () => {
    setWindow(false);
  };

  return (
    <div>
      <button id="logo" onClick={toggleWindow}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    </button>

    {window && (
      <div className="white-window" onClick={toggleWindow}>
        {
          <>
            <div id="windowsearch" onClick={(e) => e.stopPropagation()}>
                <input id='destiny' placeholder='Place'/>
                <input id='people' placeholder='Add guest' />
                <button id='find'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bii bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                Search
                </button>
            </div>
          </>
        }
      </div>
    )}
    {window && <div className="overlay" onClick={handleOutsideClick} />} 
    </div> 
  );
}

export default Buscador;
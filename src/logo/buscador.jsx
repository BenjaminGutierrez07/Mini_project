import React, { useState } from 'react';
import './buscador.css'

function Buscador() {
  const [showPopup, setShowPopup] = useState(false);

  const handleInputClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Haz clic aquí"
        onClick={handleInputClick}
      />
      {showPopup && (
        <div className="popup">
          <input type="text" placeholder="Introduce datos" />
        </div>
      )}
    </div>
  );
}

export default Buscador;
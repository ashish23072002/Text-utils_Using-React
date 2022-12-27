// just a practice code



import React from 'react'
import { useState } from 'react';


const Eaxmple = () => {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (color) => {
    setBgColor(color);
  };

  return (
    <div>
    <div style={{ backgroundColor: bgColor }}>
      {colors.map(color => (
        <button key={color} onClick={() => handleClick(color)} style={{ backgroundColor: color }}>
          {color}
        </button>
      ))}
    </div>

    </div>
  )
}

export default Eaxmple

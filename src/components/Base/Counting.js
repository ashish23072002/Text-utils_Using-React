import React, { useState } from 'react'
import "./style.css"

const Counting = () => {
const [count,setCount] =useState(0);


  return (
    <div>
      <div className="panel">
        <button className="buttons-style" onClick={ ()=> setCount(count + 1) }>+</button>
          <h1 className="digit">
           {count}
          </h1>
        <button className="buttons-style" onClick={ ()=> setCount(count - 1) }>-</button>

      </div>
    </div>
  )
}


export default Counting

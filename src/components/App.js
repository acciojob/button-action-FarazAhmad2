import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const ref = useRef()

  const handleClick = ()=>{
    ref.current.className = 'show'
  }

  return (
    <div className="App" id="main">
      <p className="hide" ref={ref} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App

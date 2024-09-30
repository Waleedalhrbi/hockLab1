import React, { useState } from 'react';

function Calculit() {
  const [valuA, setValuA] = useState(0);
  const [valuB, setValuB] = useState(0);
  const [calculiter, setCalculiter] = useState(null);
  const [mode, setMode] = useState("light"); 


  function Calculation(operation) {
    let result;
    switch (operation) {
      case 'add':
        result = valuA + valuB;
        break;
      case 'subtract':
        result = valuA - valuB;
        break;
      case 'multiply':
        result = valuA * valuB;
        break;
      case 'divide':
        result = valuB !== 0 ? valuA / valuB : 'Cannot divide by zero';
        break;
      default:
        result = 0;
    }
    setCalculiter(result);  
  }

  
  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

    const isDarkMode = mode === "dark";
  const backgroundColor = isDarkMode ? "#333" : "#fff";
  const textColor = isDarkMode ? "#fff" : "#000";
  const buttonColor = isDarkMode ? "#fff" : "#000";
  const buttonBgColor = isDarkMode ? "#444" : "#eee";

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor, minHeight: '100vh', padding: '20px' }}>
      <div className='text-center'>
        <h3>ValuA</h3>
        <h4>{valuA}</h4>
        <button
          className='btn'
          onClick={() => setValuA(valuA + 1)}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >+</button>
        <button
          className='btn ml-5'
          onClick={() => setValuA(valuA - 1)}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >-</button>
      </div>

      <div className='text-center'>
        <h3>ValuB</h3>
        <h4>{valuB}</h4>
        <button
          className='btn'
          onClick={() => setValuB(valuB + 1)}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >+</button>
        <button
          className='btn ml-5'
          onClick={() => setValuB(valuB - 1)}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >-</button>
      </div>

      <div className='text-center'>
        <h3>Operations</h3>
        <button
          className='btn'
          onClick={() => Calculation('add')}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >Add</button>
        <button
          className='btn ml-5'
          onClick={() => Calculation('subtract')}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >Subtract</button>
        <button
          className='btn ml-5'
          onClick={() => Calculation('multiply')}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >Multiply</button>
        <button
          className='btn ml-5'
          onClick={() => Calculation('divide')}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >Divide</button>
      </div>

      <div className='text-center mt-5'>
        <h3>Result</h3>
        <h4>{calculiter !== null ? calculiter : 'No result yet'}</h4>
      </div>

      <div className='text-center pt-14'>
        <h3>Change mode:</h3>
        <button
          className='btn'
          onClick={toggleMode}
          style={{ backgroundColor: buttonBgColor, color: buttonColor }}
        >
          Change to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default Calculit;

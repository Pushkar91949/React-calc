import React, { useState } from 'react';
import './Calculator.css';

import darkModeIcon from './darkmode.png'; // Import your dark mode icon image

function Calculator() {
  const [expression, setExpression] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleBackspace = () => {
    setExpression(expression.slice(0, -1));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`calculator ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="dark-mode-button">
        <button onClick={toggleDarkMode}>
          <img src={darkModeIcon} alt="Dark Mode" />
        </button>
      </div>
      <div className="display">{expression}</div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>&#9003;</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

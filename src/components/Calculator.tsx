"use client"
import React from 'react';
import { useCalculatorStore } from '../app/store';

const Calculator: React.FC = () => {
  const { displayValue, darkMode, toggleDarkMode, handleButtonClick, handleClear, handleEquals } =
    useCalculatorStore();

  const operators = ['+', '-', '*', '/'];
  const scientificFunctions = ['sin', 'cos', 'tan', 'sqrt', 'pow'];
  const specialCharacters = ['(', ')'];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center space-y-4 ${darkMode ? 'bg-dark' : 'bg-light text-dark'}`}>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          darkMode ? 'bg-teal-500 text-white' : 'bg-white text-dark hover:bg-gray-100'
        } transition-all duration-300`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div
        className={`calculator w-96 bg-gradient-to-b from-${darkMode ? 'gray-800' : 'gray-200'} to-${darkMode ? 'gray-700' : 'gray-100'} p-6 rounded text-${darkMode ? 'white' : 'gray-800'} transition-all duration-300 shadow-xl border-${darkMode ? 'gray-600' : 'gray-300'} border-solid border-t-2 border-l-2`}
      >
        <div className={`display mb-4 bg-${darkMode ? 'gray-600' : 'gray-300'} text-right p-2 rounded text-xl`}>{displayValue}</div>
        <div className="buttons grid grid-cols-4 gap-4">
          {[...Array(10).keys()].map((num) => (
            <button
              key={num}
              onClick={() => handleButtonClick(num.toString())}
              className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleButtonClick('.')}
            className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
          >
            .
          </button>
          <button
            onClick={handleClear}
            className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
          >
            C
          </button>
          <button onClick={handleEquals} className={`btn bg-teal-500 text-white hover:bg-teal-600 rounded-full p-4 text-xl`}>
            =
          </button>

          {operators.map((operator) => (
            <button
              key={operator}
              onClick={() => handleButtonClick(operator)}
              className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
            >
              {operator}
            </button>
          ))}

          {scientificFunctions.map((func) => (
            <button
              key={func}
              onClick={() => handleButtonClick(func + '(')}
              className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
            >
              {func}
            </button>
          ))}

          {specialCharacters.map((char) => (
            <button
              key={char}
              onClick={() => handleButtonClick(char)}
              className={`btn ${darkMode ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} text-${darkMode ? 'white' : 'gray-800'} rounded-full p-4 text-xl`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

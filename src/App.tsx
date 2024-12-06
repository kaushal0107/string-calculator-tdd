import React, { useState } from "react";
import { add } from "./utils/stringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleCalculate = () => {
    try {
      if (!input.trim()) {
        throw new Error("Input cannot be empty. Please enter numbers.");
      }

      setError(null);
      const sum = add(input);
      setResult(`Result: ${sum}`);
      setHistory((prevHistory) => [...prevHistory, `${input} = ${sum}`]);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
          String Calculator
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
        >
          <div>
            <label
              htmlFor="calculator-input"
              className="block text-lg font-medium text-gray-700"
            >
              Enter Numbers
            </label>
            <input
              id="calculator-input"
              type="text"
              placeholder="e.g., 1,2,3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
          >
            Calculate
          </button>
        </form>
        {error && (
          <p
            className="text-red-600 text-center mt-4 font-semibold"
            role="alert"
          >
            {error}
          </p>
        )}
        {result && (
          <p
            className="text-green-600 text-center mt-4 font-semibold"
            role="status"
          >
            {result}
          </p>
        )}
        {history.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Calculation History
            </h2>
            <ul className="space-y-2">
              {history.map((entry, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg shadow-sm text-gray-700"
                >
                  {entry}
                </li>
              ))}
            </ul>
            <button
              onClick={handleClearHistory}
              className="mt-4 w-full bg-red-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

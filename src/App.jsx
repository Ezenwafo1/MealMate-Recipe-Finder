import React from "react";
import Recipe from "./components/Recipe"; // your component

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          🍲 MealMate — Recipe Finder
        </h1>
        <Recipe />
      </div>
    </div>
  );
}

export default App;

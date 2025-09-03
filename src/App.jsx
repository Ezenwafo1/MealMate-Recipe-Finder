// src/App.jsx
import React, { useState } from "react";
import RecipeList from "./components/RecipeList.jsx";
import { GiMeal } from "react-icons/gi"; // Import logo icon
import Footer from "./components/Footer.jsx"; // ✅ Import Footer component

function App() {
  const [showNigerian, setShowNigerian] = useState(true);
  const [showWestAfrican, setShowWestAfrican] = useState(false);
  const [showInternational, setShowInternational] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 text-white py-6 shadow-md flex items-center justify-center gap-3">
        <GiMeal className="text-4xl sm:text-5xl" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          MealMate Recipe Finder
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toggle Checkboxes */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showNigerian}
              onChange={() => setShowNigerian(!showNigerian)}
              className="h-5 w-5 text-green-800 focus:ring-green-700 rounded cursor-pointer"
            />
            <span className="text-green-900 font-medium hover:text-green-700 transition">
              Nigerian Recipes
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showWestAfrican}
              onChange={() => setShowWestAfrican(!showWestAfrican)}
              className="h-5 w-5 text-green-800 focus:ring-green-700 rounded cursor-pointer"
            />
            <span className="text-green-900 font-medium hover:text-green-700 transition">
              West African Recipes
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showInternational}
              onChange={() => setShowInternational(!showInternational)}
              className="h-5 w-5 text-green-800 focus:ring-green-700 rounded cursor-pointer"
            />
            <span className="text-green-900 font-medium hover:text-green-700 transition">
              International Recipes
            </span>
          </label>
        </div>

        {/* Recipe List */}
        <RecipeList
          showNigerian={showNigerian}
          showWestAfrican={showWestAfrican}
          showInternational={showInternational}
        />
      </main>

      {/* Footer with icons */}
      <Footer />
    </div>
  );
}

export default App;

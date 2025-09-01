import React, { useState } from "react";
import RecipeList from "./components/RecipeList.jsx";

function App() {
  const [showNigerian, setShowNigerian] = useState(true);
  const [showWestAfrican, setShowWestAfrican] = useState(false);
  const [showInternational, setShowInternational] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 text-white py-6 shadow-md">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          MealMate Recipe Finder
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toggle Checkboxes */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showNigerian}
              onChange={() => setShowNigerian(!showNigerian)}
            />
            Nigerian Recipes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showWestAfrican}
              onChange={() => setShowWestAfrican(!showWestAfrican)}
            />
            West African Recipes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showInternational}
              onChange={() => setShowInternational(!showInternational)}
            />
            International Recipes
          </label>
        </div>

        {/* Recipe List */}
        <RecipeList
          showNigerian={showNigerian}
          showWestAfrican={showWestAfrican}
          showInternational={showInternational}
        />
      </main>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-green-900 text-gray-100 py-4 text-center mt-6">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} MealMate. Designed with ❤️ by Ezenwafo1. Powered by ALXFE
  </p>
</footer>
    </div>
  );
}

export default App;

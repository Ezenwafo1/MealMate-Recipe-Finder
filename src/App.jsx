import React, { useState } from "react";
import RecipeList from "./components/RecipeList.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [showNigerian, setShowNigerian] = useState(true);
  const [showWestAfrican, setShowWestAfrican] = useState(false);
  const [showInternational, setShowInternational] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">MealMate Recipe Finder</h1>

      <input
        type="text"
        placeholder="Search international recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <div className="flex gap-4 mb-4">
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

      <RecipeList
        query={query}
        showNigerian={showNigerian}
        showWestAfrican={showWestAfrican}
        showInternational={showInternational}
      />
    </div>
  );
}

export default App;

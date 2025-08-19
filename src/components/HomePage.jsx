import React from "react";
import Recipe from "./Recipe";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Hero / Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          🍲 Welcome to MealMate
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Discover delicious recipes from all over the world. Search, explore, and enjoy!
        </p>
      </div>

      {/* Recipe Component */}
      <div className="w-full max-w-6xl px-4">
        <Recipe />
      </div>
    </div>
  );
}

export default HomePage;

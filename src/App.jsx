import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import { recipes as initialRecipes } from "./data/recipes";
import { users as initialUsers } from "./data/users";

// ✅ Protected Route component
const ProtectedRoute = ({ user, children }) => {
  if (!user || !user.verified) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  const [recipesData, setRecipesData] = useState(initialRecipes);
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("mealMateUser")) || null
  );

  const navigate = useNavigate();

  // ✅ Add new recipe
  const handleAddRecipe = (newRecipe) => {
    setRecipesData([newRecipe, ...recipesData]);
  };

  // ✅ Community Sign-Up
  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    alert("Your account is submitted! Wait for admin verification.");
    navigate("/login");
  };

  // ✅ Login persistence
  useEffect(() => {
    if (user) {
      localStorage.setItem("mealMateUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("mealMateUser");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold">MealMate</h1>
        <div className="flex gap-2">
          <DarkModeToggle />
          {user ? (
            <button
              onClick={() => setUser(null)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Join Community
              </Link>
            </>
          )}
        </div>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipesData} />} />
          <Route path="/login" element={<LoginForm onLogin={setUser} />} />
          <Route path="/signup" element={<SignUpForm onSignUp={handleSignUp} />} />
          <Route
            path="/add-recipe"
            element={
              <ProtectedRoute user={user}>
                <AddRecipeForm onSubmit={handleAddRecipe} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

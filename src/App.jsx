// App.jsx
import React, { useState, createContext, useContext } from "react";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const [shoppingList, setShoppingList] = useState(() => JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <AppContext.Provider value={{ favorites, setFavorites, shoppingList, setShoppingList, darkMode, toggleDarkMode }}>
      <div className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} min-h-screen`}>
        <div className="max-w-7xl mx-auto px-4">
          <HomePage />
          <SideBar />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

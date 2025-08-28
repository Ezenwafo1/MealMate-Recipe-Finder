import React from "react";

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-4 mt-8 flex justify-between items-center">
    <p>© {new Date().getFullYear()} MealMate</p>
    <div className="flex gap-4">
      <a href="https://instagram.com" target="_blank" rel="Mealmate">Instagram</a>
      <a href="https://tiktok.com" target="_blank" rel="Mealmate">TikTok</a>
      <a href="https://facebook.com" target="_blank" rel="Mealmate">Facebook</a>
      <a href="https://youtube.com" target="_blank" rel="Mealmate">YouTube</a>
    </div>
  </footer>
);

export default Footer;

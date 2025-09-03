import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-100 py-4 mt-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          © {new Date().getFullYear()} MealMate. Designed with ❤️ by Ezenwafo1. Powered by ALXFE
        </p>

        <div className="flex gap-6 items-center text-lg">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="https://tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-300 transition-colors"
          >
            <SiTiktok />
          </a>

          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebook />
          </a>

          <a
            href="https://youtube.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-400 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

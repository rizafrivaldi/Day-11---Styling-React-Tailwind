import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* === Left: Logo === */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">☁</span>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            RivDev
          </span>
        </div>

        {/* === Center: Navigation === */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* === Right: Dark Mode Button === */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-gray-700 dark:text-gray-300 text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

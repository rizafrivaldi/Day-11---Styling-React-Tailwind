import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 dark:bg-gray-800/30 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* === Left: Logo === */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">☁</span>
          <span className="text-lg font-semibold text-white-300 dark:text-gray-100">
            Dolor
          </span>
        </div>

        {/* === Center: Navigation === */}
        <div className="hidden md:flex space-x-6 text-white-300 dark:text-gray-300 font-medium">
          <a
            href="#home"
            className="px-3 py-2 rounded-full transition duration-300 hover:backdrop-blur-sm hover:text-indigo-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded-full transition duration-300 hover:backdrop-blur-sm hover:text-indigo-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-3 py-2 rounded-full transition duration-300 hover:backdrop-blur-sm hover:text-indigo-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-full transition duration-300 hover:backdrop-blur-sm hover:text-indigo-400"
          >
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
            <FaMoon className="text-white-300 dark:text-gray-300 text-xl" />
          )}
        </button>
      </div>
    </motion.nav>
  );
}

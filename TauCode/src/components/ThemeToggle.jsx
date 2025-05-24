import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'vs-dark' ? 'vs' : 'vs-dark');
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.9}}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'vs-dark' ? (
  <FiSun className="icon text-yellow-400" />
) : (
  <FiMoon className="icon text-gray-800" />
)}

    </motion.button>
  );
};

export default ThemeToggle;
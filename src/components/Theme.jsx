import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence} from 'framer-motion'

const Theme = ({ theme, setTheme }) => {
  // Appliquer le thème et sauvegarder dans localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-500
      transition-all hover:scale-105 hover:border-primary focus:outline-none 
      focus:ring-2 focus:ring-primary/40 cursor-pointer relative overflow-hidden"
    >
      <AnimatePresence exitBeforeEnter>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: -10, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10, rotate: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="h-5 w-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: -10, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10, rotate: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-slate-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Theme;

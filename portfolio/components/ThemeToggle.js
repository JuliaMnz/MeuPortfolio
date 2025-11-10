"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
      title="Alternar tema"
    >
      {darkMode ? <Sun className="text-yellow-300" /> : <Moon />}
    </button>
  );
}

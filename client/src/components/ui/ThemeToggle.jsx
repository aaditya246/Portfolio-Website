import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-10 h-10 rounded-full border flex items-center justify-center transition"
    >
      {darkMode ? <FiSun className="text-emerald-500" size={18} /> : <FiMoon  className="text-emerald-500" size={18} />}
    </button>
  );
};

export default ThemeToggle;
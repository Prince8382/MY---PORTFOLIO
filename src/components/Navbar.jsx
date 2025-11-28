import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Prince Portfolio
        </h1>

        <div className="flex items-center gap-4">
          <Link to="/" className="inline-block md:inline text-sm font-medium">Home</Link>
          <Link to="/about" className="inline-block md:inline text-sm font-medium">About</Link>
          <Link to="/skills" className="inline-block md:inline text-sm font-medium">Skills</Link>
          <Link to="/projects" className="inline-block md:inline text-sm font-medium">Projects</Link>
          <Link to="/contact" className="inline-block md:inline text-sm font-medium">Contact</Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import useTheme from "./hooks/useTheme";

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

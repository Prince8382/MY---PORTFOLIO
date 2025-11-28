import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, show] = useReveal();

  return (
    <section
      ref={ref}
      className={`fade-up p-10 pb-40 text-center pt-50 max-w-3xl mx-auto transition-all duration-700 ${
        show ? "show" : ""
      }`}
    >
      <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
        I'm a passionate full-stack developer who loves building modern web applications
        with sleek UI and optimized backend.
      </p>
      <Link
        to="/"
        className="mt-57 inline-block px-6 py-3  rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}


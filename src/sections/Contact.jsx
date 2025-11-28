import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, show] = useReveal();

  return (
    <section ref={ref} className="p-10 pt-43 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Feel free to reach out via email or phone.
      </p>
      <p>Email: princechaudhary6800@gmail.com</p>
      <p>Phone: +91 8382864205</p>

      <Link
        to="/"
        className="mt-59 inline-block px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}

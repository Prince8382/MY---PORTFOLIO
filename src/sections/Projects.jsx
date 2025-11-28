import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Wanderlust Clone",
    desc: "Full-stack Airbnb-like app",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "Weather App",
    desc: "Weather search application",
    tech: ["React", "API"],
  },
  {
    title: "Todo App",
    desc: "Interactive Todo list app",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Simon Game",
    desc: "Classic memory game in browser",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const [ref, show] = useReveal();

  return (
    <section ref={ref} id="projects" className="p-10 min-h-screen scroll-mt-20 pt-26 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-purple-600 mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <Tilt key={i} glareEnable={true} glareMaxOpacity={0.2}>
            <div
              className={`zoom-in p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-transform duration-500 hover:scale-105`}
              style={{ opacity: show ? 1 : 0, transitionDelay: `${i * 0.15}s` }}
            >
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{p.desc}</p>
              <p className="text-sm text-gray-500">{p.tech.join(", ")}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <Link
        to="/"
        className="mt-59 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}

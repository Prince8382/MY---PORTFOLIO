import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

export default function Skills() {
  const [ref, show] = useReveal();

  const frontend = [
    { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={45} className="text-sky-400" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNode size={45} className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress size={45} className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-700" /> },
    { name: "MySQL", icon: <SiMysql size={45} className="text-blue-500" /> },
    { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
  ];

  return (
    <section ref={ref} className="p-10 pt-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">My Skills</h2>

      <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-14">
        {frontend.map((skill, i) => (
          <div
            key={i}
            className={`skill-pop bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700`}
            style={{ animationDelay: `${i * 0.15}s`, opacity: show ? 1 : 0 }}
          >
            {skill.icon}
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-6">
        {backend.map((skill, i) => (
          <div
            key={i}
            className={`skill-pop  bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700`}
            style={{ animationDelay: `${i * 0.15}s`, opacity: show ? 1 : 0 }}
          >
            {skill.icon}
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}

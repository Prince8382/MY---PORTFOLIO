import useReveal from "../hooks/useReveal";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [ref, show] = useReveal();

  return (
  <section
  ref={ref}
  id="hero"
  className={`min-h-screen flex flex-col justify-center items-center text-center p-6
  transition-colors duration-500
  bg-white dark:bg-black
  text-black dark:text-white
  fade-in ${show ? "show" : ""}`}
>


      <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Hey, I'm Prince Chaudhary
      </h1>

      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        <Typewriter
          words={[
            "Full-Stack Developer",
            "React / Node.js / MongoDB",
            "I build modern, responsive apps",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
      >
        View My Work
      </a>
      <a
  href="/resume.pdf"       
  download               
  className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
>
  Download Resume
</a>
    </section>
  );
}

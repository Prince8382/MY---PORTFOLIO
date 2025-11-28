

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 50);
  }, []);

  return (
    <footer
      ref={ref}
      className={`fade-in ${show ? "show" : ""} p-6 text-center 
      transition-colors duration-300 bg-gray-100 dark:bg-black 
      text-gray-900 dark:text-white`}
    >
      © 2025 Prince Chaudhary
    </footer>
  );
}


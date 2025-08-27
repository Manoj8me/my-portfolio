import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = ["Frontend Developer", "UI/UX Enthusiast", "React Specialist", "Fullstack Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(roles[index].slice(0, i + 1));
      i++;
      if (i === roles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section
      id="home"
      className="pb-8 pt-40 flex flex-col justify-center items-center text-center px-6"
    >

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-indigo-500">Manoj Kumar R</span>
      </motion.h1>

      <p className="text-xl md:text-2xl font-medium mt-4 text-indigo-400 h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </p>

      <div className="flex gap-6 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/Manoj8me"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full
                     transition-all duration-500 transform hover:-translate-y-2"
          title="GitHub"
        >
          <FaGithub className="text-gray-900 dark:text-white w-8 h-8" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/manoj-kumar-r-74a0b3241/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full
                     transition-all duration-500 transform hover:-translate-y-2"
          title="LinkedIn"
        >
          <FaLinkedin className="text-blue-600 w-8 h-8" />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=manoj8me@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full
                     transition-all duration-500 transform hover:-translate-y-2"
          title="Send me an Email"
        >
          <FaEnvelope className="text-red-500 w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

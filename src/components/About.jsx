import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className=" max-w-6xl mx-auto px-6">

      {/* ---------------- Heading Borders ---------------- */}

      {/* --- Version 1: Centered Horizontal Line (active by default) --- */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3"
      >
        <div className="flex justify-center ml-12">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full"></div>
        </div>
      </motion.h2>

      {/* ---------------- Heading ---------------- */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-10 flex items-center justify-center gap-3"
      >
        <FaUser className="text-indigo-500" /> About <span className="text-indigo-500">Me</span>
      </motion.h2>

      {/* ---------------- Content ---------------- */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src="https://via.placeholder.com/250"
          alt="profile"
          className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello! I'm <span className="font-semibold">Manoj Kumar</span>, a passionate{" "}
          <span className="text-indigo-500">Frontend Developer</span> who loves building
          interactive, modern, and user-friendly web applications. I specialize in React, TailwindCSS, and UI/UX design. My goal is to create visually stunning and highly responsive web experiences.
        </motion.p>
      </div>
    </section>
  );
}

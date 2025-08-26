import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3"
      >
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full"></div>
        </div>
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-5 flex items-center justify-center gap-3"
      >
        <FaFileAlt className="text-indigo-500" /> My <span className="text-indigo-500">Resume</span>
      </motion.h2>

      <div className="flex justify-center gap-6">
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition"
        >
          <FaDownload /> Download
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <FaEye /> View
        </a>
      </div>
    </section>
  );
}

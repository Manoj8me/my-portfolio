import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaFolderOpen } from "react-icons/fa";

const projects = [
  { title: "Online BookStore with Authentication", desc: "A Book Store website built with React, Bootstrap, and react toast.", link: "https://json-server-book-store-frontend.onrender.com/" },
  { title: "Crud Operations with Authentication", desc: "crud operations website build suing ractjs,bootstrap and react toast with authentication.", link: "https://json-crud-authentication-frontend.onrender.com/" },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(projects.length - cardsPerView, 0);

  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6 relative">
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
        className="text-3xl md:text-4xl font-bold mb-3  flex items-center justify-center gap-3"
      >
        <FaFolderOpen className="text-indigo-500" /> My <span className="text-indigo-500">Projects</span>
      </motion.h2>
      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-lg hover:bg-white/90 transition"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Cards Wrapper */}
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${(100 / cardsPerView) * currentIndex}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className={`flex-shrink-0 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800`}
              style={{ width: `${100 / cardsPerView}%` }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{proj.desc}</p>
              <a
                href={proj.link}
                className="mt-4 inline-block text-indigo-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        {currentIndex < maxIndex && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-lg hover:bg-white/90 transition"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}

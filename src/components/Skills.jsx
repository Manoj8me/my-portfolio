import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTools, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiBitbucket, SiMui } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "BitBucket", icon: <SiBitbucket className="text-blue-700" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "API Integration", icon: <AiOutlineApi className="text-purple-500" /> },
  { name: "Responsive Web Design", icon: <MdDevices className="text-gray-600" /> },
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(skills.length - Math.ceil(cardsPerView / 2), 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6 relative">
      {/* --- Version 2: Small Left Line with Icon --- */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3"
      >
        <div className="flex justify-center ml-7">
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
        <FaTools className="text-indigo-500 text-xl" />
        My <span className="text-indigo-500">Skills</span>
      </motion.h2>

      {/* ---------------- Skills Cards ---------------- */}
      <div className="relative overflow-hidden">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-lg hover:bg-white/90 transition"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        <motion.div
          className="flex gap-6"
          animate={{ x: `-${(100 / cardsPerView) * currentIndex}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
              style={{ width: `${100 / cardsPerView}%` }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

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

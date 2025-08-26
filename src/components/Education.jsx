import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.E in Computer Science",
    college: "SSN COLLEGE OF ENGINEERING",
    university: "ANNA UNIVERSITY",
    place: "CHENNAI, TAMILNADU",
    year: "2018 - 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-6xl mx-auto px-6">
      {/* === HEADING WITH DECORATIVE BORDER === */}
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
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 relative">
          <FaGraduationCap className="text-indigo-500" /> Education{" "}
          <span className="text-indigo-500">Background</span>
        </h2>

        {/* === OPTION 1: Simple Indigo underline === */}
        {/* <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div> */}

      </motion.div>

      {/* === EDUCATION CARDS === */}
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{edu.college}</h3>
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <h3 className="text-lg font-semibold">{edu.university}</h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.place}</p>
            <p className="text-indigo-500">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

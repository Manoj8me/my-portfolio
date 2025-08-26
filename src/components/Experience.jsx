import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Eduskills Foundations",
    year: "07/2025-present",
    desc: "Working on building Eduskills Foundation Academy website using React, TailwindCSS, Shadcn, Material UI, and integrating backend APIs with Axios.",
  },
  {
    role: "Frontend Developer",
    company: "Compunet Connections",
    year: "02/2025-06/2025",
    desc: "Worked on Raqamyah project, built pages using ReactJS, TypeScript, Material UI, and integrated backend APIs using Axios.",
  },
  {
    role: "Frontend Developer",
    company: "Edify Technologies",
    year: "01/2023-08/2025",
    desc: "Built responsive web pages for US project using ReactJS, Material UI, and integrated backend Java APIs using Axios.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
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
        className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-3"
      >
        <FaBriefcase className="text-indigo-500" /> Work <span className="text-indigo-500">Experience</span>
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
            <p className="text-indigo-500">{exp.year}</p>
            <p className="mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

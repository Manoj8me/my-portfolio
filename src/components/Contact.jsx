import { FaGithub, FaLinkedin, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3"
      >
        <div className="flex justify-center ">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full"></div>
        </div>
      </motion.h2>
      <h2 className="text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-3">
        <FaEnvelopeOpenText className="text-indigo-500" /> Contact <span>Me</span>
      </h2>
      <p className="mb-5 text-lg text-gray-700 dark:text-gray-300">
        I’d love to connect! Reach out to me through any of these platforms:
      </p>

      <div className="flex justify-center gap-10 text-4xl">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 transform hover:-translate-y-2"
          title="Send me an Email"
        >
          <FaEnvelopeOpenText className="text-red-500 w-8 h-8" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 transform hover:-translate-y-2"
          title="LinkedIn"
        >
          <FaLinkedin className="text-blue-600 w-8 h-8" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 transform hover:-translate-y-2"
          title="GitHub"
        >
          <FaGithub className="text-gray-800 dark:text-white w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

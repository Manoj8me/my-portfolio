import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";

const certificates = [
    {
        title: "Java Reactjs FullStack Course Completion Certificate",
        issuer: "Credo Systemz",
        date: "2024",
        link: "https://drive.google.com/file/d/1VVpVrKRMSGRb8WdqOFyc9JQipBun80VI/view?usp=sharing",
    },
    {
        title: "Python Internship Certificate",
        issuer: "Shiash Infotech",
        date: "2022",
        link: "https://drive.google.com/file/d/1JOJzhfrsOr8jOf2_zrWiPksS38IQ9sTV/view?usp=sharing",
    },
];

export default function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsPerView(1);
            else setCardsPerView(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Max index so last card fully visible
    const maxIndex = Math.max(certificates.length - cardsPerView, 0);

    const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

    return (
        <section
            id="certificates"
            className="py-20 max-w-6xl mx-auto px-6 relative"
        >
            {/* Divider */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center mb-6"
            >
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            </motion.div>

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-10 flex items-center justify-center gap-3"
            >
                <FaAward className="text-indigo-500" /> My <span className="text-indigo-500">Certificates</span>
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

                {/* Certificates Wrapper */}
                <motion.div
                    className="flex gap-4 px-2 md:px-0"
                    animate={{ x: `-${(100 / cardsPerView) * currentIndex}%` }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                >
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="flex-shrink-0 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
                            style={{
                                width: `${100 / cardsPerView}%`,
                                minWidth: cardsPerView === 1 ? "80%" : undefined, // ensures full mobile card width
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold">{cert.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    View Certificate
                                </a>
                            )}
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

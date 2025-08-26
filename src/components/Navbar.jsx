import { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Resume",
  "Contact", // 👈 Added Contact
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkRefs = useRef({});
  const navRef = useRef(null);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll progress & active section
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = link.toLowerCase();
        }
      });
      setActive(current);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHoverStyle = () => {
    if (!hoveredLink || !linkRefs.current[hoveredLink] || !navRef.current)
      return { width: 0, x: 0 };
    const linkRect = linkRefs.current[hoveredLink].getBoundingClientRect();
    const ulRect = navRef.current.getBoundingClientRect();
    return {
      width: linkRect.width,
      x: linkRect.left - ulRect.left,
    };
  };

  return (
    <nav className="fixed w-full top-0 z-50 shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 dark:bg-gray-900/90 backdrop-blur-lg">
      {/* Gradient scroll progress */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-transparent">
        <motion.div
          className="h-full bg-yellow-400 rounded-full"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 relative">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          MyPortfolio
        </h1>

        {/* Desktop Links */}
        <ul
          ref={navRef}
          className="hidden md:flex gap-8 text-lg font-semibold relative"
        >
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li
                key={id}
                className="relative"
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  ref={(el) => (linkRefs.current[id] = el)}
                  href={`#${id}`}
                  className={`pb-1 transition ${active === id
                      ? "text-yellow-300"
                      : "text-white/90 hover:text-yellow-300"
                    }`}
                >
                  {link}
                </a>

                {active === id && (
                  <span className="absolute left-0 bottom-0 -mb-2 h-[3px] w-full rounded-full bg-yellow-400" />
                )}
              </li>
            );
          })}

          {/* Hover underline */}
          {hoveredLink && (
            <motion.div
              layoutId="hoverHighlight"
              className="absolute bottom-0 -mb-2 h-[3px] rounded-full bg-yellow-400"
              initial={false}
              animate={getHoverStyle()}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </ul>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-900" />
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {/* <FaBars /> */}
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", duration: 0.6 }}
            className="fixed top-16 right-0 bg-gradient-to-b from-purple-200 via-pink-100 to-indigo-200 w-2/3 shadow-2xl p-6 rounded-l-xl"
          >
            <ul className="flex flex-col gap-6 text-lg">
              {links.map((link) => {
                const id = link.toLowerCase();
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`inline-block text-black pb-1 border-b-2 transition-all duration-300 ${active === id
                          ? "border-yellow-400 text-yellow-600"
                          : "border-transparent hover:border-yellow-400"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgMaximizeAlt, CgMathPlus } from "react-icons/cg";
import { Menu } from "lucide-react";
import GlowGraphics from "../../assets/zescalar/glow-graphics.gif";
import computerNetworkHistory from "../../assets/zescalar/computer-network-history.png";
import severalComputers from "../../assets/zescalar/several-computers.png";
import { useEffect, useRef } from "react";
import Sidebar from "@/components/zescalar/Sidebar";

const LessonPage = ({
  lesson,
  lessons,
  setSelectedLesson,
  isFullscreen,
  setIsFullscreen,
  searchTerm,
  isSidebarOpen,
  setIsSidebarOpen,
  headings,
  setSearchTerm,
}) => {
  const SIDEBAR_WIDTH = 300;

  if (!lesson) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 text-xl">
        Select a lesson from the sidebar
      </div>
    );
  }

  const firstMatchRef = useRef(null);

  const currentIndex = lessons.findIndex((l) => l.subheading === lesson.subheading);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const objectives = [
    "Describe computer network and its components",
    "Discuss various types of computer networks and network cables",
    "Define different types of network protocols",
    "Explain the fundamentals of data communication",
    "Explain the OSI model and its layers",
    "Describe the concept of IP addressing, subnetting, and tunneling",
  ];

  const topicSubheading = lesson.subheading?.trim().toLowerCase();
  const isTopic1 = topicSubheading === "introduction";
  const isTopic2 = topicSubheading === "learning objectives";
  const isTopic3 = topicSubheading === "introduction to networks";

  const timelinePoints = [
    { top: "40%", left: "8.3%" },
    { top: "31%", left: "27.3%" },
    { top: "31%", left: "47.7%" },
    { top: "31%", left: "68.4%" },
    { top: "31%", left: "89%" },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // ✅ Highlight helper
  const highlightText = (text, searchTerm) => {
    if (!searchTerm || !text) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);
    let firstFound = false;

    return parts.map((part, idx) => {
      if (regex.test(part)) {
        if (!firstFound) {
          firstFound = true;
          return (
            <mark
              key={idx}
              ref={firstMatchRef}
              className="bg-yellow-300 px-1 rounded"
            >
              {part}
            </mark>
          );
        }
        return (
          <mark key={idx} className="bg-yellow-300 px-1 rounded">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  // ✅ Scroll to the first occurrence when searchTerm changes
  useEffect(() => {
    if (firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchTerm]);

  return (
    <div className={`flex-1 flex flex-col h-full relative ${isFullscreen ? "pl-8" : ""}`}>
      {/* Sidebar only in NORMAL mode */}
      {!isFullscreen && (
        <motion.div
          className="h-full bg-white border-r border-gray-200 z-40"
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : -SIDEBAR_WIDTH }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: SIDEBAR_WIDTH,
            height: "100%",
          }}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            onSelectLesson={setSelectedLesson}
            headings={headings}
            onSearchTermChange={setSearchTerm}
          />
        </motion.div>
      )}

      {/* Menu toggle only in NORMAL mode */}
      {!isFullscreen && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-0 left-4 z-50 bg-white p-2 rounded shadow"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main lesson content */}
      <div className="flex-1 overflow-y-auto">
        {/* Previous Button */}
        {prevLesson && (
          <div
            className="bg-gray-100 px-4 py-2 rounded shadow cursor-pointer hover:bg-gray-200 flex items-center gap-2 mx-auto mb-4"
            style={{ width: "max-content" }}
            onClick={() => setSelectedLesson(prevLesson)}
          >
            <MdOutlineKeyboardArrowUp className="text-xl" />
            <span className="text-sm font-medium">
              Lesson {lessons.findIndex((l) => l.subheading === prevLesson.subheading) + 1}:{" "}
              {prevLesson.subheading}
            </span>
          </div>
        )}

        {/* Lesson Header */}
        <motion.div
          className="w-full px-8 pt-6 pl-20"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-md font-semibold text-gray-700">
            Lesson {currentIndex + 1} of {lessons.length}
          </h2>
          <h1 className="text-3xl font-bold mt-2 text-gray-900">
            {highlightText(lesson.subheading, searchTerm)}
          </h1>
          <div className="border-b-4 border-brandColor mt-6 w-40"></div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-b-2 border-brandColor mt-8 w-screen relative -translate-x-1/2"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* ✅ KEEP all your content blocks from code1 (GlowGraphics, Learning objectives, Topic3, etc.) */}
        {/* ... unchanged content code from your code1 here ... */}

      </div>

      {/* Fullscreen Toggle */}
      <div className="fixed bottom-0 left-0 w-full z-[100] border-t border-gray-300 bg-white">
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="w-full py-3 text-center font-medium text-gray-700 hover:text-black"
        >
          <div className="flex items-center justify-center gap-2">
            <CgMaximizeAlt size={20} />
            <span className="text-sm">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LessonPage;

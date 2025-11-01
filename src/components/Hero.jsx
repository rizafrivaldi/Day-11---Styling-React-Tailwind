import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white dark:from-slate-900 dark:to-black">
      {" "}
      <div className="max-w-3xl">
        {" "}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          {" "}
          Hi, I'm <span className="text-indigo-500">
            Dolor Sit Amet
          </span> 🚀{" "}
        </motion.h1>{" "}
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          {" "}
          A passionate Full Stack Developer crafting elegant, responsive, and
          modern web experiences.{" "}
        </p>{" "}
        <div className="flex justify-center gap-4">
          {" "}
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-all"
          >
            {" "}
            View Projects{" "}
          </a>{" "}
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg text-indigo-300 font-semibold transition-all"
          >
            {" "}
            Contact Me{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </motion.section>
  );
}

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/src/assets/hero-bg.jpg')`,
      }}
      variants={containerVariants}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>{" "}
      <div className="max-w-3xl">
        {" "}
        <motion.h1
          className="relative z-10 max-w-3xl text-5xl md:text-6xl font-extrabold mb-4"
          variants={childVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <br /> Hi, I'm <span className="text-indigo-500">Dolor Sit Amet</span>{" "}
        </motion.h1>{" "}
        <motion.p
          className="relative z-10 max-w-3xl text-lg md:text-xl text-gray-300 mb-6"
          variants={childVariants}
        >
          {" "}
          A Mageran Full Stack Developer crafting elegant, responsive, and
          modern web experiences.{" "}
        </motion.p>{" "}
        <motion.div
          className="flex justify-center gap-4"
          variants={childVariants}
        >
          {" "}
          <a
            href="#projects"
            className="relative z-10 max-w-3xl px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition-all"
          >
            {" "}
            View Projects{" "}
          </a>{" "}
          <a
            href="#contact"
            className="relative z-10 max-w-3xl px-6 py-3 border border-indigo-400 hover:bg-indigo-500 hover:text-white rounded-full text-indigo-300 font-semibold transition-all"
          >
            {" "}
            Contact Me{" "}
          </a>{" "}
        </motion.div>{" "}
      </div>{" "}
    </motion.section>
  );
}

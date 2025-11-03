import { motion } from "framer-motion";
import profilePic from "../assets/takumi.jpeg";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-900 dark:bg-black text-white text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/*Profile Image*/}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-500 shadow-lg"
        variants={childVariants}
      />
      {/*Intro Text*/}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3"
        variants={childVariants}
      >
        Hi, I'm <span className="text-indigo-400"> Rizaf Rivaldi</span>
      </motion.h2>

      <motion.p
        clasName="text-gray-300 text-lg max-w-2xl mx-auto mb-8"
        variants={childVariants}
      >
        I am a Mageran Full Stack Developer specializing in building beautiful,
        fast, and scalable web applications. I love turning complex ideas into
        elegant, functional solutions.
      </motion.p>
      <br />
      {/*Download CV Button*/}
      <motion.a
        href="/Rizaf_Rivaldi_CV.pdf" //put your CV here//
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white shadow-md transition"
      >
        Download CV
      </motion.a>
    </motion.section>
  );
}

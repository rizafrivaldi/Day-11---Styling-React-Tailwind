import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 3 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, straggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-900 dark:bg-black text-white text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="text-4xl font-bold mb-8" variants={childVariants}>
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
        variant={childVariants}
      >
        I'm always open to new opportunities and collaborations! Whether it's a
        project idea, feedback, or just to say hi — feel free to reach out.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        variants={childVariants}
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-700 focus:ring-indigo-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-700 focus:ring-indigo-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-md bg-gray-700 focus:ring-indigo-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full p-3 rounded-md bg-gray-700 focus:ring-indigo-500 outline-none"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        variants={childVariants}
      >
        <a
          href="https://github.com"
          className="hover:text-indigo-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          className="hover:text-indigo-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rizafrivaldi@gmail.com"
          className="hover:text-indigo-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </motion.section>
  );
}

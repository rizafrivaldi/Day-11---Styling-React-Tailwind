import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

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

  const [sent, setSent] = useState(false);

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
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          setTimeout(() => setSent(false), 3000);
        }}
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

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
        >
          Send Message
        </motion.button>
        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm mt-2"
          >
            Message sent succesfully (demo only)
          </motion.p>
        )}
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        variants={childVariants}
      >
        {[
          { href: "https://github.com", icon: <FaGithub /> },
          { href: "https://linkedin.com", icon: <FaLinkedin /> },
          { href: "mailto:rizafrivaldi@gmail.com", icon: <FaEnvelope /> },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            whileHover={{
              scale: 1.2,
              color: "#6366f1",
              textShadow: "0px 0px 8px #6366f1",
            }} // Glow Effect
            transition={{ type: "spring", stiffness: 300 }}
            className="transition"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
      {/*
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
        </a> */}
    </motion.section>
  );
}

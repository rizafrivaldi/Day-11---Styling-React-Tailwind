import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray dark:bg-black text-white text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-8">My Project</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Ex. Card Project */}
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <motion.div
            key={num}
            variants={itemVariants}
            className="relative bg-gray-800 rounded-xl overflow-hidden shadow-md group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Picture/Thumbnail */}
            <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-400 group-hover: opacity-70 transition-opacity">
              Image {num}
            </div>

            {/*Main Content*/}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project {num}</h3>
              <p className="text-gray-400 text-sm mb-6">
                A short description about project {num}.
              </p>

              {/*Button Appear while hover*/}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-sm font-semibold transition"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border border-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg text-indigo-300 text-sm font-semibold transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function Users() {
  //State//
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  //Get Data User From API//
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/users?limit=24&skip=${(page - 1) * 6}`
        );
        console.log("Response status:", res.status);
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        console.log("Data:", data);
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  //Container Animation//
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  //Render Condition//
  if (loading)
    return (
      <div className="text-center text-gray-400 py-20">Loading users...</div>
    );
  if (error)
    return <div className="text-center text-red-400 py-20">Error: {error}</div>;

  //Main View//
  return (
    <motion.section
      id="users"
      className="py-20 bg-gray-900 dark:bg-black text-white text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-8">User Dashboard</h2>
      <br />
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-full w-64 text-black focus:outline-none focus:ring-indigo-500"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        variants={containerVariants}
      >
        {users
          .slice((page - 1) * 6, page * 6)
          .filter((user) =>
            `${user.firstName} ${user.lastName}`
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <motion.div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              variants={itemVariants}
              whileHover={{
                scale: 1.09,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/30 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={user.image}
                alt={user.first_name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
              />
              <h3 className="text-lg font-semibold transition-all duration-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1] cursor-pointer">
                <FaEnvelope className="text-indigo-400" />
                {user.email}
              </p>
            </motion.div>
          ))}
      </motion.div>
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedUser(null)} //Click outside for close//
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-[90%] text-white relative"
              onClick={(e) => e.stopPropagation()} //for inside click that doesnt close//
            >
              <button
                onClick={() => setSelectedUser(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>
              <img
                src={selectedUser.image}
                alt={selectedUser.firstName}
                className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                {selectedUser.firstName} {selectedUser.lastName}
              </h3>
              <p className="text-gray-400 mb-4">{selectedUser.email}</p>

              <div className="text-left text-gray-300 space-y-2">
                <p>
                  {" "}
                  📍{" "}
                  <span className="text-indigo-400">
                    {selectedUser.address?.city}
                  </span>
                </p>
                <p> 🏢 {selectedUser.company?.name}</p>
                <p> 📞 {selectedUser.phone}</p>
                <p> 🎂 {selectedUser.age} years old</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-400">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </motion.section>
  );
}

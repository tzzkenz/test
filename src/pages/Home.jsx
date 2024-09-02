import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import PageCardGrid from "../components/home/PageCard";
import bg from "../assets/bg/1.jpg";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sampleEvents = [
    {
      id: 1,
      title: "Dance Competition",
      description: "Showcase your moves in our exciting dance face-off!",
      image: "src\\assets\\home\\onam.png",
    },
    {
      id: 2,
      title: "Music Festival",
      description: "Experience the rhythm of various genres in one place.",
      image: "src\\assets\\home\\dance.png",
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Immerse yourself in a world of colors and creativity.",
      image: "src\\assets\\home\\procession1.png",
    },
    {
      id: 4,
      title: "Poetry Slam",
      description: "Let your words flow in this electrifying competition.",
      image: "src\\assets\\home\\procession2.png",
    },
    {
      id: 5,
      title: "Cultural Parade",
      description:
        "Witness the beauty of diverse traditions in our grand parade.",
      image: "src\\assets\\home\\procession3.png",
    },
    {
      id: 6,
      title: "Food Festival",
      description:
        "Savor the flavors of various cuisines in one delicious event.",
      image: "src\\assets\\home\\procession4.png",
    },
  ];

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-900 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="relative z-10 text-center px-4">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1, 0.9], opacity: 1 }}
              transition={{
                duration: 1.5,
                times: [0, 0.7, 1],
                ease: "easeInOut",
              }}
              className="text-2xl sm:text-3xl md:text-4xl text-rose-400 font-semibold uppercase tracking-wider font-display mb-2"
            >
              Samskara
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
              transition={{
                duration: 2,
                times: [0, 0.7, 1],
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="text-4xl sm:text-5xl md:text-6xl text-rose-500 font-bold uppercase tracking-widest font-display"
            >
              Aaravam '24
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 relative"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>

          <header className="mb-8 flex justify-center flex-col items-center mt-8 sm:mt-12 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-rose-400 font-display">
              Samskara
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-500 font-display mt-2">
              Aaravam '24
            </h1>
          </header>
          <main className="flex flex-col justify-center items-center text-white relative z-10">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Our featured events
              </h2>
              <PageCardGrid events={sampleEvents} />
            </motion.section>
          </main>
          <footer className="mt-8 sm:mt-12 text-center text-gray-400 font-body relative z-10">
            <p>&copy; 2024 Samskara Aaravam. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://chat.whatsapp.com/my-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400"
              >
                <FaWhatsapp size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.instagram.com/samskara_cet/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaInstagram size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;

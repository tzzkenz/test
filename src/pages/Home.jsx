import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import PageCardGrid from "../components/home/PageCard";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Handle loaded particles
  };

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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={
          {
            // Your particles configuration
          }
        }
      />
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative z-10 text-center px-4">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1, 0.9], opacity: 1 }}
              transition={{
                duration: 2,
                times: [0, 0.7, 1],
                ease: "easeInOut",
                delay: 1,
              }}
              className="text-2xl sm:text-3xl md:text-4xl text-red-400 font-semibold uppercase tracking-wider font-display mb-2"
            >
              Samskara
            </motion.h2>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
              transition={{
                duration: 2.5,
                times: [0, 0.7, 1],
                ease: "easeInOut",
                delay: 2,
              }}
              className="text-4xl sm:text-5xl md:text-6xl text-red-500 font-bold uppercase tracking-widest font-display"
            >
              Aaravam '24
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 4, ease: "easeInOut" }}
              className="h-1 bg-red-500 mt-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5 }}
              className="text-white text-lg sm:text-xl mt-4 font-body"
            >
              Prepare for an unforgettable experience...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black text-white p-4 sm:p-6"
        >
          <header className="mb-8 flex justify-center flex-col items-center mt-8 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-red-400 font-display">
              Samskara
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-red-500 font-display mt-2">
              Aaravam '24
            </h1>
          </header>
          <main className="flex flex-col justify-center items-center text-white">
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
          <footer className="mt-8 sm:mt-12 text-center text-gray-500 font-body">
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

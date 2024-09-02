import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import onam from "../assets/home/onam.png";

const funPlaces = [
  {
    name: "Student Union",
    description: "Hub of campus life with food, events, and lounges",
    details:
      "The Student Union features a food court, study areas, game rooms, and hosts various student organization meetings and events throughout the year.",
    image: onam,
    color: "bg-blue-500",
  },
  {
    name: "Library",
    description: "Quiet study spots and vast resources",
    details:
      "Our state-of-the-art library offers individual and group study rooms, a vast collection of books and digital resources, and 24/7 access during exam periods.",
    image: onam,
    color: "bg-green-500",
  },
  {
    name: "Campus Green",
    description: "Perfect for outdoor activities and relaxation",
    details:
      "The Campus Green is a sprawling lawn area where students can relax, play frisbee, have picnics, or attend outdoor concerts and events.",
    image: onam,
    color: "bg-yellow-500",
  },
  {
    name: "Gym",
    description: "State-of-the-art fitness center for all students",
    details:
      "Our gym includes modern exercise equipment, an Olympic-sized swimming pool, basketball courts, and offers various fitness classes throughout the week.",
    image: onam,
    color: "bg-red-500",
  },
  {
    name: "Auditorium",
    description: "Large space for performances and lectures",
    details:
      "The auditorium hosts guest lectures, plays, and performances, providing a central venue for large campus gatherings and cultural events.",
    image: onam,
    color: "bg-purple-500",
  },
  {
    name: "Cafeteria",
    description: "Variety of food options and social hub",
    details:
      "The cafeteria offers a diverse range of food options from various cuisines, making it a popular spot for students to grab a bite and socialize.",
    image: onam,
    color: "bg-orange-500",
  },
  {
    name: "Tech Lab",
    description: "Equipped with the latest technology for innovation",
    details:
      "Our tech lab is equipped with the latest computers, software, and tools, providing students with the resources needed for research and innovation.",
    image: onam,
    color: "bg-teal-500",
  },
  {
    name: "Art Studio",
    description: "Creative space for art and design projects",
    details:
      "The art studio offers a creative environment for students interested in painting, sculpture, and other forms of visual arts, with all necessary supplies provided.",
    image: onam,
    color: "bg-pink-500",
  },
];

function Map() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-2"
        >
          Explore Our Campus
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl font-medium text-center text-gray-300 mb-12"
        >
          Discover the best places on campus
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {funPlaces.map((place, index) => (
            <motion.div
              key={place.name}
              layoutId={`card-container-${index}`}
              variants={cardVariants}
              className={`bg-gradient-to-r ${place.color} rounded-lg shadow-lg overflow-hidden`}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="cursor-pointer h-full flex flex-col"
                onClick={() => handleCardClick(index)}
              >
                <motion.img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                  layoutId={`card-image-${index}`}
                />
                <motion.div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <motion.h2
                      className="text-xl font-semibold mb-2 text-white"
                      layoutId={`card-title-${index}`}
                    >
                      {place.name}
                    </motion.h2>
                    <motion.p
                      className="text-sm text-white opacity-90"
                      layoutId={`card-description-${index}`}
                    >
                      {place.description}
                    </motion.p>
                  </div>
                  <motion.button
                    className="mt-4 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            key="modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <motion.div
              layoutId={`card-container-${expandedIndex}`}
              variants={modalVariants}
              className={`${funPlaces[expandedIndex].color} p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl sm:text-2xl focus:outline-none z-10"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              <motion.img
                src={funPlaces[expandedIndex].image}
                alt={funPlaces[expandedIndex].name}
                className="w-full h-64 sm:h-80 object-cover rounded-md mb-4"
                layoutId={`card-image-${expandedIndex}`}
              />
              <motion.h2
                className="text-2xl sm:text-3xl font-semibold mb-2 text-white"
                layoutId={`card-title-${expandedIndex}`}
              >
                {funPlaces[expandedIndex].name}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base text-white opacity-90 mb-4"
                layoutId={`card-description-${expandedIndex}`}
              >
                {funPlaces[expandedIndex].description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-sm sm:text-base text-white"
              >
                {funPlaces[expandedIndex].details}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Map;

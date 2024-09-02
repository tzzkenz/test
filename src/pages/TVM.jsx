import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/tvm/1.jpg";

const funPlaces = [
  {
    name: "Napier Museum",
    description:
      "Napier Museum is an art and natural history museum situated in Thiruvananthapuram, the capital city of Kerala, India.",
    image: image,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Kovalam Beach",
    description:
      "Kovalam is a beach town by the Arabian Sea in Thiruvananthapuram city, Kerala, India, located around 16 km south of the city center.",
    image: image,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Shanghumugham Beach",
    description:
      "Shanghumugham Beach is a beach in Thiruvananthapuram district of Kerala, south India.",
    image: image,
    color: "from-orange-500 to-yellow-600",
  },
  {
    name: "Vizhinjam Rock Cut Cave",
    description:
      "Vizhinjam Rock Cut Cave Temple is a historic site with rock-cut sculptures in the Trivandrum district of Kerala, India.",
    image: image,
    color: "from-purple-500 to-pink-600",
  },
];

function TVM() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Explore Trivandrum
        </h1>
        <h2 className="text-xl font-medium text-center text-gray-300 mb-12">
          Discover the best places to visit in the heart of Kerala
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {funPlaces.map((place, index) => (
            <motion.div
              key={place.name}
              className={`bg-gradient-to-r ${place.color} rounded-lg shadow-lg overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {place.name}
                </h2>
                <p className="text-sm text-white opacity-90 mb-4">
                  {place.description}
                </p>
                <Link to={`/place/${index}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-colors duration-300"
                  >
                    Plan Your Visit
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default TVM;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaClock,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUtensils,
  FaArrowLeft,
} from "react-icons/fa";

import image from "../../assets/tvm/1.jpg";
const funPlaces = [
  {
    name: "Napier Museum",
    description: `Welcome to the Napier Museum, a treasure trove nestled in the heart of Thiruvananthapuram! Dive into a captivating journey through time with our eclectic collection of art, archaeology, and natural wonders. This 19th-century gem boasts a stunning fusion of Kerala and Mughal architectural styles, making it as visually striking as it is historically rich. Wander through halls filled with ancient sculptures, traditional Kerala artifacts, and stories that bring the past to life. Get ready to be inspired by the charm and grandeur of yesteryears!`,
    images: [image, image],
    directions: `Getting here is a breeze! Located just a stone's throw from the Thiruvananthapuram Zoo, you can hop on a bus or auto-rickshaw for a quick ride. If you're driving, there's plenty of parking available, so no need to stress about finding a spot.`,
    nearbyAttractions: [
      "Kuthiramalika Palace - Step into history with this palace showcasing Kerala’s traditional architecture and royal artifacts.",
      "Zoo - Perfect for a family outing or a day of animal adventures.",
      "Shankumugham Beach - Unwind at this serene beach, ideal for a leisurely stroll or a relaxing afternoon.",
    ],
    foodSpots: [
      "Hotel Aryas - Dive into a delightful array of traditional Kerala dishes that'll tickle your taste buds.",
      "Mothers Veg Plaza - A haven for vegetarians, offering scrumptious South Indian cuisine.",
      "Kailas Kitchen - Enjoy a blend of local and international flavors in a vibrant setting.",
    ],
    visitingHours: "10 AM - 5 PM (Closed on Mondays)",
    entryFee: "₹10 for Indian visitors, ₹100 for foreign tourists",
    bestTimeToVisit:
      "October to March, when the weather is just perfect for exploring and enjoying the museum’s offerings.",
  },
  {
    name: "Kovalam Beach",
    description: `Welcome to Kovalam Beach, the ultimate sun-soaked paradise! With its stunning crescent-shaped shores and breathtaking views, this beach is your go-to destination for fun in the sun. Whether you're into the iconic lighthouse at Lighthouse Beach, the lively vibes at Hawa Beach, or the serene atmosphere of Samudra Beach, Kovalam has something for every beach lover. Feel the warm sand between your toes, catch some waves, or simply bask in the beauty of the Arabian Sea.`,
    images: [image, image],
    directions: `Just 16 kilometers south of Thiruvananthapuram, getting to Kovalam Beach is easy-peasy. Public buses, taxis, and even your own car will bring you straight to this sandy haven, with ample parking available for those driving.`,
    nearbyAttractions: [
      "Hawa Beach - Dive into vibrant beach life with exciting water sports and a buzzing nightlife.",
      "Lighthouse Beach - Climb the historic lighthouse for panoramic views that will take your breath away.",
      "Vellayani Lake - A picturesque lake perfect for a leisurely boat ride or a relaxing picnic.",
    ],
    foodSpots: [
      "The Tides Restaurant - Feast on delectable seafood while enjoying a beachside dining experience.",
      "Sea View Restaurant - Savor a mix of international and local dishes with stunning ocean views.",
      "Kovalam Beach Cafe - Chill out with light snacks and beverages in a casual, laid-back atmosphere.",
    ],
    visitingHours: "Open 24/7",
    entryFee: "Free",
    bestTimeToVisit:
      "November to February, when the cool breeze and pleasant weather make beach days even more enjoyable.",
  },
  {
    name: "Shanghumugham Beach",
    description: `Discover Shanghumugham Beach, your perfect retreat from the city's hustle and bustle! Known for its sprawling golden sands and mesmerizing sunsets, this beach is a local favorite. With a giant mermaid statue adding a whimsical touch, it's a fantastic spot for evening strolls or simply soaking in the tranquil vibes. It’s the ideal place to unwind, relax, and let the waves wash your worries away.`,
    images: [image, image],
    directions: `Located just a short drive from the Trivandrum International Airport, reaching Shanghumugham Beach is a breeze. Choose from taxis, auto-rickshaws, or public buses, and find plenty of parking upon arrival.`,
    nearbyAttractions: [
      "Shanghumugham Beach Park - Enjoy a well-maintained park right next to the beach, perfect for a family outing.",
      "Sree Padmanabhaswamy Temple - Marvel at the architectural splendor and rich history of this famous temple.",
    ],
    foodSpots: [
      "Sreeraj Lassi Bar - Cool down with refreshing lassis and tasty snacks.",
      "The Seafood Hut - Delight in fresh seafood dishes with a view of the beach.",
      "Beachside Cafe - Enjoy a cup of coffee or a light bite while soaking in the beachside atmosphere.",
    ],
    visitingHours: "Open 24/7",
    entryFee: "Free",
    bestTimeToVisit:
      "September to March, when the pleasant weather and cooler temperatures make it perfect for beach outings.",
  },
  {
    name: "Vizhinjam Rock Cut Cave",
    description: `Embark on a journey back in time at the Vizhinjam Rock Cut Cave, a marvel of ancient architecture! This archaeological gem, carved out in the 8th century, reveals the intricate artistry and spiritual heritage of the region. Dedicated to Lord Shiva, the cave’s rock-cut sculptures and inscriptions offer a fascinating glimpse into the art and culture of ancient Kerala. It’s a must-see for history buffs and anyone eager to explore the region’s rich past.`,
    images: [image, image],
    directions: `Nestled in Vizhinjam, just a short ride from Thiruvananthapuram, the cave is easy to reach by taxi, auto-rickshaw, or public bus. Well-signposted, it’s simple to find, and parking is available for those arriving by car.`,
    nearbyAttractions: [
      "Vizhinjam Lighthouse - Climb this historic lighthouse for stunning coastal views.",
      "Lighthouse Beach - A beautiful beach nearby, offering a relaxed atmosphere and scenic beauty.",
    ],
    foodSpots: [
      "The Rock Restaurant - Enjoy a variety of local and international dishes in a unique setting.",
      "Coastal Cafe - Indulge in delicious seafood and casual dining with a laid-back vibe.",
      "Vizhinjam Seafood Delight - A local favorite for fresh and tasty seafood.",
    ],
    visitingHours: "9 AM - 6 PM",
    entryFee: "₹20 for Indian visitors, ₹200 for foreign tourists",
    bestTimeToVisit:
      "November to February, when the weather is ideal for exploring and sightseeing.",
  },
];

function PlaceDetail() {
  const { id } = useParams();
  const place = funPlaces[id] || {};

  const [showFunFact, setShowFunFact] = useState(false);
  const [funFact, setFunFact] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const funFacts = [
      "Did you know that the Napier Museum is named after Lord Napier, the Governor of Madras from 1866-1872?",
      "Kovalam Beach is famous for its lighthouse, which was built in 1972 and stands 35 meters tall!",
      "The giant sculpture of Matsya Kanyaka (mermaid) at Shanghumugham Beach is over 35 meters long!",
      "The Vizhinjam Rock Cut Cave is believed to date back to the 8th century AD!",
    ];
    setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Explore
        </Link>

        <button
          onClick={toggleDarkMode}
          className={`fixed top-4 right-4 z-20 p-2 rounded-full focus:outline-none ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{place.name}</h1>
          <p className="text-lg mb-6">{place.description}</p>
          <button
            onClick={() => setShowFunFact(!showFunFact)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            {showFunFact ? "Hide Fun Fact" : "Show Fun Fact"}
          </button>
          <AnimatePresence>
            {showFunFact && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-4 ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                } rounded-lg font-bold`}
              >
                <p>{funFact}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaMapMarkedAlt className="mr-2" /> Directions
            </h2>
            <p className="text-lg">{place.directions}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
            <ul className="space-y-2">
              {(place.nearbyAttractions || []).map((attraction, index) => (
                <li key={index} className="text-lg flex items-start">
                  <span className="mr-2">•</span> {attraction}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaUtensils className="mr-2" /> Food Spots
            </h2>
            <ul className="space-y-2">
              {(place.foodSpots || []).map((spot, index) => (
                <li key={index} className="text-lg flex items-start">
                  <span className="mr-2">•</span> {spot}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Important Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <p className="text-lg">
                  <span className="font-semibold">Operating Hours:</span>{" "}
                  {place.visitingHours}
                </p>
              </div>
              <div className="flex items-center">
                <FaMoneyBillWave className="mr-2" />
                <p className="text-lg">
                  <span className="font-semibold">Entry Fee:</span>{" "}
                  {place.entryFee}
                </p>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <p className="text-lg">
                  <span className="font-semibold">Best Time to Visit:</span>{" "}
                  {place.bestTimeToVisit}
                </p>
              </div>
            </div>
          </motion.section>
        </div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4">Images</h2>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="max-w-4xl mx-auto"
          >
            {(place.images || []).map((img, index) => (
              <div key={index} className="relative w-full h-64 md:h-96">
                <img
                  src={img}
                  alt={`${place.name} - Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Carousel>
        </motion.section>
      </div>
    </div>
  );
}

export default PlaceDetail;

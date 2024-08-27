import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenicSpots = [
  {
    id: 1,
    name: "Central Library",
    description:
      "A vast repository of knowledge with a beautiful facade, the Central Library stands as a testament to CET's commitment to learning.",
    image: "/api/placeholder/800/500",
  },
  {
    id: 2,
    name: "College Ground",
    description:
      "A sprawling green space where students gather for sports, events, and leisurely afternoons under the sun.",
    image: "/api/placeholder/800/500",
  },
  {
    id: 3,
    name: "Botanical Garden",
    description:
      "A serene oasis within the campus, showcasing a diverse collection of plant species and offering a peaceful retreat.",
    image: "/api/placeholder/800/500",
  },
  {
    id: 4,
    name: "Main Building",
    description:
      "An architectural marvel that has stood the test of time, housing the administrative offices and some of the oldest classrooms.",
    image: "/api/placeholder/800/500",
  },
  {
    id: 5,
    name: "Innovation Center",
    description:
      "A modern hub fostering creativity and technological advancements, where students bring their ideas to life.",
    image: "/api/placeholder/800/500",
  },
];

const SpotCard = React.memo(({ spot, isSelected, onClick }) => {
  const variants = {
    selected: { scale: 1.05, zIndex: 10, transition: { duration: 0.3 } },
    notSelected: { scale: 1, zIndex: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      layout
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      variants={variants}
      initial="notSelected"
      animate={isSelected ? "selected" : "notSelected"}
      className={`cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden m-2
                  ${isSelected ? "w-full md:w-2/3 h-96" : "w-full md:w-1/4 h-40"}`}
    >
      <img
        src={spot.image}
        alt={spot.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent flex flex-col justify-end p-4">
        <h2 className="text-white text-2xl font-bold mb-2">{spot.name}</h2>
        {isSelected && (
          <p className="text-white">{spot.description}</p>
        )}
      </div>
    </motion.div>
  );
});

const Map = () => {
  const [selectedSpotId, setSelectedSpotId] = useState(null);
  const mapRef = useRef(null);

  const handleSpotClick = useCallback((spotId) => {
    setSelectedSpotId(prev => prev === spotId ? null : spotId);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (mapRef.current && !mapRef.current.contains(event.target)) {
      setSelectedSpotId(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 text-gray-800 p-4 sm:p-6 relative" ref={mapRef}>
      <div className="relative z-10 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-rose-500 mb-10">
          Scenic Spots of CET
        </h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          <AnimatePresence>
            {scenicSpots.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                isSelected={selectedSpotId === spot.id}
                onClick={() => handleSpotClick(spot.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Map;
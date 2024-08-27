import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PageCard = ({ title, description, image }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="page-card"
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      style={{
        margin: "0 15px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        background: "glass",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        className="card-image-container"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
        style={{
          overflow: "hidden",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        {!imageError ? (
          <motion.img
            src={image}
            alt={title}
            onError={handleImageError}
            whileHover={{ scale: 1.1 }}
            initial={{ filter: "blur(5px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        ) : (
          <motion.div
            className="image-error"
            initial={{ backgroundColor: "#ff0000" }}
            animate={{
              backgroundColor: ["#ff0000", "#ff8000", "#ffff00", "#ff0000"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Image not available
            {console.log(image)}
          </motion.div>
        )}
      </motion.div>
      <motion.h3
        whileHover={{ scale: 1.1, color: "#ff00ff" }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: "1.5rem",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          flex: 1,
          fontSize: "1rem",
          lineHeight: "1.5",
          textAlign: "justify",
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

PageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const PageCardGrid = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="page-card-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "20px" }}
    >
      <Slider {...settings}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <PageCard
              title={event.title}
              description={event.description}
              image={event.image}
            />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

PageCardGrid.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageCardGrid;

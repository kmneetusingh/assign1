import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PropertyCard = ({ property, onFavorite, isFavorite }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      backgroundColor: "#fff",
    }}
  >
    <img
      src={property.images[0]}
      alt={property.title}
      style={{
        height: "220px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "6px",
        transition: "transform 0.3s ease",
      }}
    />
    <h2 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "12px" }}>
      {property.title}
    </h2>
    <p style={{ color: "#555", margin: "4px 0" }}>{property.location}</p>
    <p style={{ color: "#2563eb", fontWeight: "600", marginTop: "6px" }}>
      ₹{property.price.toLocaleString()}
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      <Link to={`/property/${property.id}`}>
        <button
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "6px 12px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
      <button
        onClick={() => onFavorite(property.id)}
        style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: isFavorite ? "red" : "#888",
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  </motion.div>
);

export default PropertyCard;

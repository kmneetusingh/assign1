import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";
import propertiesData from "../api/properties.json";
import { motion } from "framer-motion";

const Home = () => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    type: "",
    bedrooms: "",
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((fid) => fid !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const min = filters.minPrice ? Number(filters.minPrice) : 0;
      const max = filters.maxPrice ? Number(filters.maxPrice) : Infinity;
      const type = filters.type;
      const bedrooms = filters.bedrooms;

      const result = propertiesData.filter((p) => {
        return (
          p.price >= min &&
          p.price <= max &&
          (type ? p.type === type : true) &&
          (bedrooms ? p.bedrooms === bedrooms : true)
        );
      });
      setFiltered(result);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [filters]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Filters filters={filters} onChange={handleFilterChange} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
        >
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PropertyCard
                property={property}
                onFavorite={handleFavorite}
                isFavorite={favorites.includes(property.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Home;

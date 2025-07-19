import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../api/properties.json";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);

  const handleFavorite = (id) => {
    const updated = favorites.filter((fid) => fid !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const favoriteProperties = propertiesData.filter((p) =>
    favorites.includes(p.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 mt-16 min-h-screen transition-all">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4 tracking-tight">
        ❤️ Favorite Listings
      </h1>

      {favoriteProperties.length === 0 ? (
        <div className="text-center mt-28 text-gray-500 animate-fade-in">
          <p className="text-xl font-medium">No favorites yet.</p>
          <p className="text-sm mt-2 text-gray-400">
            Start exploring and tap the ❤️ to save your dream property.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {favoriteProperties.map((property) => (
            <div
              key={property.id}
              className="bg-transparent rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <PropertyCard
                property={property}
                onFavorite={handleFavorite}
                isFavorite={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

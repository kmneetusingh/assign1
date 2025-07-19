import React, { useState } from "react";

const Filters = ({ filters, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden mb-4 w-full bg-blue-600 text-white px-4 py-2 rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filter Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded shadow transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:grid`}
      >
        {/* Min Price */}
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Budget Min
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            min="0"
            value={filters.minPrice}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Min Price"
          />
        </div>

        {/* Max Price */}
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Budget Max
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            min="0"
            value={filters.maxPrice}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Max Price"
          />
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            <option value="">All</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            <option value="">All</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;

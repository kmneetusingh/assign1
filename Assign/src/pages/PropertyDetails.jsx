import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../api/properties.json";
import PropertyCarousel from "../components/PropertyCarousel";
import MapView from "../components/MapView";
import EnquiryForm from "../components/EnquiryForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === Number(id));
  const [showEnquiry, setShowEnquiry] = useState(false);

  if (!property) {
    return (
      <div className="p-4 sm:p-8 text-center text-lg font-semibold text-red-600">
        Property not found.
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      {/* Carousel */}
      <div className="max-w-screen-xl mx-auto">
        <PropertyCarousel images={property.images} />
      </div>

      {/* Details Section */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-4 sm:p-6 mt-6 sm:mt-10 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {property.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          {property.location}
        </p>
        <p className="text-blue-600 text-lg sm:text-xl font-semibold">
          ₹{property.price.toLocaleString()}
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          Area: {property.area} &nbsp;|&nbsp; {property.bedrooms}
        </p>
        <div className="text-gray-700 text-sm sm:text-base">
          <span className="font-medium text-gray-800">Amenities:</span>{" "}
          {property.amenities.join(", ")}
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {property.description}
        </p>

        {/* Conditionally Render Map */}
        {!showEnquiry && (
          <div className="mt-6">
            <MapView location={property.location} />
          </div>
        )}

        {/* Enquiry Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowEnquiry(true)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
          >
            Enquiry
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryForm show={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </div>
  );
};

export default PropertyDetails;

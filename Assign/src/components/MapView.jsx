import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = ({ location }) => {
  const position =
    location?.lat && location?.lng
      ? [location.lat, location.lng]
      : [19.0760, 72.8777]; // Default to Mumbai

  return (
    <div className="w-full sm:w-[98%] md:w-[95%] lg:w-[92%] xl:w-[90%] 2xl:w-[85%] mx-auto h-[65vh] rounded-2xl overflow-hidden shadow-xl mt-8 border border-gray-200">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Location: {location?.name || "Default Location"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;

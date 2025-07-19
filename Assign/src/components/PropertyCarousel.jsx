import React, { useState, useEffect, useRef } from "react";

const PropertyCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const intervalRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`relative mx-auto overflow-hidden transition-all duration-300 ${
        isFullScreen
          ? "fixed inset-0 z-50 bg-black"
          : "w-full sm:w-[90%] md:w-[80%] lg:w-[60%] mt-4"
      }`}
      style={{
        height: isFullScreen ? "100vh" : "300px",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full w-full">
        <img
          src={images[current]}
          alt="Property"
          className={`object-cover cursor-pointer h-full w-full ${
            isFullScreen ? "" : "rounded-xl"
          }`}
          onClick={toggleFullScreen}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 transition px-3 py-1 rounded-full text-2xl z-10"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 transition px-3 py-1 rounded-full text-2xl z-10"
          >
            &#8594;
          </button>
        </>
      )}

      {isFullScreen && (
        <button
          onClick={toggleFullScreen}
          className="absolute top-5 right-5 text-white text-3xl z-50"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default PropertyCarousel;

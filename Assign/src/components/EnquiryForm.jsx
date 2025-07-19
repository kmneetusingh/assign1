import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquiryForm = ({ show, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    // handle form submission logic here
    onClose(); // optional: close modal after submission
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md sm:max-w-lg md:max-w-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 transition-colors text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Let's Talk
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 rounded-md w-full text-sm font-medium transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryForm;

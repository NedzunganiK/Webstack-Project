import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const FloatingNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 flex flex-col space-y-3"
    >
      <Link to="/" className="bg-blue-600 p-3 rounded-full shadow-lg text-white">
        <FaHome size={24} />
      </Link>
      <Link to="/pricing" className="bg-green-600 p-3 rounded-full shadow-lg text-white">
        <FaDollarSign size={24} />
      </Link>
      <Link to="/booking" className="bg-red-600 p-3 rounded-full shadow-lg text-white">
        <FaCalendarAlt size={24} />
      </Link>
    </motion.div>
  );
};

export default FloatingNav;


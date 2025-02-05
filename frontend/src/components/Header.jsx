import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-blue-600 text-white shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Towing and Recovery</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/services" className="hover:text-gray-200 transition">Services</Link>
          <Link to="/pricing" className="hover:text-gray-200 transition">Pricing</Link>
          <Link to="/booking" className="hover:text-gray-200 transition">Book Now</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;


import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-4 bg-gray-800 text-white text-center"
    >
      <p>© {new Date().getFullYear()} Towing and Recovery. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;


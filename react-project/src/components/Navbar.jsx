import React from 'react';
import { Link } from 'react-router-dom';
import { Home, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Product Manager
          </motion.span>
        </Link>
        <div className="flex space-x-6">
          <motion.div
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            className="relative"
          >
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors flex items-center gap-2 text-lg"
            >
              <Home size={20} />
              Products
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            className="relative"
          >
            <Link
              to="/add"
              className="text-white hover:text-gray-200 transition-colors flex items-center gap-2 text-lg"
            >
              <PlusCircle size={20} />
              Add Product
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

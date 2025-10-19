import React from 'react';
import { motion } from 'framer-motion';
import { Tag, DollarSign, Text } from 'lucide-react';

const ProductCard = ({ product }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-6 border border-white/20"
      variants={cardVariants}
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Tag className="text-blue-500" size={24} />
        {product.name}
      </h3>
      <p className="text-gray-600 mb-4 flex items-start gap-2">
        <Text className="text-purple-500 mt-1" size={20} />
        <span className="flex-1">{product.description}</span>
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
        <span className="text-3xl font-extrabold text-blue-700 flex items-center gap-1">
          <DollarSign size={28} />
          {parseFloat(product.price).toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;

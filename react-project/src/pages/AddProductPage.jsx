import React from 'react';
import AddProductForm from '../components/AddProductForm';
import { motion } from 'framer-motion';

const AddProductPage = ({ onAddProduct }) => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Add New Product
        </motion.span>
      </h1>
      <AddProductForm onAddProduct={onAddProduct} />
    </div>
  );
};

export default AddProductPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, DollarSign, Text } from 'lucide-react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert('Please fill in all fields');
      return;
    }
    onAddProduct({ name, description, price: parseFloat(price) });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <motion.form
      className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-lg mx-auto border border-white/20"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Add New Product
      </h2>

      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
          Product Name
        </label>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            id="name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
            placeholder="e.g., Laptop, Smartphone"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 text-lg font-medium mb-2">
          Description
        </label>
        <div className="relative">
          <Text className="absolute left-3 top-4 text-gray-400" size={20} />
          <textarea
            id="description"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all text-lg resize-y min-h-[100px]"
            placeholder="Detailed description of the product..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="price" className="block text-gray-700 text-lg font-medium mb-2">
          Price
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="number"
            id="price"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
            placeholder="e.g., 999.99"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xl font-semibold"
        whileTap={{ scale: 0.95 }}
      >
        Add Product
      </motion.button>
    </motion.form>
  );
};

export default AddProductForm;

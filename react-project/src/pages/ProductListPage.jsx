import React from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { PackageX } from 'lucide-react';

const ProductListPage = ({ products }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Amazing Products
        </motion.span>
      </h1>

      {products.length === 0 ? (
        <motion.div
          className="text-center text-gray-600 text-xl mt-12 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PackageX size={64} className="mb-4 text-gray-400" />
          No products yet. Add some!
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProductListPage;

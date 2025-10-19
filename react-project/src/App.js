import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import toast from 'react-hot-toast';

function App() {
  const [products, setProducts] = useState(() => {
    // Load products from localStorage on initial render
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Save products to localStorage whenever the products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: Date.now() }; // Simple unique ID
    setProducts((prevProducts) => [...prevProducts, productWithId]);
    toast.success(`${newProduct.name} added successfully!`, {
      icon: '🚀',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListPage products={products} />} />
        <Route path="/add" element={<AddProductPage onAddProduct={handleAddProduct} />} />
      </Routes>
    </Layout>
  );
}

export default App;

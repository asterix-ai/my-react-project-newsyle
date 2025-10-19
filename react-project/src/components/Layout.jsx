import React from 'react';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {children}
      </main>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;

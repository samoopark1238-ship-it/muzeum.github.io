import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FilterScreen from './screens/FilterScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import WishlistScreen from './screens/WishlistScreen';
import MessageScreen from './screens/MessageScreen';
import ChatDetailScreen from './screens/ChatDetailScreen';
import ProfileScreen from './screens/ProfileScreen';

// Mock Data Provider
export const ProductsContext = React.createContext<any>(null);

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Always start at LoadingScreen on app load
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background text-text shadow-2xl relative overflow-hidden">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/filter" element={<FilterScreen />} />
        <Route path="/product/:id" element={<ProductDetailScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/messages" element={<MessageScreen />} />
        <Route path="/chat/:id" element={<ChatDetailScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
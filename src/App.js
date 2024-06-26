import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Stats from './components/Stats';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Products from './pages/Product';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Wishlist from './components/Wishlist';
import { CartProvider } from './features/CartContext';
import { AuthProvider } from './features/AuthContext';
import { WishlistProvider } from './features/WishlistContext';
import ProductManagement from './pages/ProductManagement';
import { ProductProvider } from './features/ProductContext'; // Import ProductProvider

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider> {/* Bọc ứng dụng trong ProductProvider */}
            <Router>
              <Header />
              <Stats />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/product-management" element={<ProductManagement />} />
              </Routes>
              <Footer />
            </Router>
          </ProductProvider> {/* Kết thúc ProductProvider */}
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

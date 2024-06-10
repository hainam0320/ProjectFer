import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  return (
      <div>
          <Navbar />
          <Header />
          <Stats />
          <Products />
          <Footer />
      </div>
  );
};

export default App;

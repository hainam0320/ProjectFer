import React, { createContext, useState } from 'react';

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Walk London Milano lap", price: 115, image: "logo123.png" },
        { id: 2, name: "Walk London Saan tos", price: 88, image: "logo123.png" },
        { id: 3, name: "Reebok x VB dual", price: 90, image: "logo123.png" },
        { id: 4, name: "Nike Air Zoom", price: 130, image: "logo123.png" },
        { id: 5, name: "Jack & Jones suede", price: 34.5, image: "logo123.png" },
        { id: 6, name: "Croc classic all", price: 59.99, image: "logo123.png" },
        { id: 7, name: "Vans Era Suede", price: 75, image: "logo123.png" },
        { id: 8, name: "PUMA Palermo Leather", price: 220, image: "logo123.png" },
        { id: 9, name: "PUMA Palermo Leather", price: 85, image: "logo123.png" }
    ]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: products.length + 1 }]);
      };
    
      const updateProduct = (updatedProduct) => {
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
      };
    
      const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
      };
    
      return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
          {children}
        </ProductContext.Provider>
      );
    };
    
    export { ProductContext, ProductProvider };
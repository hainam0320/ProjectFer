import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(total);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const setLoginStatus = (loggedIn) => {
        setIsLoggedIn(loggedIn);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem, total, isLoggedIn, setLoginStatus }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;

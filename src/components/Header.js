import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../features/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, total } = useContext(CartContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsCartOpen(true);
    };

    const handleMouseLeave = () => {
        setIsCartOpen(false);
    };

    return (
        <div className="full-width">
            <header>
                <div className="top-bar">
                    <div className="contact-info">
                        <span>Phone: 0123456789</span>
                        <span>Email: namanhstore@gmail.com</span>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/">NamAnh Store</Link>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <div
                                        className="nav-link cart-icon"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{ position: 'relative' }}
                                    >
                                        <Link to="/cart">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </Link>
                                        {isCartOpen && (
                                            <div className="cart-summary-popup">
                                                <h3>Summary</h3>
                                                <p>Total Items: {cart.length}</p>
                                                <p>Total Price: ${total.toFixed(2)}</p>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div style={{ padding: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '60vh' }} className="hero bg-base-200 bg-blend-overlay">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Clothing Shop Of The Year!</h1>
                        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
                            We have a quality clothing
                        </p>
                        <Link to="/product" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

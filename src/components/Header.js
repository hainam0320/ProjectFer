import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="hero bg-base-200 bg-blend-overlay">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Clothing Shop Of The Year!</h1>
                        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

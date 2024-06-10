import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the icon for the shopping cart

const Header = () => {
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex form-inline">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                        </ul>
                        
                    </div>
                </nav>
            </header>
            <div className="full-width">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./logo512.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Delicious Margherita Pizza</h5>
                                <p>Enjoy the classic taste of Margherita with fresh ingredients.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./logo512.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Delicious Margherita Pizza</h5>
                                <p>Enjoy the classic taste of Margherita with fresh ingredients.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./logo512.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Delicious Margherita Pizza</h5>
                                <p>Enjoy the classic taste of Margherita with fresh ingredients.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

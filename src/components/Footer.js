import React from 'react';
import "../styles/Style.css";

const Footer = () => {
    return (
        <footer className="footer text-center py-4">
            <div className="container">
                <p>Copyright © 2023 - All rights reserved by Kuzma Clothing & Shoes</p>
                <div>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

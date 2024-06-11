import React from "react";
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import "../styles/Style.css";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaSquareXTwitter className="text-6xl max-sm:text-4xl text-accent-content" />
                    <FaSquareFacebook className="text-6xl max-sm:text-4xl text-accent-content" />
                    <FaSquareInstagram className="text-6xl max-sm:text-4xl text-accent-content" />
                    <FaSquareYoutube className="text-6xl max-sm:text-4xl text-accent-content" />
                </div>
            </nav>
            <aside>
                <p className="text-2xl max-sm:text-sm text-accent-content">
                    Copyright © 2024 - All right reserved by NamAnhStore
                </p>
            </aside>
        </footer>
    );
};

export default Footer;

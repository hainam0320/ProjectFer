import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import "../styles/Style.css";
import { faCartPlus, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartContext from '../features/CartContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../features/AuthContext';
import WishlistContext from '../features/WishlistContext';
import Swal from 'sweetalert2';

const products = [
    { id: 1, name: "Walk London Milano lap", price: 115, image: "logo123.png" },
    { id: 2, name: "Walk London Saan tos", price: 88, image: "logo123.png" },
    { id: 3, name: "Reebok x VB dual", price: 90, image: "logo123.png" },
    { id: 4, name: "Nike Air Zoom", price: 130, image: "logo123.png" },
    { id: 5, name: "Jack & Jones suede", price: 34.5, image: "logo123.png" },
    { id: 6, name: "Croc classic all", price: 59.99, image: "logo123.png" },
    { id: 7, name: "Vans Era Suede", price: 75, image: "logo123.png" },
    { id: 8, name: "PUMA Palermo Leather", price: 220, image: "logo123.png" },
    { id: 9, name: "PUMA Palermo Leather", price: 85, image: "logo123.png" }
];

const Products = () => {
    const { addToCart } = useContext(CartContext);
    const { isLoggedIn } = useContext(AuthContext);
    const { addToWishlist } = useContext(WishlistContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const productsPerPage = 8;
    const productSectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (productSectionRef.current) {
            productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
        ((priceRange === 'all') ||
         (priceRange === '1-100' && product.price >= 1 && product.price <= 100) ||
         (priceRange === '110-200' && product.price >= 110 && product.price <= 200) ||
         (priceRange === '210-500' && product.price >= 210 && product.price <= 500))
    );

    const offset = currentPage * productsPerPage;
    const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const handleFilterChange = (event) => {
        setPriceRange(event.target.value);
        setCurrentPage(0);
    };

    const handleAddToCart = (product) => {
        if (isLoggedIn) {
            addToCart(product);
            Swal.fire({
                icon: 'success',
                title: 'Added to Cart',
                text: `${product.name} has been added to your cart!`,
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Not Logged In',
                text: 'Please log in to add items to the cart',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login');
            });
        }
    };

    const handleAddToWishlist = (product) => {
        if (isLoggedIn) {
            addToWishlist(product);
            Swal.fire({
                icon: 'success',
                title: 'Added to Wishlist',
                text: `${product.name} has been added to your wishlist!`,
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Not Logged In',
                text: 'Please log in to add items to the wishlist',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login');
            });
        }
    };

    return (
        <section ref={productSectionRef} className="container trending-products">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="search-filter-container">
                <div className="filter-container">
                    <select className="filter-select" onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="1-100">1 - 100$</option>
                        <option value="110-200">110 - 200$</option>
                        <option value="210-500">210 - 500$</option>
                    </select>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search products..."
                        className="search-input"
                    />
                    <button className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            {currentProducts.length === 0 && (
                <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>Not found any products</p>
            )}
            <div className="row">
                {currentProducts.map(product => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12 product">
                        <img src={product.image} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p style={{ color: 'red' }}>{`$${product.price}`}</p>
                        <div className="button-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button
                                style={{ backgroundColor: '#292929', borderColor: 'black', marginRight: '5px' }}
                                className="btn btn-primary"
                                onClick={() => handleAddToCart(product)}
                            >
                                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                            </button>
                            <button
                                style={{ backgroundColor: '#e74c3c', borderColor: 'black' }}
                                className="btn btn-secondary"
                                onClick={() => handleAddToWishlist(product)}
                            >
                                <FontAwesomeIcon icon={faHeart} /> Add to wishlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </section>
    );
};

export default Products;

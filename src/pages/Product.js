import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import "../styles/Style.css";
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const products = [
    { id: 1, name: "Walk London Milano lap", price: 115, image: "logo192.png" },
    { id: 2, name: "Walk London Saan tos", price: 88, image: "logo192.png" },
    { id: 3, name: "Reebok x VB dual", price: 90, image: "logo192.png" },
    { id: 4, name: "Nike Air Zoom", price: 130, image: "logo192.png" },
    { id: 5, name: "Jack & Jones suede", price: 34.5, image: "logo192.png" },
    { id: 6, name: "Croc classic all", price: 59.99, image: "logo192.png" },
    { id: 7, name: "Vans Era Suede", price: 75, image: "logo192.png" },
    { id: 8, name: "PUMA Palermo Leather", price: 85, image: "logo192.png" },
    { id: 9, name: "PUMA Palermo Leather", price: 85, image: "logo192.png" }
];

const Products = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const productsPerPage = 8;

    // Filter products based on search term and price range
    const filteredProducts = products.filter(product =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
        ((priceRange === 'all') ||
         (priceRange === '0-100' && product.price >= 0 && product.price <= 100) ||
         (priceRange === '100-200' && product.price > 100 && product.price <= 200))
    );

    // Calculate current products to display
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

    return (
        <section className="container trending-products">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="search-filter-container">
                <div className="filter-container">
                    {/* Thêm phần tử filter ở đây */}
                    <select className="filter-select" onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="0-100">0 - 100$</option>
                        <option value="100-200">100 - 200$</option>
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
                    <span className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>
            <div className="row">
                {currentProducts.map(product => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12 product">
                        <img src={product.image} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p>{`$${product.price}`}</p>
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                        </button>
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

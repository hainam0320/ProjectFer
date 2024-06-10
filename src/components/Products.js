import React from 'react';
import "../styles/Style.css";

const products = [
    { id: 1, name: "Walk London Milano lap", price: "$115", image: "path/to/product1.jpg" },
    { id: 2, name: "Walk London Saan tos", price: "$88", image: "path/to/product2.jpg" },
    { id: 3, name: "Reebok x VB dual", price: "$90", image: "path/to/product3.jpg" },
    { id: 4, name: "Nike Air Zoom", price: "$130", image: "path/to/product4.jpg" },
    { id: 5, name: "Jack & Jones suede", price: "$34.5", image: "path/to/product5.jpg" },
    { id: 6, name: "Croc classic all", price: "$59.99", image: "path/to/product6.jpg" },
    { id: 7, name: "Vans Era Suede", price: "$75", image: "path/to/product7.jpg" },
    { id: 8, name: "PUMA Palermo Leather", price: "$85", image: "path/to/product8.jpg" }
];

const Products = () => {
    return (
        <section className="container trending-products">
            <h2 className="text-center mb-4">Trending Products</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-3 product">
                        <img src={product.image} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Style.css";

const products = [
    { id: 1, name: "Walk London Milano lap", price: "$115", image: "logo123.png" },
    { id: 2, name: "Walk London Saan tos", price: "$88", image: "logo123.png" },
    { id: 3, name: "Reebok x VB dual", price: "$90", image: "logo123.png" },
    { id: 4, name: "Nike Air Zoom", price: "$130", image: "logo123.png" },
    { id: 5, name: "Jack & Jones suede", price: "$34.5", image: "logo123.png" },
    { id: 6, name: "Croc classic all", price: "$59.99", image: "logo123.png" },
    { id: 7, name: "Vans Era Suede", price: "$75", image: "logo123.png" },
    { id: 8, name: "PUMA Palermo Leather", price: "$85", image: "logo123.png" }
];

const Home = () => {
    const homeRef = useRef(null);
    useEffect(() => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <section ref={homeRef} className="container trending-products">
            <h2 className="text-center mb-4">Trending Products</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12 product">
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p style={{color:'red'}} className="card-text"> {product.price}</p>
                                <Link style={{backgroundColor:'#292929'}} to={`/product/${product.id}`} className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;

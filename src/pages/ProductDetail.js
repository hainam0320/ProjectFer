import React, { useState } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "../styles/Style.css";

const ProductDetail = () => {
  const product = {
    id: 1,
    title: "Walk London Milano lace up boots in black leather",
    price: "$115",
    description: "This is a product description.",
    image: "logo192.png",
    sizes: ["37", "38", "39"],
  };

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("38");

  return (
    <div className="product-detail-container">
      <div className="row">
        <div className="col-md-6 product-detail-image">
        <img src="/logo192.png" alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6 product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-price">Price: {product.price}</p>
          <p className="product-detail-description">Description: {product.description}</p>
          <div className="product-detail-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <div className="product-detail-size">
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {product.sizes.map((sizeOption) => (
                <option key={sizeOption} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>
          <div className="product-detail-actions">
            <button className="btn btn-primary product-detail-btn">
              <FaCartPlus className="me-2" />
              Add to Cart
            </button>
            <button className="btn btn-outline-danger product-detail-btn">
              <FaHeart className="me-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

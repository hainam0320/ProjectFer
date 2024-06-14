import React, { useState, useContext } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "../styles/Style.css";
import { useNavigate } from "react-router-dom";
import WishlistContext from "../features/WishlistContext";
import AuthContext from '../features/AuthContext';
import CartContext from '../features/CartContext';
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const product = {
    id: 1,
    name: "Walk London Milano",
    price: "115",
    description: "This is a product description.",
    image: "logo123.png",
    sizes: ["37", "38", "39"],
  };

  const { addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();  
  const { isLoggedIn } = useContext(AuthContext);

  const handleBackToProducts = () => {
    navigate('/product');  
  };

  const handleAddToWishlist = () => {
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

  const handleAddToCart = () => {
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

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("38");

  return (
    <div className="product-detail-container">
      <section style={{border: '1px solid #ccc', borderRadius: '10px', paddingLeft: '20px',paddingRight: '20px',paddingBottom: '30px',paddingTop:'30px'}}>
        <div className="row">
          <div className="col-md-6 product-detail-image">
            <img style={{ width: '100%', height: '80vh', padding: '10px 50px' }} src="/logo123.png" alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6 product-detail-info">
            <h2 className="product-detail-title">{product.name}</h2>
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
              <button 
                className="btn btn-primary product-detail-btn"
                onClick={handleAddToCart}
              >
                <FaCartPlus className="me-2" />
                Add to Cart
              </button>
              <button 
                className="btn btn-outline-danger product-detail-btn"
                onClick={handleAddToWishlist} 
              >
                <FaHeart className="me-2" />
                Add to Wishlist
              </button>
            </div>
            <br/>
            <button className="btn btn-primary product-detail-btn" onClick={handleBackToProducts}>Back to Products</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

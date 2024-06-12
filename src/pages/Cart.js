import React, { useState } from 'react';
import "../styles/Style.css";
import { Link } from 'react-router-dom';
const Cart = () => {
    // Dummy cart items data for demonstration
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Cotton T-shirt', price: 44.00, quantity: 1, image: 'logo123.png' },
        { id: 2, name: 'Cotton T-shirt', price: 44.00, quantity: 1, image: 'logo123.png' },
        { id: 3, name: 'Cotton T-shirt', price: 44.00, quantity: 1, image: 'logo123.png' },
    ]);

    const incrementQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        );
    };

    const decrementQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const calculateTotal = (cartItems) => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{cartItems.length} items</div>
                        </div>
                    </div>
                    {cartItems.map(item => (
                        <div key={item.id} className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src={item.image} alt={item.name} /></div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">{item.name}</div>
                                </div>
                                <div className="col">
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span className="border">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                                <div className="col">$ {(item.price * item.quantity).toFixed(2)} <span className="close" onClick={() => removeItem(item.id)}>&#10005;</span></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>ITEMS {cartItems.length}</div>
                        <div className="col text-right">$ {calculateTotal(cartItems)}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- $5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ {(parseFloat(calculateTotal(cartItems)) + 5).toFixed(2)}</div>
                    </div>
                    <Link to='/checkout'>
                        <button className="btn">CHECKOUT</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Cart;
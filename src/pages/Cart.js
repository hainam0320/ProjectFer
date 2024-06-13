import React, { useContext, useRef, useEffect } from 'react';
import "../styles/Style.css";
import { Link } from 'react-router-dom';
import CartContext from '../features/CartContext';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, removeItem, total } = useContext(CartContext);
    const cartRef = useRef(null);

    useEffect(() => {
        if (cartRef.current) {
            cartRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div ref={cartRef} className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{cart.length} items</div>
                        </div>
                    </div>
                    {cart.map(item => (
                        <div key={item.id} className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src={item.image} alt={item.name} /></div>
                                <div className="col">
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
                        <div className="col" style={{ paddingLeft: 0 }}>ITEMS {cart.length}</div>
                        <div className="col text-right">$ {total.toFixed(2)}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select>
                            <option className="text-muted">Hỏa tốc - $5.00</option>
                            </select>
                        <p>DISCOUNT CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ {(parseFloat(total) + 5).toFixed(2)}</div>
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

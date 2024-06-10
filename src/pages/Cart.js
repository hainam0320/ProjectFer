import React from 'react';

const Cart = () => {
    // Dummy cart items data for demonstration
    const cartItems = [
        { id: 1, name: 'Product 1', price: 10, quantity: 2 },
        { id: 2, name: 'Product 2', price: 15, quantity: 1 },
        { id: 3, name: 'Product 3', price: 20, quantity: 3 }
    ];

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price * item.quantity}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                                <button className="btn btn-sm btn-outline-danger">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end">
                <h4>Total: $ {calculateTotal(cartItems)}</h4>
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>
    );
};

// Function to calculate the total price of items in the cart
const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
};

export default Cart;

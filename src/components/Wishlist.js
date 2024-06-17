import React, { useContext } from 'react';
import WishlistContext from '../features/WishlistContext';
import "../styles/Style.css";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <section className="container wishlist">
            <h2 className="text-center mb-4">My Wishlist</h2>
            {wishlist.length === 0 && (
                <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>Your wishlist is empty</p>
            )}
            <div className="row" style={{textAlign: 'center'}}>
                {wishlist.map(product => (
                    <div key={product.id} className="col-md-3 col-sm-6 col-12 product">
                        <img src={product.image} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p style={{ color: 'red' }}>{`$${product.price}`}</p>
                        <button
                            style={{ backgroundColor: '#e74c3c', borderColor: 'black' }}
                            className="btn btn-secondary"
                            onClick={() => removeFromWishlist(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Wishlist;

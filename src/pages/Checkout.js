import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Style.css'; // Import CSS styles
import CartContext from '../features/CartContext';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        note: '',
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const { cart, total } = useContext(CartContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Họ không được bỏ trống';
        if (!formData.lastName) newErrors.lastName = 'Tên không được bỏ trống';
        if (!formData.email) newErrors.email = 'Email không được bỏ trống';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Số điện thoại không được bỏ trống';
        if (!formData.address) newErrors.address = 'Địa chỉ không được bỏ trống';
        if (!formData.city) newErrors.city = 'Thành phố không được bỏ trống';
        return newErrors;
    };

    const handleOrderClick = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                navigate('/');
            }, 2000);
        }
    };

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8">
                    <form className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter last name"
                                required
                            />
                            {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter first name"
                                required
                            />
                            {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                                required
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Enter phone number"
                                required
                            />
                            {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter address"
                                required
                            />
                            {errors.address && <span className="text-danger">{errors.address}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <select
                                className="form-control"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">-- Select city --</option>
                                <option value="Ha Noi">Ha Noi</option>
                                <option value="Ho Chi Minh">Ho Chi Minh</option>
                                <option value="Da Nang">Da Nang</option>
                            </select>
                            {errors.city && <span className="text-danger">{errors.city}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="note">Note</label>
                            <textarea
                                className="form-control"
                                id="note"
                                name="note"
                                value={formData.note}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Enter note"
                            ></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleOrderClick}>
                            Order
                        </button>
                        {showAlert && (
                            <div className="alert alert-success mt-3" role="alert">
                                Order successfully!
                            </div>
                        )}
                    </form>
                </div>
                <div className="col-md-4 summary" style={{maxHeight: '200px'}}>
                    <div className="summary-content">
                        <h5>Summary</h5>
                        <hr />
                        <div className="row">
                            <div className="col">ITEMS</div>
                            <div className="col text-right">{cart.length}</div>
                        </div>
                        <div className="row">
                            <div className="col">SHIPPING</div>
                            <div className="col text-right">
                                <select disabled>
                                    <option>Hỏa tốc - 5.00$</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">${(parseFloat(total) + 5).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back-to-cart">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/cart')}>
                    Back to Cart
                </button>
            </div>
        </div>
    );
};

export default Checkout;

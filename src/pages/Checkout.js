import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Style.css";

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        note: ''
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

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
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ flex: '1', margin: '10px' }}>
                    <div>
                        <form style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Last Name</label>
                                <input name="firstName" value={formData.firstName} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>First Name</label>
                                <input name="lastName" value={formData.lastName} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Email</label>
                                <input name="email" value={formData.email} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Phone</label>
                                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Address</label>
                                <input name="address" value={formData.address} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>City</label>
                                <select name="city" value={formData.city} onChange={handleInputChange} style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} className='dropdown-list'>
                                    <option value="">--Select city--</option>
                                    <option value="Ha Noi">Ha Noi</option>
                                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                                    <option value="Da Nang">Da Nang</option>
                                </select>
                                {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Note</label>
                                <textarea name="note" value={formData.note} onChange={handleInputChange} style={{ height: '150px', borderRadius: '5px', width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                            </div>
                            <div style={{ flex: '1 1 100%', display: 'flex', justifyContent: 'center', paddingRight: '90px' }}>
                                <button type="button" onClick={handleOrderClick} style={{ height: '50px', borderRadius: '5px', padding: '0 20px', color: 'white', backgroundColor: '#292929' }}>
                                    Order
                                </button>
                            </div>
                            {showAlert && (
                                <div className="alert alert-success" role="alert" id="popupAlert">
                                    Order successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <div className="col-md-4 summary" style={{ flex: '0 0 30%', maxWidth: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="col" style={{ paddingLeft: '0px' }}>ITEMS</div>
                        <div className="col text-right">12</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Express - 5.00$</option></select>
                        <p>DISCOUNT CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button type="button" onClick={() => navigate('/cart')} style={{ height: '50px', borderRadius: '5px', padding: '0 20px', color: 'white', backgroundColor: '#292929' }}>
                    Back to Cart
                </button>
            </div>
        </div>
    );
};

export default Checkout;

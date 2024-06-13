import React, { useState } from 'react';
import "../styles/Style.css";
import { Form, Link } from 'react-router-dom';
const Checkout = () => {
    // Dummy cart items data for demonstration

    


    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ flex: '1', margin: '10px' }}>
                    <div>
                        <form style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>First Name</label>
                                <input style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }}></input>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Last Name</label>
                                <input style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }}></input>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Email</label>
                                <input style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }}></input>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Phone Number</label>
                                <input style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }}></input>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Address</label>
                                <input style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }}></input>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>City</label>
                                <select style={{ height: '50px', borderRadius: '5px', width: '80%', border: '1px solid rgba(0, 0, 0, 0.2)' }} className='dropdown-list'>
                                    <option>Viet Nam</option>
                                    <option>America</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div style={{ flex: '1 1 45%', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                <label>Note</label>
                                <textarea placeholder='Note messages to us' style={{ height: '150px', borderRadius: '5px', width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                            </div>
                            <div style={{ flex: '1 1 100%', display: 'flex', justifyContent: 'center', paddingRight: '90px' }}>
                                <Link to='/'>
                                    <button  style={{ height: '50px', borderRadius: '5px', padding: '0 20px', color: 'white', backgroundColor: '#292929' }}>Order</button>
                                </Link>
                            </div>
                            <div class="alert alert-success" role="alert" id="popupAlert" style={{ display: 'none' }} >
                                A simple success alert—check it out!
                            </div>
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
                        <select><option className="text-muted">Standard-Delivery- $5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    

                </div>
            </div>
        </div>

    );
};
export default Checkout;
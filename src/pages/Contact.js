import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div  className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                
                <div className="isolate px-6 lg:px-8">
                    <section style={{ border: '1px solid #ccc', borderRadius: '10px', paddingLeft: '20px',paddingRight: '20px',paddingBottom: '30px',paddingTop:'30px' }}>
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <Form style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '600px' }}>
                                <div style={{ flex: '1 1 45%', margin: '10px' }}>
                                    <div>
                                        First Name
                                    </div>
                                    <textarea style={{ width: '100%', height: '50px', borderRadius: '5px' }} />
                                </div>
                                <div style={{ flex: '1 1 45%', margin: '10px' }}>
                                    <div>
                                        Last Name
                                    </div>
                                    <textarea style={{ width: '100%', height: '50px', borderRadius: '5px' }} />
                                </div>
                                <div style={{ flex: '1 1 45%', margin: '10px' }}>
                                    <div>
                                        Email
                                    </div>
                                    <textarea style={{ width: '100%', height: '50px', borderRadius: '5px' }} />
                                </div>
                                <div style={{ flex: '1 1 45%', margin: '10px' }}>
                                    <div>
                                        Phone Number
                                    </div>
                                    <textarea style={{ width: '100%', height: '50px', borderRadius: '5px' }} />
                                </div>
                                <div style={{ flex: '1 1 100%', margin: '10px' }}>
                                    <div>
                                        Message
                                    </div>
                                    <textarea placeholder='Send we message' style={{ width: '100%', height: '150px', borderRadius: '5px' }} />
                                </div>
                            </div>
                        </Form>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/">
                                <button style={{ backgroundColor: 'Black', padding: '10px 30px' }} className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Submit</button>
                            </Link>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default Contact;

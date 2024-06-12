import React, { useState, useRef, useEffect } from 'react';
import "../styles/Style.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerRef = useRef(null);
    useEffect(() => {
        if (registerRef.current) {
            registerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle registration logic here
        console.log('Register submitted with:', { name, email, password });
        if (registerRef.current) {
            registerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={registerRef} className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn register-btn">Register</button>
            </form>
        </div>
    );
};

export default Register;

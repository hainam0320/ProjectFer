import React, { useState, useRef, useEffect } from 'react';
import '../styles/Style.css'; // Import your main styles

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginRef = useRef(null);
    useEffect(() => {
        if (loginRef.current) {
            loginRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Login submitted with:', { email, password });
        if (loginRef.current) {
            loginRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={loginRef} className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn login-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { login } from '../services/api';
import '../styles/login.css'; // Changed from Modules.css to login.css

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login({ email, password });
            const data = response.data || response;

            // Failsafe: Keeping your role inference logic
            const userWithRole = {
                ...data,
                role: data.role || (email.includes('teacher') ? 'teacher' : 'student')
            };

            localStorage.setItem('user', JSON.stringify(userWithRole));
            if (data.token) localStorage.setItem('token', data.token);

            // Hard redirect logic remains untouched
            window.location.href = userWithRole.role === 'teacher' 
                ? '/teacher-dashboard' 
                : '/student-dashboard';

        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid credentials.");
        }
    };

    return (
    <div className="login-container">
        <div className="login-card"> 
            <form onSubmit={handleLogin}>
                <div style={{ textAlign: 'center' }}>
                    <h2 className="lavender-text">Scholar-X</h2>
                    <p className="login-subtitle">Please enter your credentials to continue</p>
                </div>
                
                {error && <p style={{ color: '#e74c3c', textAlign: 'center', fontSize: '14px', marginBottom: '15px' }}>{error}</p>}
                
                <input 
                    type="email" 
                    className="login-input" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />

                <input 
                    type="password" 
                    className="login-input" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit" className="action-button">
                    Sign In
                </button>
            </form>
        </div>
    </div>
);
};

export default Login;
import React, { useState } from 'react';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      handleLogin({ token: data.token, role: data.role, name: data.name });
      
      // Navigate based on backend role[span_23](end_span)[span_24](end_span)[span_25](end_span)
      if (data.role === 'admin') navigate('/admin');
      else if (data.role === 'teacher') navigate('/teacher-dashboard');
      else navigate('/student-dashboard');
    } catch (err) {
      alert("Login Failed: Check Credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="lavender-text">Scholar-X Login</h2>
        <input type="email" placeholder="Email" required 
               onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Password" required 
               onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button type="submit" className="btn-lavender">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
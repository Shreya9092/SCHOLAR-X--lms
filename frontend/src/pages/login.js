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
        <div className="login-container">
            <div className="login-box">
                <h2>Scholar-X Login</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
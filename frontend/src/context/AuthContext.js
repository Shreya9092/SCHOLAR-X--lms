import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin } from '../services/api'; // This is the API call we fixed earlier

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    // THIS IS THE MISSING FUNCTION
    const login = async (email, password) => {
        const data = await apiLogin({ email, password });
        if (data.user) {
            setUser(data.user); // This updates the state so ProtectedRoute works!
            localStorage.setItem('user', JSON.stringify(data.user));
            return data.user;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
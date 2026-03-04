import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  // Wait for AuthContext to check localStorage/API
  if (loading) {
    return <div className="loading-screen">Loading Scholar-X...</div>;
  }

  // If no user is found, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If a specific role is required (e.g., admin) and user doesn't have it
  if (role && user.role !== role) {
    return <Navigate to="/" />; // Send them to their default dashboard
  }

  return children;
};

export default ProtectedRoute;
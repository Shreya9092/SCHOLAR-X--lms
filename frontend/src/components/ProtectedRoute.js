import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  // 1. Check localStorage IMMEDIATELY (Synchronous check)
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  // 2. If the Context is still loading, but we have data in storage, 
  // let the user stay on the page instead of redirecting.
  if (loading && !storedUser) {
    return <div className="loading-screen">Loading Scholar-X...</div>;
  }

  // 3. Absolute check: If no user in state AND no user in storage, redirect.
  if (!user && !storedUser) {
    return <Navigate to="/login" replace />;
  }

  // 4. Role validation (Check both state and storage)
  const currentUser = user || storedUser;
  if (role && currentUser.role?.toLowerCase() !== role.toLowerCase()) {
    const defaultPath = currentUser.role?.toLowerCase() === 'teacher' 
      ? '/teacher-dashboard' 
      : '/student-dashboard';
    return <Navigate to={defaultPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
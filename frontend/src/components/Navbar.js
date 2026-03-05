import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Admin.css'; 

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header style={{
      height: '70px',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      borderBottom: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      position: 'sticky',
      top: 0,
      zIndex: 99
    }}>
      {/* Left Side: Page Context */}
      <div className="nav-left">
        <h2 style={{ 
          margin: 0, 
          fontSize: '18px', 
          color: '#9b59b6', 
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          DASHBOARD <span style={{ color: '#bdc3c7', fontWeight: '300', margin: '0 10px' }}>|</span> 
          <span style={{ color: '#2c3e50', fontWeight: '500' }}>Overview</span>
        </h2>
      </div>

      {/* Right Side: User Profile */}
      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#2c3e50' }}>
            {user?.name || 'Instructor'}
          </p>
          <p style={{ margin: 0, fontSize: '11px', color: '#9b59b6', fontWeight: '700', textTransform: 'uppercase' }}>
            {user?.role || 'Teacher'}
          </p>
        </div>
        
        {/* Professional Circle Avatar */}
        <div style={{ 
            width: '42px', 
            height: '42px', 
            background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)', 
            borderRadius: '12px', /* Modern squircle shape */
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 4px 10px rgba(155, 89, 182, 0.3)'
        }}>
          {user?.name ? user.name.charAt(0).toUpperCase() : 'T'}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
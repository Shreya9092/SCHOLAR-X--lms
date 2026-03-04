import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="lms-navbar" style={{
      height: '60px',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px',
      borderBottom: '1px solid var(--lavender-100)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="nav-left">
        <span style={{ color: 'var(--lavender-600)', fontWeight: '700', fontSize: '1.2rem' }}>
          Dashboard Overview
        </span>
      </div>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="user-info" style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.9rem' }}>
            {user?.name || 'Guest User'}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {user?.email}
          </div>
        </div>
        <div className="avatar" style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          background: 'var(--lavender-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--lavender-700)',
          fontWeight: 'bold'
        }}>
          {user?.name?.charAt(0) || 'U'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
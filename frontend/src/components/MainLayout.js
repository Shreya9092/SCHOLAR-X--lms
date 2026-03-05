import React from 'react';
import Sidebar from './sidebar';

const MainLayout = ({ children }) => {
  // 1. Retrieve the user object from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));
  
  // 2. Logic to get the first letter of the email dynamically
  // We use optional chaining (?.) and charAt(0) to safely get the initial
  const userInitial = storedUser?.email 
    ? storedUser.email.charAt(0).toUpperCase() 
    : 'U'; // 'U' stands for generic User if email is missing

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: '#F0EFFF' }}>
      {/* SIDEBAR - Remains fixed on the left */}
      <div style={{ width: '260px', flexShrink: 0 }}>
        <Sidebar />
      </div>
      
      {/* RIGHT SIDE: Header + Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {/* TOP HEADER: Houses the dynamic profile icon */}
        <header style={{ 
          height: '80px', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          padding: '0 40px',
          backgroundColor: 'transparent' 
        }}>
          <div 
            title={storedUser?.email || "User Profile"} // Shows full email on hover
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: '#9b59b6', // Lavender Theme
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(155, 89, 182, 0.15)',
              border: '2px solid white'
            }}
          >
            {userInitial}
          </div>
        </header>

        {/* MAIN BOX: Area for Attendance/Materials content */}
        <main style={{ 
          flex: 1, 
          padding: '0 30px 40px 30px', 
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center' 
        }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '1000px', 
            backgroundColor: '#ffffff', 
            borderRadius: '30px', 
            padding: '40px',
            boxShadow: '0 10px 30px rgba(155, 89, 182, 0.1)'
          }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
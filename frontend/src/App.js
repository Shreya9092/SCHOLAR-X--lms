import React, { useState } from 'react';
import './App.css';

function App() {
  // 'screen' can be: 'login', 'student', or 'teacher'
  const [screen, setScreen] = useState('login'); 
  const [user, setUser] = useState({ id: '', name: '', role: 'student', subject: 'Maths' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real project, we'd check the backend here. 
    // For now, it redirects based on the role selected.
    if (user.role === 'teacher') {
      setScreen('teacher');
    } else {
      setScreen('student');
    }
  };

  // --- 1. LOGIN SCREEN ---
  if (screen === 'login') {
    return (
      <div className="login-page">
        <div className="card">
          <h1>LMS Portal</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="User ID" required onChange={(e) => setUser({...user, id: e.target.value})} />
            <input type="text" placeholder="Full Name" required onChange={(e) => setUser({...user, name: e.target.value})} />
            
            <label>I am a:</label>
            <select onChange={(e) => setUser({...user, role: e.target.value})}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            <label>Subject:</label>
            <select onChange={(e) => setUser({...user, subject: e.target.value})}>
              <option value="Maths">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
            </select>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // --- 2. DASHBOARD SCREEN (For both Student & Teacher) ---
  return (
    <div className="dashboard">
      <nav className="nav">
        <div className="logo">LMS Cloud</div>
        <div className="user-profile">
          <span>{user.name} ({user.role})</span>
          <button onClick={() => setScreen('login')} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="main-layout">
        <aside className="sidebar">
          <ul>
            <li className="active">🏠 Dashboard</li>
            <li>📚 My {user.subject} Course</li>
            {user.role === 'teacher' && <li>📝 Grade Assignments</li>}
            <li>⚙️ Settings</li>
          </ul>
        </aside>

        <main className="content-area">
          <h2>Welcome to {user.subject} Class</h2>
          <p>Role: {user.role === 'teacher' ? 'Instructor View' : 'Student View'}</p>
          
          <div className="grid">
            <div className="box">
              <h3>Module 1</h3>
              <p>Introduction to {user.subject}</p>
              <button className="small-btn">View</button>
            </div>
            <div className="box">
              <h3>Module 2</h3>
              <p>Advanced Concepts</p>
              <button className="small-btn">View</button>
            </div>
            <div className="box">
              <h3>Resources</h3>
              <p>Download Materials</p>
              <button className="small-btn">Open</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
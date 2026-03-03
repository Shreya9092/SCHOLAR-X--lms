import React, { useState } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('login'); 
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState({ id: '', name: '', role: 'student', subject: 'Maths' });

  const handleLogin = (e) => {
    e.preventDefault();
    setScreen('dashboard');
  };

  if (screen === 'login') {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Scholar-X</h1>
            <p>Learning Management System</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>User ID</label>
              <input type="text" placeholder="Enter ID" required onChange={(e) => setUser({...user, id: e.target.value})} />
            </div>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter Name" required onChange={(e) => setUser({...user, name: e.target.value})} />
            </div>
            <div className="row">
              <div className="input-group">
                <label>Role</label>
                <select onChange={(e) => setUser({...user, role: e.target.value})}>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              <div className="input-group">
                <label>Subject</label>
                <select onChange={(e) => setUser({...user, subject: e.target.value})}>
                  <option value="Maths">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="app-sidebar">
        <div className="sidebar-brand">Scholar-X</div>
        <ul className="sidebar-nav">
          <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            <span className="icon">🏠</span> Dashboard
          </li>
          <li className={activeTab === 'course' ? 'active' : ''} onClick={() => setActiveTab('course')}>
            <span className="icon">📚</span> My {user.subject} Course
          </li>
          <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            <span className="icon">⚙️</span> Settings
          </li>
        </ul>
        <div className="sidebar-footer">
          <button onClick={() => setScreen('login')} className="logout-btn">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="app-main">
        <header className="main-header">
          <div className="header-info">
            <h2>Welcome back, {user.name}</h2>
            <p>{user.role.toUpperCase()} | {user.subject} Department</p>
          </div>
          <div className="profile-pic">{user.name.charAt(0)}</div>
        </header>

        <div className="content-inner">
          {activeTab === 'settings' ? (
            <div className="section-card">
              <h3>Account Settings</h3>
              <p>Manage your profile and preferences.</p>
              <div className="settings-list">
                <div className="setting-item"><span>Email Notifications</span> <input type="checkbox" defaultChecked /></div>
                <div className="setting-item"><span>Dark Mode</span> <input type="checkbox" /></div>
                <button className="primary-btn">Update Profile</button>
              </div>
            </div>
          ) : (
            <>
              <div className="stats-row">
                <div className="stat-card"><h4>Attendance</h4><p>94%</p></div>
                <div className="stat-card"><h4>Assignments</h4><p>12 Pending</p></div>
                <div className="stat-card"><h4>Current Grade</h4><p>A-</p></div>
              </div>

              <h3 className="section-title">Course Modules</h3>
              <div className="module-grid">
                <div className="module-card">
                  <div className="module-img">M1</div>
                  <h3>Module 1: Foundations</h3>
                  <p>Core concepts of {user.subject}.</p>
                  <button className="module-btn">Continue</button>
                </div>
                <div className="module-card">
                  <div className="module-img highlight">M2</div>
                  <h3>Module 2: Intermediate</h3>
                  <p>Advanced theories and practice.</p>
                  <button className="module-btn">Start</button>
                </div>
                <div className="module-card locked">
                  <div className="module-img">M3</div>
                  <h3>Module 3: Final Project</h3>
                  <p>Review and final assessment.</p>
                  <button className="module-btn disabled">Locked</button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
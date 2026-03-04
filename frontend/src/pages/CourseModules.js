import React from 'react';
import '../styles/Modules.css';

const modules = [
  { id: 1, title: 'Module 1: Introduction to LMS', status: 'Completed', progress: 100 },
  { id: 2, title: 'Module 2: Advanced React Patterns', status: 'In Progress', progress: 45 },
  { id: 3, title: 'Module 3: Backend Integration', status: 'Locked', progress: 0 },
];

const CourseModules = () => {
  return (
    <div className="modules-container">
      <header className="module-header">
        <h1>My Course Content</h1>
        <p>Track your progress and access your study materials.</p>
      </header>

      <div className="module-list">
        {modules.map((mod) => (
          <div key={mod.id} className={`module-card ${mod.status.toLowerCase().replace(' ', '-')}`}>
            <div className="module-info">
              <span className="module-number">0{mod.id}</span>
              <h3>{mod.title}</h3>
              <span className={`status-badge ${mod.status.toLowerCase().replace(' ', '-')}`}>
                {mod.status}
              </span>
            </div>
            
            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${mod.progress}%` }}></div>
              </div>
              <span className="progress-text">{mod.progress}% Done</span>
            </div>

            <button className="enter-btn" disabled={mod.status === 'Locked'}>
              {mod.status === 'Locked' ? '🔒 Locked' : 'Continue Learning'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/login';
import TeacherDashboard from './pages/attendance';
import StudentDashboard from './pages/studentdashboard';
import MainLayout from './components/MainLayout';
import TeacherMaterials from './pages/TeacherMaterials';
import StudentMaterials from './pages/StudentMaterials';
// Import your settings page if you have created it, otherwise use a placeholder
// import StudentSettings from './pages/StudentSettings'; 

// Keep these imports clean
import './styles/Modules.css';
import './index.css';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const activeUser = user || savedUser;

  if (loading) return <div>Loading...</div>;

  if (!activeUser) {
    return <Navigate to="/login" replace />;
  }

  // Consistent role check
  if (role && activeUser.role?.toLowerCase() !== role.toLowerCase()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Teacher Routes - Wrapped in MainLayout */}
          <Route path="/teacher-dashboard" element={
            <ProtectedRoute role="teacher">
              <MainLayout><TeacherDashboard /></MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/teacher/attendance" element={
            <ProtectedRoute role="teacher">
              <MainLayout><TeacherDashboard /></MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/teacher/materials" element={
            <ProtectedRoute role="teacher">
              <MainLayout><TeacherMaterials /></MainLayout>
            </ProtectedRoute>
          } />

          {/* Student Routes - Includes Settings route from Postman docs */}
          <Route path="/student-dashboard" element={
            <ProtectedRoute role="student">
              <MainLayout><StudentDashboard /></MainLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/student/materials" element={
            <ProtectedRoute role="student">
              <MainLayout><StudentMaterials /></MainLayout>
            </ProtectedRoute>
          } />

          {/* Logic for Student(Setting) and Student(Update_Settings) endpoints */}
          <Route path="/student/settings" element={
            <ProtectedRoute role="student">
              <MainLayout>
                <div className="attendance-card">
                  <h2 className="lavender-text">Profile Settings</h2>
                  <p>Manage your account information here.</p>
                  {/* Your settings form logic will go here */}
                </div>
              </MainLayout>
            </ProtectedRoute>
          } />

          {/* Default Redirects */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
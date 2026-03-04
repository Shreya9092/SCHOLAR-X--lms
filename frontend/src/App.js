import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/login';
import TeacherDashboard from './pages/attendance';
import StudentDashboard from './pages/studentdashboard';
import MainLayout from './components/MainLayout';
import TeacherMaterials from './pages/TeacherMaterials';
import StudentMaterials from './pages/StudentMaterials';
import AdminStudents from './pages/AdminStudents';
import AdminCourses from './pages/AdminCourses';
import AdminSections from './pages/AdminSections';
import './styles/Modules.css';
import './index.css';
// Add any other pages that the terminal says are "not defined"

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Teacher Route */}
<Route path="/teacher/materials" element={
  <ProtectedRoute role="teacher"><MainLayout><TeacherMaterials /></MainLayout></ProtectedRoute>
} />

{/* Student Route */}
<Route path="/student/materials" element={
  <ProtectedRoute role="student"><MainLayout><StudentMaterials /></MainLayout></ProtectedRoute>
} />
          <Route path="/login" element={<Login />} />
          {/* Admin Specific Routes */}
          <Route path="/admin/students" element={
            <ProtectedRoute role="admin">
              <MainLayout><AdminStudents /></MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/programmes" element={
            <ProtectedRoute role="admin"><MainLayout><AdminCourses /></MainLayout></ProtectedRoute>
          } />
          <Route path="/admin/sections" element={
            <ProtectedRoute role="admin"><MainLayout><AdminSections /></MainLayout></ProtectedRoute>
          } />
          
          <Route path="/teacher-dashboard" element={
            <ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>
          } />

          <Route path="/student-dashboard" element={
            <ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>
          } />
          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
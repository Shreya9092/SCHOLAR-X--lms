import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Interceptor to attach JWT token to every request
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

// Auth Routes
export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);

// Teacher Routes
export const takeAttendance = (data) => API.post('/attendance', data);
export const getTeacherDashboard = () => API.get('/dashboard/teacher');
export const createAssignment = (data) => API.post('/assignments/create', data);

// Student Routes
export const getStudentDashboard = () => API.get('/dashboard/student');
export const getAssignments = () => API.get('/assignments/student');
export const submitAssignment = (formData) =>
  API.post('/assignments/submit', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }, // For file uploads
  });
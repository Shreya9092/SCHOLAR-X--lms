import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔐 Automatically attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* =========================
   AUTH APIs
========================= */

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

/* =========================
   DASHBOARD APIs
========================= */

export const getTeacherDashboard = async () => {
  const response = await api.get("/dashboard/teacher");
  return response.data;
};

export const getStudentDashboard = async () => {
  const response = await api.get("/dashboard/student");
  return response.data;
};

/* =========================
   ADMIN APIs
========================= */

export const createProgramme = async (data) => {
  const response = await api.post("/programmes", data);
  return response.data;
};

export const createSection = async (data) => {
  const response = await api.post("/sections", data);
  return response.data;
};

export const createSubject = async (data) => {
  const response = await api.post("/subjects", data);
  return response.data;
};

/* =========================
   ATTENDANCE APIs
========================= */

export const takeAttendance = async (data) => {
  const response = await api.post("/attendance", data);
  return response.data;
};

/* =========================
   ASSIGNMENT APIs
========================= */

export const createAssignment = async (data) => {
  const response = await api.post("/assignments/create", data);
  return response.data;
};

export const getStudentAssignments = async () => {
  const response = await api.get("/assignments/student");
  return response.data;
};

export const getAssignmentSubmissions = async (assignmentId) => {
  const response = await api.get(
    `/assignments/submissions/${assignmentId}`
  );
  return response.data;
};

export const submitAssignment = async (formData) => {
  const response = await api.post(
    "/assignments/submit",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

/* =========================
   MATERIAL APIs
========================= */

export const uploadMaterial = async (formData) => {
  const response = await api.post(
    "/materials/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const getMaterials = async (subjectId) => {
  const response = await api.get(`/materials/${subjectId}`);
  return response.data;
};

/* =========================
   SETTINGS APIs
========================= */

export const getSettings = async () => {
  const response = await api.get("/settings");
  return response.data;
};

export const updateSettings = async (data) => {
  const response = await api.put("/settings/update", data);
  return response.data;
};

export default api;
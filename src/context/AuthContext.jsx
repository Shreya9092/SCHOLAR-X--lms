import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On page refresh, check if user exists in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save token and user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      return user;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  // LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
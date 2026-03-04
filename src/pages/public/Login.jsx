import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(email, password);

      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher/dashboard");
      } else if (user.role === "student") {
        navigate("/student/dashboard");
      }
    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>LMS Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
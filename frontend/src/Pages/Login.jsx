import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      // Simpan token dan role ke localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role); // Simpan role

      // Arahkan berdasarkan role
      if (response.data.role === "admin") {
        navigate("/admin-dashboard"); // Arahkan admin ke dashboard admin
      } else {
        navigate("/user-dashboard"); // Arahkan user biasa ke dashboard user
      }
    } catch (error) {
      if (error.response) {
        setMessage("Invalid credentials");
      } else {
        setMessage("Error: Unable to connect to the server");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;

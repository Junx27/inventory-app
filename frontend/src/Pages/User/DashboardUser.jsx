import axios from "axios";
import { useNavigate } from "react-router-dom";

function DashboardUser() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/logout");
      // Hapus informasi sesi (misalnya, token) dari local storage atau state
      // localStorage.removeItem("token"); // Jika menggunakan token
      localStorage.removeItem("token");
      // Arahkan pengguna kembali ke halaman login
      navigate("/");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard user</h1>
      <button className="bg-red-500 p-5" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default DashboardUser;

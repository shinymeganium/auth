import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function UserView() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token || token === "undefined")
          return <Navigate to="/login" />;

        const response = await axios.get(
          "http://localhost:3000/dashboard",
          { headers: { Authorization: `Bearer ${token}` } });

        setEmail(response.data.user.email);
        setRole(response.data.user.role);
      }
      catch (err) {
        navigate("/login");
      }
    };

    loadDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-lg">

        <div className="flex justify-between">
          <h1 className="mb-4 text-3xl font-bold text-blue-600">
            Personal Dashboard
          </h1>
          
          {role === "admin" && (
          <button
            onClick={() => navigate("/admin")}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Admin Panel
          </button>
        )}
        </div>

        <p className="mb-8 text-slate-600">
          Welcome back, {email}
        </p>

        <div className="rounded-xl bg-slate-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Protected Content
          </h2>

          <p className="text-slate-600">
            Only authenticated users can access this
            page.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserView;
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {

  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={
          localStorage.getItem("token")
          ? <Navigate to="/me" />
          : <Navigate to="/login" />
        } />

        <Route path="/register" element={
          <PublicRoute>
            <RegisterForm />
          </PublicRoute>
          } />
        <Route path="/login" element={
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        } />

        <Route
          path="/me"
          element={
            <ProtectedRoute>
              <UserView />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminView />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
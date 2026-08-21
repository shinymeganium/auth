import { Routes, Route, Navigate } from "react-router";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserView from "./components/UserView";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/me"
          element={
            <ProtectedRoute>
              <UserView />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
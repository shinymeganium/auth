import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined")
    return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
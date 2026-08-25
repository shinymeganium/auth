import { useNavigate } from "react-router-dom";

function AdminView() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-2xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Admin Dashboard
        </h1>

        <p className="mt-4 text-slate-600">
          Only users with admin privileges can access this page.
        </p>

        <button
          onClick={() => navigate("/me")}
          className="mt-4 rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default AdminView;
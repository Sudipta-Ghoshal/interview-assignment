import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">
        {/* Profile Circle */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Hello,{" "}
          <span className="font-semibold text-gray-700">{user.username}</span>
        </p>

        {/* Dashboard Card */}
        <div className="bg-gray-50 rounded-2xl p-5 shadow-inner mb-6">
          <p className="text-gray-600 text-sm">
            You are successfully logged in.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Status</span>

            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Active
            </span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-linear-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

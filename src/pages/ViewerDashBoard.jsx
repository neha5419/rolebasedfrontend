
     
import { useLocation } from "react-router-dom";

export default function ViewerDashboard() {
  const location = useLocation();
  const user = location.state?.user; 

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      {/* Header */}
      <div className="bg-blue-600 text-white w-full text-center py-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Viewer Dashboard</h1>
        <p className="text-lg mt-2">Welcome! You can only view your details on this dashboard.</p>
      </div>

      {/* Content */}
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-600">Name:</p>
            <p className="text-lg font-semibold text-gray-900">{user.name}</p> 
          </div> */}
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-600">Email:</p>
            <p className="text-lg font-semibold text-gray-900">{user.email}</p> 
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-600">Role:</p>
            <p className="text-lg font-semibold text-gray-900">Viewer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-600">
        <p>© 2024 Viewer Dashboard. All Rights Reserved.</p>
      </div>
    </div>
  );
}


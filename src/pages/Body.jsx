import { useNavigate } from 'react-router-dom';

export default function Body() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="text-center text-white p-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Welcome to Our Website!
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Explore amazing features and join our community today. Sign in or register to get started.
        </p>

        {/* Dancing Panda */}
        <div className="mb-8 animate__animated animate__fadeIn animate__delay-2s">
          <img 
            src="/panda.webp"  // Replace with the correct path to the panda image 
            alt="Dancing Panda"
            className="w-40 mx-auto" 
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="px-8 py-3 bg-blue-600 rounded-lg text-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

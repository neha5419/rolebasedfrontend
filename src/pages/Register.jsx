import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import API_URL from "../utils/constants.jsx";

export default function Register() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleClick() {
    setLoading(true); // Start loading spinner

    try {
      await axios.post(`${API_URL}/users/register`, info);

      toast.success("Registration successful! Please log in.");
      setInfo({ name: "", email: "", password: "" }); // Clear the form
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36">
        <ToastContainer/>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Register</h2>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={info.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {loading ? (
          <div className="flex justify-center">
            <TailSpin height={30} width={30} color="blue" />
          </div>
        ) : (
          <button
            onClick={handleClick}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
}

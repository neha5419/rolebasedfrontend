import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import API_URL from "../utils/constants.jsx";
import ForgetPassword from "./ForgetPassword.jsx";

axios.defaults.withCredentials = true;
// Function to decode JWT manually
function decodeJWT(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Adjust for base64 URL encoding
  const decodedData = JSON.parse(atob(base64)); // Decode the base64 payload and parse it
  return decodedData;
}

export default function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [, setCookie] = useCookies(["jwt"]); // For storing JWT
  const navigate = useNavigate(); // To handle redirection

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
      const response = await axios.post(`${API_URL}/users/login`, info);
      console.log(response.data);
      const { token } = response.data; // Extract token from response
      if (!token) {
        throw new Error("No token received from server.");
      }
      setCookie("jwt", token, { path: "/", httpOnly: false }); // Store JWT token in cookie

      const user = decodeJWT(token); // Decode JWT manually
      const roles = user.roles;

      toast.success(`Welcome, ${user.email}!`, {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect based on the role
      if (roles.includes("Admin")) {
        navigate("/admin-dashboard");
      } else if (roles.includes("Viewer")) {
        navigate("/viewer-dashboard",{ state: { user } });
      } else if (roles.includes("Modifier")) {
        navigate("/modifier-dashboard");
      } else {
        toast.error("No valid role found!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
        console.log(error);
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false); // Stop loading spinner
    }
  }

   function handlePassword(){
       navigate("/forget-pass")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36">
        <ToastContainer/>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>
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
            Login
          </button>
        )}

          <button
            onClick={handlePassword}
            className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Forget Password
          </button>
      </div>
    </div>
  );
}

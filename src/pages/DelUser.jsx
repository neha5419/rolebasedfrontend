import { useState } from "react";
import axios from "axios";
import API_URL from "../utils/constants";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
export default function DelUser() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    setId(e.target.value);
  }

  async function handleDel() {
    setLoading(true);
    const config = {
      params: {
        id: id,
      },
    };
    try {
      const response = await axios.delete(`${API_URL}/users/${id}`, config);
      console.log("data deleted succesfully", response);
      toast.success("User Deleted");
      setId("");
    } catch (error) {
      console.log(error);
      toast.error("Cannot Delete User");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36">
        <ToastContainer />
        <input
          type="number"
          value={id}
          onChange={handleChange}
          placeholder="Enter Your Id"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {loading ? (
          <div className="flex justify-center">
            <TailSpin height={30} width={30} color="blue" />
          </div>
        ) : (
          <button
            onClick={handleDel}
            className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Delete User
          </button>
        )}
      </div>
    </div>
  );
}

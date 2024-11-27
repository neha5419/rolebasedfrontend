import axios from "axios"
import API_URL from "../utils/constants";
import { useState } from "react";
import Admin from "./Admin.jsx";
import { useNavigate } from "react-router-dom";
export default function AdminDashboard() {

const [users,getUsers]=useState();
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
  async function getAll(){
    
    try{
      const response=await axios.get(`${API_URL}/users`);
      console.log(response);
      getUsers(response.data);
    }catch(error){
        console.log(error);
    }finally{
      setLoading(true);
    }
  }

  function handleRole(){
   navigate("/role-set")
  }

  function handleDel(){
    navigate("/del")
  }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="w-full mt-9 max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36"> 
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Manage users: Add, Edit, and Delete functionality available.</p>
        <button
            onClick={getAll}
            className="w-72 px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Get All Users
          </button>
          {loading &&
            users.map((data)=>{

              return <Admin key={data.id} name={data.name} email={data.email}/>

            })
          }
          <button
            onClick={handleRole}
            className="w-72 px-4 py-2 mt-3 ml-24 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Set Role To Users
          </button>
          <button
            onClick={handleDel}
            className="w-72 px-4 py-2 mt-3 ml-24 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Delete Users
          </button>
      </div>
      </div>
    );
  }
  
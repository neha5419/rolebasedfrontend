import { useState } from "react";
import axios from "axios";
import { toast ,ToastContainer} from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import API_URL from "../utils/constants";
export default function RoleSet() {
  const [id, setId] = useState();
  const[roleId,setRole]=useState();
  const [loading, setLoading] = useState(false);

  async function handleId(e) {
    setId(e.target.value);
  }
  async function handleRole(e) {
    setRole(e.target.value);
  }

 async function handleClick(){
    setLoading(true);
    const config={
        params:{
            id:id
        }
    }
   try{
     const response=await axios.post(`${API_URL}/users/roles/${id}`,{roleId},config);
     console.log(response.data);
     toast.success("Role Set Successfully");
     setId("");
     setRole("");
   }catch(error){
    console.log(error);
    toast.error("Role Cannot Be Set");
   }finally{
    setLoading(false);
   }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36">
        <ToastContainer/>
      <input
        type="number"
        value={id}
        onChange={handleId}
        placeholder="Enter User Id"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <input
        type="number"
        value={roleId}
        onChange={handleRole}
        placeholder="Enter Role Id"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
 {loading ? (
          <div className="flex justify-center">
            <TailSpin height={30} width={30} color="blue" />
          </div>
        ) :
       <button
            onClick={handleClick}
            className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Add Role
          </button>
}
    </div>
    </div>
  );
}

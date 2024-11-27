
import axios from "axios";
import { useState } from "react";
import API_URL from "../utils/constants";
import { toast ,ToastContainer} from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword(){


    const[info,setInfo]=useState({
        email:"",
        newpass:""
    })

    const [loading, setLoading] = useState(false);

    function handleChange(e){
     const{name,value}=e.target;


     setInfo((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
    }

   async function handleReset(){
    setLoading(true);
        try{
             const response=await axios.post(`${API_URL}/users/forget-pass`,info);
             console.log(response.data);
             toast.success("Password Changed");
             setInfo({
                email:"",
                newpass:""
             })
        }catch(error){
           comsole.log(error);
           toast.error("Sorry Cannot Change Password")
        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md mb-36">
        <ToastContainer/>
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
          name="newpass"
          value={info.newpass}
          onChange={handleChange}
          placeholder="Enter Your Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

{loading ? (
          <div className="flex justify-center">
            <TailSpin height={30} width={30} color="blue" />
          </div>
        ) :
          <button
            onClick={handleReset}
            className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 focus:outline-none"
          >
            Reset Password
          </button>
}
        </div>
        </div>
    )
}
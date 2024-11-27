import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeLayout from './components/HomeLayout.jsx'
import CustomError from './components/CustomError.jsx'
import Body from './pages/Body.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AdminDashBoard from './pages/AdminDashBoard.jsx'
import ViewerDashBoard from './pages/ViewerDashBoard.jsx'
import ModifierDashBoard from './pages/ModifierDashBoard.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ForgetPassword from './pages/ForgetPassword.jsx'
import RoleSet from './pages/RoleSet.jsx'
import DelUser from './pages/DelUser.jsx'
function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<CustomError/>,
      children:[
        {
          index:true,
          element:<Body/>
        },
        {
          path:"/register",
          element:<Register/>
        },{
          path:"/login",
          element:<Login/>
        },{
          path:"/admin-dashboard",
          element:<AdminDashBoard/>
        },{
          path:"/viewer-dashboard",
          element:<ViewerDashBoard/>
        },{
          path:"/modifier-dashboard",
          element:<ModifierDashBoard/>
        },{
          path:"/forget-pass",
          element:<ForgetPassword/>
        },
        {
          path:"/role-set",
          element:<RoleSet/>
        },
        {
          path:"/del",
          element:<DelUser/>
        }
      ]
    }
  ])
  return(
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}
export default App;

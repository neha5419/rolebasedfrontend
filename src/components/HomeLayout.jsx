import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
export default function HomeLayout(){
    return(
        <div> 
            <Header/>
            <Outlet/>
            

        </div>
    )
}
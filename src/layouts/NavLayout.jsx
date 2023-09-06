import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function NavLayout({children}) {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col">
    
   
    {children}
    </div>
  )
  }
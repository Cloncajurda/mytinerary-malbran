import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import {Outlet} from 'react-router-dom'

export default function MainLayout({children}) {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col
    sm:bg-blue-300
    md:bg-blue-500
    lg:bg-blue-300
    xl:bg-blue-900 xl:w-[90vw] xl:m-auto
    ">
    <NavBar />
    {children}
    <Outlet />
    <Footer />
    </div>
  );
}

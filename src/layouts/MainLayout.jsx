import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Carousel from "../components/Carousel"

export default function MainLayout({children}) {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col">
    {children}
    <NavBar />
   
    <Footer />
    </div>
  )
}

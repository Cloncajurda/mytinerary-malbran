import MainLayout from "./layouts/MainLayout"
import NavLayout from "./layouts/NavLayout"
import CardPolaroid from "./components/CardPolaroid"
import Carousel from "./components/Carousel"
import { useState } from "react"

function App() {
  const [show,setShow] = useState(true)
  const description = `MyTinerary`

  let data = [
    {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
    {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
    {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
    {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
    {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
    {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
    {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
    {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
    {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
    {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
    {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
    {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
    {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
    {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
    {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
  ]
  return (
    <NavLayout>
      <div className="bg-blue-200 p-2 text-end">
      {  /*Boton para el carrusel */}
      {show ? (<imput onClick={()=>setShow(!show)} type='button' value='hide' className= "cursor-pointer rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)">Hide Options</imput>) : (<imput onClick={()=>setShow(!show)} type='button' value='show' className= "cursor-pointer rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)">Travel Options</imput>)}
      </div>
      <h2 className="m-1 text-blue-700">{`${description}`}</h2>
      <main className="justify-center items center flex">
        <div className="w-100 justify-center ml-[50px] mt-[100px] mr-[50px]">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Find the perfect destination
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planing your next trip has never been easier.
          </p>
          <div>
            <button type="button" className="cursor-pointer inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              View More
            </button>
          </div>
        </div>
        {show ? <Carousel data={data} /> : <h1 className="text-xs font-small text-gray-400">☝️Click on "Travel Options"</h1>}
        
      </main>
    </NavLayout>
    
  )
}

export default App

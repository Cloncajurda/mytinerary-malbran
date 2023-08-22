import MainLayout from "../layouts/MainLayout"
import NavLayout from "../layouts/NavLayout"
import CardPolaroid from "../components/CardPolaroid"
import Carousel from "../components/Carousel"
import { useState,useEffect } from "react"
import axios from "axios"
import apiUrl from '../apiUrl.js'

import React from 'react'

export default function Home() {
    const [show,setShow] = useState(true)
    const [data,setData] = useState([])
    const description = `MyTinerary`
  
    useEffect(
      ()=>{
        axios(apiUrl+'cities/carousel')
        //.then(res=>console.log(res.data.data_carousel))
        .then(res=>setData(res.data.data_carousel))
        .catch(err=>console.log(err))
      },
      []
    )
  return (
    <NavLayout>
      <div className="bg-blue-200 p-2 text-end">
      {  /*Boton para el carrusel */}
      {show ? (<input onClick={()=>setShow(!show)} type='button' value='hide' className= "cursor-pointer rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)"/>) : (<input onClick={()=>setShow(!show)} type='button' value='show' className= "cursor-pointer rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)"/>)}
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

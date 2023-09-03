import { useState } from "react";
import {Link as Anchor} from "react-router-dom";
import Label from "./Label";
import Display from "./Display";

export default function NavBar() {
  let [show, setShow] = useState(false)
  let options = [
    {to: "/", title: "Home", color: "#4F46E5"},
    {to: "/cities", title: "Cities", color: "#4F46E5"},
    {to: "/signin", title: "Log In", backgroundColor: "#4F46E5", color: "white"}
  ]
  return (
    <header className="h-[50px] bg-blue-300 flex items-center text-white">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10 cursor-pointer"
        onClick={()=>setShow(!show)
        }
      >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
      />
      </svg>


      {/* {show ? <Display options={options}/> : null} */} {/* if else */}
      {show && <Display options={options}/>} {/* if */}
      <div className="w-full flex justify-between items-center">
        <h1 className="hidden text-[20px]
        md:flex p-3">
          MyTinerary
        </h1>
        <Label options={options} />
      </div>


    </header>
  )
}

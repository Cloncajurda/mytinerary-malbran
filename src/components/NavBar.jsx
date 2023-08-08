import { useState } from "react"

export default function NavBar() {
  let [show, setShow] = useState(false)

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
        {show ? (
      <div className="flex m-8">
        <p className="p-2 bg-blue rounded-xl w-[100px] text-center mx-1 cursor-pointer">
          Home
        </p>
        <p className="p-2 bg-blue rounded-xl w-[100px] text-center mx-1 cursor-pointer">
          Sign In
        </p>
        <p className="p-2 bg-blue rounded-xl w-[100px] text-center mx-1 cursor-pointer">
          Sign Up
        </p>
      </div>
      ):(null)}
    </header>
  )
}

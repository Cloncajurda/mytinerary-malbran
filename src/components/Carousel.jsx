import CardPolaroid from "./CardPolaroid"
import { useState } from "react"


export default function Carousel({data}) {
  let [counter, setCounter] = useState(0)
  let [counterTo, setCounterTo] = useState(4)

  function next_slide(){
    if (data.length <= counterTo){
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo (counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }

  function prev_slide(){
    if (counter <= 0){
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
    setCounter(counter-4)
    setCounterTo (counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }

  return (
    <div className="flex justify-center mt-[100px]">
    <div id="indicators-carousel" className="flex flex-wrap justify-center items-center">
      <button type="button" className="m-1 cursor-pointer" data-carousel-prev onClick={prev_slide}>
        <span className="bg-blue-300 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none border-2 m-1 border-slate-300">
        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span className="sr-only">Previous</span>
        </span>
      </button>

      <div className="flex flex-wrap justify-center">
        {data.slice(counter,counterTo).map((each, index)=> (
          <CardPolaroid 
            key={index} 
            src={each.photo} 
            alt={each.id} 
            text={each.city}
            id={each._id}
          />
        ))}
      </div>

      <button type="button" className="" data-carousel-next onClick={next_slide}>
        <span className="bg-blue-300 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none border-2 m-1 border-slate-300">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
);
}

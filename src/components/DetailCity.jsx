import { Link as Anchor } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import NavLayout from "../layouts/NavLayout";
const { read_itineraries_from_city } = itinerary_actions

export default function DetailCity({ src, alt, text, id }) {
  const [show,setShow] = useState(false)
  const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
  console.log(id);
  const dispatch = useDispatch()
  useEffect(
    ()=>{dispatch(read_itineraries_from_city({city_id}))},
    []
  )
  return (
    <NavLayout>
    <Anchor to={'/city/'+id} className="w-[300px] md:w-4/5 flex flex-col items-center p-2 m-2 bg-white">
      <img src={src} alt={alt} />
      <p className="text-[20px]">{text}</p>
      <span onClick={()=>setShow(!show)} className="shadow bg-blue-500 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded cursor-pointer w-[100px] text-center">{show ? ('hide') : ('+info')}</span>
      {/* {show ? () : ()} */}
      {show && itineraries.map((each,index)=><p key={index}>{each.name}</p>)}      
    </Anchor>
    </NavLayout>
  );
}
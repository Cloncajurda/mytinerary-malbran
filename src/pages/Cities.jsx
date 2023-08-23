import {useState, useEffect,useRef} from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'

export default function Cities() {
  const [cities,setCities] =useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  useEffect(
    ()=> {
      axios(apiUrl+'Cities?city='+text.current.value)
        .then(res=>setCities(res.data.response)) 
        .catch(err=>console.log(err))
    },[]
  )
  function handleFilter(){
    console.log(text.current.value);
    setReEffect(!reEffect)
  }
  return (
    <>
    <input ref={text} type="text" name="text" id="text" ononKeyUp={handleFilter}/>
      {cities.map(each=> <CardCity key={each.id} src={each.photo} alt={each._id} text={each.city} id={each._id}/>)}
    </>
  
  )
}

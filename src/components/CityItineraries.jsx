import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import itinerary_actions from "../store/actions/itineraries";

//const {itinerary_actions} = itinerary_actions

export default function  CityItineraries({itinerary}) {
    console.log(itinerary)
  const { city_id } = useParams();
  const dispatch = useDispatch();
  //const itineraries = useSelector((store) => store.itineraries.itineraries);
  console.log (city_id)
  useEffect(() => {
    dispatch(itinerary_actions({city_id}));
  }, [city_id]);
console.log (city_id)
  return (
    <div>
    <img src={itinerary.photo} alt={itinerary.name} />
    <h3>{itinerary.name}</h3>
    <p>Price: {itinerary.price}</p>
    <p>Duration: {itinerary.duration} hours</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
  );
};


import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import NavLayout from "../layouts/NavLayout";
import CityItineraries from "../components/CityItineraries";

export default function Itineraries() {
  const { itineraries } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);
  //console.log(city);
  useEffect(() => {
    dispatch(read_city({ id: itineraries }));
  }, []);
  
  return (
    <NavLayout>
      <CityItineraries>
        <img src={itinerary.image} alt={itinerary.title} />
        <h3>{itinerary.title}</h3>
        <p>Price: {itinerary.price}</p>
        <p>Duration: {itinerary.duration} hours</p>
        <p>Likes: {itinerary.likes}</p>
        <p>Hashtags: {itinerary.hashtags.join(", ")}</p>
        <button>Edit</button>
        <button>Delete</button>
      </CityItineraries>

    </NavLayout>
  )
}






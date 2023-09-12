import { useParams } from "react-router-dom";
import { useEffect, useRef, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
const { read_city } = city_actions;
import {Link as Anchor} from "react-router-dom"

import city_actions from "../store/actions/cities";
import itinerary_actions from "../store/actions/itineraries"

import NavLayout from "../layouts/NavLayout";

import FeatureDetailedCard from "../components/FeatureDetailedCard";
import BckGrndImage from "../components/BckGrndImage";



export default function CityDetail() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);
  const itineraryRef = useRef(null);
  const itineraries = useSelector((store) => store.itineraries.itineraries);
  


  //console.log(city);
  useEffect(() => {
    console.log(city_id)
    dispatch(read_city({ id: city_id }));
    dispatch(itinerary_actions(city_id));
  }, []);

  function reviewItineraries() {
    itineraryRef.current.scrollIntoView({ behavior: "smooth" });
  }

  console.log(itineraries)
  return !city ? (
        <div className="absolute !z-50 h-screen w-screen !bg-black">
          <div className= "w-full h-full inset-0 flex items-center justify-center overflow-hidden bg-slate-400/50 animate-pulse rounded-lg">
            <svg className="animate-spin text-neutral-400" xmlns="http://www.w3.org/2000/svg" height="8em" viewBox="0 0 512 512">
                <path fill="currentColor" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
            </svg>
        </div>
        </div>
    ) : (
    <NavLayout>
      <main>
      <BckGrndImage url={city.photo} className={"!h-1/2 mt-1 justify-center"} />
          <section className="flex flex-col gap-4 items-center h-screen">
              <div className="h-screen flex flex-col justify-center items-center text-neutral-100 text-center max-w-2xl gap-4">
                  <h1 className="text-5xl font-bold">{city.city}</h1>
                  <p className="text-2xl italic font-thin">{city.smallDescription}</p>
                  <Anchor to={"/cities"} className="bg-blue-300 text-xl px-8">
                      Go Back to cities
                  </Anchor>
                  <Anchor className="bg-blue-300 text-xl px-8" onClick={() => reviewItineraries()}>
                      View Iterinaries
                  </Anchor>
              </div>
          </section>
          <section ref={itineraryRef} className="space-y-8 mb-8 text-neutral-500 dark:text-neutral-300">
              <h1 className="text-center text-3xl font-bold">FEATURES</h1>
              <div className="flex flex-wrap justify-center gap-4 xs:gap-16">
                  <FeatureDetailedCard title={`City: ${city.city}`} src="../img/png/currency.png" className="dark:border-sky-500 dark:shadow-sky-500 from-sky-500/50 via-sky-400 to-sky-200" />
                  <FeatureDetailedCard title={`Country: ${city.country}`} src="../img/png/country.png" className="dark:border-purple-500 dark:shadow-violet-500 from-violet-500/60 via-violet-400 to-violet-300" />
                  <FeatureDetailedCard title={`Population: ${city.population}`} src="../img/png/language.png" className="dark:border-fuchsia-400 dark:shadow-fuchsia-500 bg-gradient-to-tr from-fuchsia-500/60 via-fuchsia-400 to-fuchsia-300" />
              </div>
              <h1 className="text-center text-3xl font-bold">ITINERARIES</h1>
              <div className="grid justify-items-center gap-16">
                  {!itineraries && <noResult icon="fa-solid fa-mountain-city drop-shadow-xl" title="No Itineraries Yet" text={"Currently, there are no itineraries available for this city. Check back later for updates!"} />}
                  {itineraries?.map((itinerary, i) => (
                      //<Itinerary key={i} itinerary={each} user={city.admin_id} />
                    <div className="flex flex-col justify-evenly mb-2">
                    <img src={itinerary.photo} alt={itinerary.name} />
                    <h3>{itinerary.name}</h3>
                    <p>Price: {itinerary.price}</p>
                    <p>Duration: {itinerary.duration} hours</p>
                    <button type="button" className="cursor-pointer inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Edit</button>
                    <button type="button" className="cursor-pointer inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Delete</button>
                  </div>
                  ))}
              </div>
          </section>
      </main>
    </NavLayout>
  );
}
